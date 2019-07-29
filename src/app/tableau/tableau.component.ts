import { Component, OnInit } from '@angular/core';

export interface TestTeam {
  competence: string;
  ressource: string[];
  niveau: number;
}

const TEAM_VALUE: TestTeam[] = [
  {competence: 'Java', ressource: ['Paul'], niveau: 2},
  {competence: 'C', ressource: ['Pierre'], niveau: 3},
  {competence: '.Net', ressource: ['Michel'], niveau: 4},
  {competence: 'Js', ressource: ['Charles'], niveau: 3},
];

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  displayedColumns: string[] = ['competence','ressource','niveau'];
  dataSource = TEAM_VALUE;
  constructor() { }

  ngOnInit() {
  }

}
