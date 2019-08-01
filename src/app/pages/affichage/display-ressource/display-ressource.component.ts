import { Component, OnInit, ViewChild } from '@angular/core';
import { Ressource } from '../../classe/ressource';
import { RessourceService } from '../../service/ressource.service';
import { Router } from '@angular/router';

const testRessource1: Ressource = {id: 1, nom: 'Martin', prenom: 'Paul', referenceClient: 25631, equipe: 'A Team', organisme: 'Infotel', dispositif: 'Stagiaires'};
const testRessource2: Ressource = {id: 2, nom: 'Michellac', prenom: 'Pierre', referenceClient: 35214, equipe: 'B Team', organisme: 'Infotel', dispositif: 'Stagiaires'};
const testRessource3: Ressource = {id: 3, nom: 'Briard', prenom: 'Jacques', referenceClient: 65231, equipe: 'C Team', organisme: 'Air France', dispositif: 'Chocolat'};

@Component({
  selector: 'app-display-ressource',
  templateUrl: './display-ressource.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [RessourceService]
})
export class DisplayRessourceComponent implements OnInit {

  ressources: Ressource[] = [];
  selectedR: Ressource;
  isSelected: boolean;

  constructor(private resService: RessourceService, private router: Router) { }

  ngOnInit() {
    this.resService.getAll().subscribe((res) => {
      this.ressources = res;
      this.isSelected = false;
      this.ressources.push(testRessource1,testRessource2,testRessource3);
    });
  }

  onSelect(ressource: Ressource): void {
    this.selectedR = ressource;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editRessource'], {state: {ressource: this.selectedR}});
  }

  add(): void {
    this.router.navigate(['/createRessource'], {state: {ressource: this.selectedR}});
  }

  clear(): void {
    this.resService.clear().subscribe();
  }

  create(ressource: Ressource): void {
    this.resService.create(ressource).subscribe((ressourcec) => this.ressources.push(ressourcec));
  }

  delete(id: number): void {
    this.ressources = this.ressources.filter((c) => c.id !== id);
    this.resService.delete(id).subscribe();
  }

  update(ressource: Ressource): void {
    this.ressources = this.ressources.filter((c) => c.id !== ressource.id);
    this.ressources.push(ressource);
    this.resService.update(ressource).subscribe();
  }

  getRessources(): void {
    this.resService.getAll().subscribe((ressources) => this.ressources = ressources);
  }

  getById(id: number): void {
    this.resService.getById(id).subscribe((ressource) => this.ressources.push(ressource));
  }

  getByNomAndPrenom(nom: string, prenom: string): void {
    this.resService.getByNomAndPrenom(nom, prenom).subscribe((ressource) => this.ressources.push(ressource));
  }

  getByEquipe(nom: string): void {
    this.resService.getByEquipe(nom).subscribe((ressources) => this.ressources = ressources);
  }

  getByCompetence(nom: string): void {
    this.resService.getByCompetence(nom).subscribe((ressources) => this.ressources = ressources);
  }

  getByCompetenceAndNiveau(nom: string, niveau: number, orgnom: string): void {
    this.resService.getByCompetenceAndNiveau(nom, niveau, orgnom).subscribe((ressources) => this.ressources = ressources);
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.resService.getByNiveau(niveau, orgnom).subscribe((ressources) => this.ressources = ressources);
  }

  getByIsActif(actif: boolean): void {
    this.resService.getByIsActif(actif).subscribe((ressources) => this.ressources = ressources);
  }

  getByIsActifAsBackUp(actif: boolean): void {
    this.resService.getByIsActifAsBackUp(actif).subscribe((ressources) => this.ressources = ressources);
  }

  getByDateEntree(date: Date): void {
    this.resService.getByDateEntree(date).subscribe((ressources) => this.ressources = ressources);
  }

  getByDateSortie(date: Date): void {
    this.resService.getByDateSortie(date).subscribe((ressources) => this.ressources = ressources);
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
