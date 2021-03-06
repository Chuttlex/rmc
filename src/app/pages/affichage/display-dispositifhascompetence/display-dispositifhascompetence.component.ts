import { Component, OnInit, ViewChild } from '@angular/core';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';
import { Router } from '@angular/router';
import { DispositifhascompetenceService } from '../../service/dispositifhascompetence.service';

const testDispHasCpt1: Dispositifhascompetence = {idd: 1, dispositif: 'Manhattan', idc: 101, competence: 'Java'};
const testDispHasCpt2: Dispositifhascompetence = {idd: 1, dispositif: 'Manhattan', idc: 101, competence: 'Java'};
const testDispHasCpt3: Dispositifhascompetence = {idd: 1, dispositif: 'Manhattan', idc: 101, competence: 'Java'};

@Component({
  selector: 'app-display-dispositifhascompetence',
  templateUrl: './display-dispositifhascompetence.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [DispositifhascompetenceService]
})
export class DisplayDispositifhascompetenceComponent implements OnInit {
  dispositifhascompetences: Dispositifhascompetence[] = [];
  selectedDispositifhascompetence: Dispositifhascompetence;
  isSelected: boolean;

  constructor(private dcService: DispositifhascompetenceService, private router: Router) { }

  ngOnInit() {
    this.dcService.getAll().subscribe((d) => this.dispositifhascompetences = d);
    this.dispositifhascompetences.push(testDispHasCpt1, testDispHasCpt2, testDispHasCpt3);
  }

  onSelect(dispositifhascompetence: Dispositifhascompetence): void {
    this.selectedDispositifhascompetence = dispositifhascompetence;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editDispositifhascompetence'], {state: {dc: this.selectedDispositifhascompetence}});
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }
}
