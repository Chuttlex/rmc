import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from '../../classe/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styles: []
})
export class EquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  constructor() {

  }

  ngOnInit() {

  }

}
