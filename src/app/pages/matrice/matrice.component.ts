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
  ressourceNom1: number;
  ressourceNom2: number;
  ressourceNom3: number;
  ressourceNom4: number;

}

const TEAM_VALUE: TestTeam[] = [
  {competence: 'Java', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4},
  {competence: 'C', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4},
  {competence: '.Net', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4},
  {competence: 'Js', ressourceNom1: 1, ressourceNom2: 2, ressourceNom3: 3, ressourceNom4: 4},
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
  displayedColumns: string[] = ['competence', 'ressourceNom1', 'ressourceNom2', 'ressourceNom3', 'ressourceNom4'];
  columnToDisplay: string[] = this.displayedColumns.slice();
  dataSource: TestTeam[] = TEAM_VALUE;


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
