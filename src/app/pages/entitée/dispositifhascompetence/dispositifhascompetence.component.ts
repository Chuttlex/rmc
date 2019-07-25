import { Component, OnInit, Input } from '@angular/core';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';

@Component({
  selector: 'app-dispositifhascompetence',
  templateUrl: './dispositifhascompetence.component.html',
  styleUrls: ['./dispositifhascompetence.component.css']
})
export class DispositifhascompetenceComponent implements OnInit {
  @Input() dispositifhascompetence: Dispositifhascompetence;

  constructor() { }

  ngOnInit() {
  }

}
