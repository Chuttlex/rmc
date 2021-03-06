import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RegleService } from '../service/regle.service';
import { EquipeService } from '../service/equipe.service';
import { DispositifService } from '../service/dispositif.service';
import { CalcService } from '../service/calc.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Equipe } from '../classe/equipe';
import { Dispositif } from '../classe/dispositif';
import { Regle } from '../classe/regle';
import * as zing from 'zingchart';
import { CompetenceService } from '../service/competence.service';
import { Competence } from '../classe/competence';
import { Ressourcehascompetence } from '../classe/ressourcehascompetence';
import { RessourcehascompetenceService } from '../service/ressourcehascompetence.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['../../../assets/stylesheets/formStyle.css', './radar.component.css'],
  providers: [RegleService, EquipeService, DispositifService, CalcService, CompetenceService, RessourcehascompetenceService]
})
export class RadarComponent implements OnInit, AfterViewInit {
  equipes: Equipe[];
  projets: Dispositif[];
  regles: Regle[];
  competences: Competence[];

  form = new FormGroup ({
    dispositif: new FormControl(''),
    equipe: new FormControl(''),
  });
  selectedEquipe: Equipe;

  chart: zing.Chart = {
    type : 'radar',
    title : {
      text : "Radar affichant le niveau d'une équipe et le niveau souhaité dans une règle pour des compétences"
    },
    subtitle : {
      // text : "petit test"
    },
    legend :{
        "highlight-plot":true,
        "draggable":true, //automatically adds header
        // "drag-handler":"icon", //"header" (default) or "icon"
        header : {
          text : "Valeurs:"
        },
        "toggle-action" : "remove", // "hide" (default),"remove","disabled" | peut aussi être utilisé sur des items et markers
      layout : "2x1", // lignes x colonnes
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
      // values : "0:5:5",
      visible : false,
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
      {
        values : [70, 60, 5, 62, 21, 45],
      //lineColor : '#4F57FC',
      //backgroundColor: '#333CFF',
      text : 'Equipe 3'
      }
    ]
  };

  constructor(private regleService: RegleService, private equipeService: EquipeService, private dispService: DispositifService,
              private calcService: CalcService, private compService: CompetenceService, private rcService: RessourcehascompetenceService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((dispositifs) => this.projets = dispositifs);
  }

  ngAfterViewInit() {
    /* pour générer en arrivant sur la page après le ngOnInit
    zing.render ({
      id : 'myChart',
      data : this.chart,
      height: window.innerHeight,
      width: window.innerWidth
    });*/
  }

  updateEquipes(disp: Dispositif): void {
    this.equipeService.getByDispositif(disp.nom).subscribe((equipes) => {
      this.equipes = equipes;
      this.compService.getByDispositif(disp.nom).subscribe((comps) => this.competences = comps);
    });
  }

  updateRegles(equipe: Equipe): void {
    this.regleService.getByEquipe(equipe.nom).subscribe((regles) => {
      this.regles = regles;
      this.selectedEquipe = equipe;
    });
    
  }

  generateRadar(): void {
    // Ajout du nombre de labels et les labels
    // Exemple: values : '0:5:1', labels : ['Java','C','Javascript',"Travail d'equipe", 'Conseil', 'Angular' ],
    let comps: string[] = [];
    for (let i = 0; i < this.competences.length; i++) {
      comps.push(this.competences[i].nom);
    }
    this.chart.scaleK.values = "'0:" + (this.competences.length-1) + ":1'";
    this.chart.scaleK.labels = comps;
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
   let vEquipe = [];
   let vRegle = [];
   // Récupère le niveau moyen de l'équipe pour chaque compétence
   let rcs: Ressourcehascompetence[] = [];
   this.rcService.getAll().subscribe((g) => {
     // récupérer toutes les évaluations
     rcs = g;
     // filtrer par l'équipe
     rcs.filter((rc) => {rc.equipe === this.selectedEquipe.nom});
     // récupération de la dernière évaluation pour une ressource couplé à une compétence
     let list: Ressourcehascompetence[] = [];
     for(let counter=0;counter<rcs.length;counter++){
       list.push(rcs[counter]);
       for(let counter2=counter+1;counter2<rcs.length;counter2++){
        if(rcs[counter].cnom === rcs[counter2].cnom &&
          rcs[counter].rnom === rcs[counter2].rnom &&
          rcs[counter].rprenom === rcs[counter2].rprenom &&
          rcs[counter].dateEvolComp <= rcs[counter2].dateEvolComp){
            list.pop();
            list.push(rcs[counter2]);
          }
       }
     }
     // tri pour obtenir chaque évaluation en un seul exemplaire
     list.filter((rc,index,self) => {
       return self.indexOf(rc) === index;
      });
     // calcul de la moyenne pour chaque compétence
     for(let a = 0; a< comps.length; a++){
       let somme = 0;
       let rcsComp = list.filter((rc) => rc.cnom === comps[a]);
       let numberValues = rcsComp.length;
       for(let b = 0; b< rcsComp.length; b++){
        // Si l'évaluation correspond à la bonne compétence
        somme+=rcsComp[b].niveau;
       }
       vEquipe.push(somme/numberValues);
     }
     for(let i = 0; i< comps.length; i++) {
      for(let j=0; j<this.regles.length; j++){
        if (this.regles[j].cnom === comps[i]) {
          vRegle.push(this.regles[j].niveau);
        }
        // vEquipe.push(map.get(comps[i])+"");
      }
    }
    console.log("Equipe: " + vEquipe);
    console.log("Regle: " + vRegle);
    let series = [
      {
        "values" : vEquipe,
        "text" : 'Equipe'
      },
      {
        "values": vRegle,
        "text" : 'Règles'
      }
    ];
    this.chart.series = series;
    // regénération du radar
    zing.render({ 
     id : 'myChart', 
     data : this.chart, 
     height: window.innerHeight, 
     width: window.innerWidth
   });
   })
  }
}
