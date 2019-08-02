import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';

@Component({
  selector: 'app-ressourcehascompetence',
  templateUrl: './ressourcehascompetence.component.html',
  styles: []
})
export class RessourcehascompetenceComponent implements OnInit {
  @Input() ressourcehascompetence: Ressourcehascompetence;

  constructor() {}

  ngOnInit() {}
}
