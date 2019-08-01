import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../pages/classe/competence';
import { Ressource } from '../pages/classe/ressource';

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
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['../../assets/stylesheets/tabStyle.css', './tableau.component.css']
})
export class TableauComponent implements OnInit {

  @Input() competentes: Competence[];
  @Input() ressources: Ressource[];

  displayedColumns: string[] = ['competence', 'ressourceNiveau1', 'ressourceNiveau2', 'ressourceNiveau3', 'ressourceNiveau4'];
  dataSource = TEAM_VALUE;
  constructor() { }

  ngOnInit() {
  }

}
