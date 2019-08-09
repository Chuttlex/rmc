import { Component, OnInit, ViewChild } from '@angular/core';
import { Competence } from '../../classe/competence';
import { CompetenceService } from '../../service/competence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-competence',
  templateUrl: './display-competence.component.html',
  styleUrls: [ '../../../../assets/stylesheets/tabStyle.css'],
  providers: [CompetenceService]
})
export class DisplayCompetenceComponent implements OnInit {

  competences: Competence[];
  selectedCompetence: Competence;
  isSelected: boolean;

  constructor(private compService: CompetenceService, private router: Router) { }

  ngOnInit() {
    this.compService.getAll().subscribe((c) => this.competences = c);
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editCompetence'], {state: {competence: this.selectedCompetence}});
  }

  add(): void {
    this.router.navigate(['/createCompetence'], {state: {competence: this.selectedCompetence}});
  }

  clear(): void {
    this.compService.clear().subscribe();
  }

  delete(): void {
    this.compService.delete(this.selectedCompetence.id).subscribe(
      (result) => this.router.navigate(['/displayOrganisme']));
  }

  update(competence: Competence): void {
    this.competences = this.competences.filter((c) => c.id !== competence.id);
    this.competences.push(competence);
    this.compService.update(competence).subscribe();
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
