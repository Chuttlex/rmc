import { Component, OnInit, ViewChild } from '@angular/core';
import { Competence } from '../../classe/competence';
import { CompetenceService } from '../../service/competence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-competence',
  templateUrl: './display-competence.component.html',
  styleUrls: [ '../../../../tabStyle.css'],
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

  clear(): void {
    this.compService.clear().subscribe();
  }

  create(competence: Competence): void {
    this.compService.create(competence).subscribe((competencec) => this.competences.push(competencec));
  }

  delete(id: number): void {
    this.competences = this.competences.filter((c) => c.id !== id);
    this.compService.delete(id).subscribe();
  }

  getCompetences(): void {
    this.compService.getAll()
    .subscribe((competences) => this.competences = competences);
  }

  getById(id: number): void {
    this.compService.getById(id).subscribe((competence) => this.competences.push(competence));
  }

  update(competence: Competence): void {
    this.competences = this.competences.filter((c) => c.id !== competence.id);
    this.competences.push(competence);
    this.compService.update(competence).subscribe();
  }

  getByDomaine(nom: string): void {
  this.compService.getByDomaine(nom).subscribe((competences) => this.competences = competences);
  }

  getByNom(nom: string): void {
    this.compService.getByNom(nom).subscribe((competence) => this.competences.push(competence));
  }

  getByEquipe(nom: string): void {
    this.compService.getByEquipe(nom).subscribe((competences) => this.competences = competences);
  }

  getByRessource(nom: string, prenom: string, equipe: string): void {
    this.compService.getByRessource(nom, prenom, equipe).subscribe((competences) => this.competences = competences);
  }

  getByRessourceAndNiveau(nom: string, prenom: string, equipe: string, niveau: number, orgnom: string): void {
    this.compService.getByRessourceAndNiveau(nom, prenom, equipe, niveau, orgnom).subscribe((competences) => this.competences = competences);
  }

  getByEquipeAndNiveau(nom: string, niveau: number, orgnom: string): void {
    this.compService.getByEquipeAndNiveau(nom, niveau, orgnom).subscribe((competences) => this.competences = competences);
  }

}
