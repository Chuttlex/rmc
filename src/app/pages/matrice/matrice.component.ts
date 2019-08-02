import {Component, Input, OnInit} from '@angular/core';
import { CompetenceService } from '../service/competence.service';
import { RessourceService } from '../service/ressource.service';
import { DispositifService } from '../service/dispositif.service';
import { EquipeService } from '../service/equipe.service';
import { Dispositif } from '../classe/dispositif';
import { Equipe } from '../classe/equipe';
import { Competence } from '../classe/competence';
import { Ressource } from '../classe/ressource';

export interface TestTeam {
  competence: string;
  ressourceNiveau1: number;
  ressourceNiveau2: number;
  ressourceNiveau3: number;
  ressourceNiveau4: number;
}

const TEAM_VALUE: TestTeam[] = [
  {competence: 'Java', ressourceNiveau1: 1, ressourceNiveau2: 1, ressourceNiveau3: 1, ressourceNiveau4: 1},
  {competence: 'C', ressourceNiveau1: 2, ressourceNiveau2: 2, ressourceNiveau3: 2, ressourceNiveau4: 2},
  {competence: '.Net', ressourceNiveau1: 3, ressourceNiveau2: 3, ressourceNiveau3: 3, ressourceNiveau4: 3},
  {competence: 'Js', ressourceNiveau1: 4, ressourceNiveau2: 4, ressourceNiveau3: 4, ressourceNiveau4: 4},
];

@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['../../../assets/stylesheets/tabStyle.css'],
  providers: [CompetenceService, RessourceService, DispositifService, EquipeService]
})
export class MatriceComponent implements OnInit {
  dispositifs: Dispositif[];
  equipes: Equipe[];
  ressources: Ressource[] = [];
  competences: Competence[] = [];
  selectedDispositif: Dispositif;
  displayedColumns: string[] = ['competence', 'ressourceNiveau1', 'ressourceNiveau2', 'ressourceNiveau3', 'ressourceNiveau4'];
  dataSource = TEAM_VALUE;


  constructor(private compService: CompetenceService, private dispService: DispositifService,
              private resService: RessourceService, private equipeService: EquipeService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((d) => this.dispositifs = d);
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
  }
}
