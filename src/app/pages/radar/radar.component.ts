import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RegleService } from '../service/regle.service';
import { EquipeService } from '../service/equipe.service';
import { DispositifService } from '../service/dispositif.service';
import { CalcService } from '../service/calc.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RadarConfig } from './config';
import { Equipe } from '../classe/equipe';
import { Dispositif } from '../classe/dispositif';
import { Regle } from '../classe/regle';
import * as zing from 'zingchart';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: ['./radar.component.css'],
  providers: [RegleService, EquipeService, DispositifService, CalcService]
})
export class RadarComponent implements OnInit, AfterViewInit {
  equipes: Equipe[];
  projets: Dispositif[];
  regles: Regle[];

  form = new FormGroup ({
    dispositif: new FormControl(''),
    equipe: new FormControl(''),
  });
  selectedEquipe: Equipe;

  chart: zing.Chart = {
    type : 'radar',
    title : {
      text : "Radar utilisant Zing"
    },
    subtitle : {
      text : "petit test"
    },
    legend :{
        "highlight-plot":true,
        "draggable":true, //automatically adds header
        // "drag-handler":"icon", //"header" (default) or "icon"
        header : {
          text : "Equipes:"
        },
        "toggle-action" : "remove", // "hide" (default),"remove","disabled" | peut aussi être utilisé sur des items et markers
      layout : "3x1", // lignes x colonnes
      x : "70%",
      y : "10%"
    },
    plot : {
      aspect : 'area',
      animation: {
          "on-legend-toggle" : true, // recrée le dessin quand un élément est retiré
        effect:3,
        sequence:1,
        speed:700
      }
    },
    scaleV : {
      visible : false
    },
    scaleK : {
      values : '0:5:1',
      labels : ['Java','C','Javascript',"Travail d'equipe", 'Conseil', 'Angular' ],
      item : {
        fontColor : '#607D8B',
        backgroundColor : "white",
        borderColor : "#aeaeae",
        borderWidth : 1,
        padding : '5 10',
        borderRadius : 10
      },
      refLine : {
        lineColor : '#c10000'
      },
      tick : {
        lineColor : '#59869c',
        lineWidth : 2,
        lineStyle : 'dotted',
        size : 20
      },
      guide : {
        lineColor : "#607D8B",
        lineStyle : 'solid',
        alpha : 0.3,
        backgroundColor : "#c5c5c5 #718eb4"
      }
    },
    series : [
      {
        values : [59, 39, 38, 19, 21, 35],
        text:'Equipe 1'
      },
      {
        values : [20, 20, 54, 41, 41, 35],
        //lineColor : '#53a534',
        //backgroundColor : '#689F38',
        text : 'Equipe 2'
      },
      // added by thomas
      {values : [70, 60, 5, 62, 21, 45],
      //lineColor : '#4F57FC',
      //backgroundColor: '#333CFF',
      text : 'Equipe 3'
      }
    ]
  };

  constructor(private regleService: RegleService, private equipeService: EquipeService, private dispService: DispositifService,
    private calcService: CalcService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((dispositifs) => this.projets = dispositifs);
  }

  ngAfterViewInit() {
    zing.render({ 
      id : 'myChart', 
      data : this.chart, 
      height: '90%', 
      width: '90%' 
    });
  }

  updateEquipes(disp: Dispositif): void {
    this.equipeService.getByDispositif(disp.nom).subscribe((equipes) => this.equipes = equipes);
  }

  updateRegles(equipe: Equipe): void {
    this.regleService.getByEquipe(equipe.nom).subscribe((regles) => this.regles = regles);
    this.selectedEquipe = equipe;
    this.generateRadar();
  }

  generateRadar(): void {
    // Ajout du nombre de labels et les labels
    // Exemple: values : '0:5:1', labels : ['Java','C','Javascript',"Travail d'equipe", 'Conseil', 'Angular' ],
    let competences: string[];
    for (let i = 0; i < this.regles.length; i++) {
      competences.push(this.regles[0].cnom);
    }
    // Filtrage pour avoir chaque compétence en 1 exemplaire
    competences = competences.filter((elem, index, self) => index === self.indexOf(elem));
    this.chart.scaleK.values = "'0:" + competences.length + ":1'";
    this.chart.scaleK.labels = competences;
    // Ajout des valeurs
    // Exemple:
    /*
    series : [
    {
      values : [59, 39, 38, 19, 21, 35],
      text:'Equipe 1'
    },
    {
      values : [20, 20, 54, 41, 41, 35],
      //lineColor : '#53a534',
      //backgroundColor : '#689F38',
      text : 'Equipe 2'
    },
    {values : [70, 60, 5, 62, 21, 45],
    //lineColor : '#4F57FC',
    //backgroundColor: '#333CFF',
    text : 'Equipe 3'
    }
  ]
    */
   let series: string;
   const vEquipe = [];
   const vRegle = [];
   let map: Map<String, Number>;
   // Récupère le niveau moyen de l'équipe pour chaque compétence
   this.calcService.getMoyenneForEquipe(this.selectedEquipe).subscribe((gmap) => map = gmap);
   while (vEquipe.length === competences.length && vRegle.length === competences.length) {
     for (let j = 0; j < competences.length; j++) {
       if (this.regles[j].cnom === competences[j]) {
         vRegle.push(this.regles[j].niveau.toString());
       }
       vEquipe.push(map.get(competences[j]).toString());
     }
   }
   series = `series : [
     {
       values :` + vEquipe + `,
       text : 'Equipe',
     },
     {
       values: ` + vRegle + `,
       text : 'Règles'
     }
   ]`;
   // regénération du radar
   zing.render({ 
    id : 'myChart', 
    data : this.chart, 
    height: '90%', 
    width: '90%' 
  });
  }
}
