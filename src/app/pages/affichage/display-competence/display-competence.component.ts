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

  delete(): void {
    this.compService.delete(this.selectedCompetence.id).subscribe(
      (result) => {
        this.compService.getAll().subscribe(
          (comps) => {
            this.competences = comps;
            this.isSelected=false;
            this.router.navigate(['/displayCompetence']);
          }
        )
      })
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
