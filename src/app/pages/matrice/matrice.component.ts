import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompetenceService } from '../service/competence.service';
import { RessourceService } from '../service/ressource.service';
import { DispositifService } from '../service/dispositif.service';
import { EquipeService } from '../service/equipe.service';
import { Dispositif } from '../classe/dispositif';
import { Equipe } from '../classe/equipe';
import { Competence } from '../classe/competence';
import { Ressource } from '../classe/ressource';
import { FormGroup, FormControl } from '@angular/forms';
import { Ressourcehascompetence } from '../classe/ressourcehascompetence';
import { RessourcehascompetenceService } from '../service/ressourcehascompetence.service';
import { Router } from '@angular/router';
import { log } from 'util';

export interface TestTeam {
  competence: string;
  ressourceNom1: number;
  ressourceNom2: number;
  ressourceNom3: number;
  ressourceNom4: number;
}

const TEAM_VALUE: TestTeam[] = [
  { competence: 'Java', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4 },
  { competence: 'C', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4 },
  { competence: '.Net', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4 },
  { competence: 'Js', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4 },
];

@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['../../../assets/stylesheets/tabStyle.css', '../../../assets/stylesheets/formStyle.css', './matrice.component.css'],
  providers: [CompetenceService, RessourceService, DispositifService, EquipeService, RessourcehascompetenceService]
})
export class MatriceComponent implements OnInit {
  dispositifs: Dispositif[];
  equipes: Equipe[];
  ressources: Ressource[] = [];
  competences: Competence[] = [];
  selectedDispositif: Dispositif;
  displayedColumns: string[] = ['competence', 'ressourceNom1', 'ressourceNom2', 'ressourceNom3', 'ressourceNom4'];
  columnToDisplay: string[] = this.displayedColumns.slice();
  dataSource: TestTeam[] = TEAM_VALUE;
  form: FormGroup;

  constructor(private compService: CompetenceService, private dispService: DispositifService, private router: Router,
    private resService: RessourceService, private equipeService: EquipeService, private rcService: RessourcehascompetenceService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((d) => this.dispositifs = d);
    this.form = new FormGroup({
      dispositif: new FormControl(),
      equipe: new FormControl()
    });
  }


  updateEquipes(dispositif: Dispositif) {
    this.equipeService.getByDispositif(dispositif.nom).subscribe((e) => this.equipes = e);
    this.selectedDispositif = dispositif;
  }

  getRessourcesAndCompetences(equipe: Equipe) {
    this.resService.getByEquipe(equipe.nom).subscribe((res) => {
      this.ressources = res;
      this.compService.getByDispositif(this.selectedDispositif.nom).subscribe((comps) => {
        this.competences = comps;
        this.generateTable();
      });
    });
  }

  // Génère ou envoie les données pour le tableau
  generateTable() {
    throw new Error('Method not implemented.');
    // Ajout de FormControl dans le FormGroup
  }

  // Création des ressourcehascomeptence
  evaluate() {
    let rcs: Ressourcehascompetence[] = [];
    this.rcService.createSome(rcs).subscribe(
      (result) => this.router.navigate(['/displayRessourcehascompetence'])
    )
  }

  getDatasource() {
    console.log(this.dataSource);
  }

  changeValue(element: any, property: string, event: any) {
    for(let i = 0; i < this.dataSource.length; i++) {
      if(this.dataSource[i].competence === element) {
        this.dataSource[i][property] = parseInt(event.target.textContent);
      }
    }
  }
}
