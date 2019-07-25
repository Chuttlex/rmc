import { Component, OnInit } from '@angular/core';
import { RegleService } from '../service/regle.service';
import { EquipeService } from '../service/equipe.service';
import { DispositifService } from '../service/dispositif.service';
import { CalcService } from '../service/calc.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RadarConfig } from './config';
import { Equipe } from '../classe/equipe';
import { Dispositif } from '../classe/dispositif';
import { Regle } from '../classe/regle';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: ['./radar.component.css'],
  providers: [RegleService, EquipeService, DispositifService, CalcService]
})
export class RadarComponent implements OnInit {
  equipes: Equipe[];
  projets: Dispositif[];
  regles: Regle[];
  form = new FormGroup ({
    dispositif: new FormControl('dispositif'),
    equipe: new FormControl('equipe'),
  });
  selectedEquipe: Equipe;

  constructor(private regleService: RegleService, private equipeService: EquipeService, private dispService: DispositifService,
    private calcService: CalcService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((dispositifs) => this.projets = dispositifs);
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
    const data = RadarConfig.configPart1;
    // Ajout du nombre de labels et les labels
    // Exemple: values : '0:5:1', labels : ['Java','C','Javascript',"Travail d'equipe", 'Conseil', 'Angular' ],
    let competences: string[];
    for (let i = 0; i < this.regles.length; i++) {
      competences.push(this.regles[0].cnom);
    }
    // Filtrage pour avoir chaque compétence en 1 exemplaire
    competences = competences.filter((elem, index, self) => index === self.indexOf(elem));
    const values = "values : '0:" + competences.length + ":1'";
    const labels = values + ', labels : ' + competences;
    data.concat(labels);
    data.concat(RadarConfig.configPart2);
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
   data.concat(series);
   data.concat(RadarConfig.configPart3);
    const file = new Blob([data], { type: 'text;charset=utf-8'});
    //saveAs(file, 'script.js');
  }

}
