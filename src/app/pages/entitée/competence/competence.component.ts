import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../../classe/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styles: []
})
export class CompetenceComponent implements OnInit {
  
  @Input() competence: Competence;
  
  constructor() {

  }

  ngOnInit() {

  }
}
