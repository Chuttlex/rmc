import { Component, OnInit, ViewChild } from '@angular/core';
import { Ressource } from '../../classe/ressource';
import { RessourceService } from '../../service/ressource.service';
import { Router } from '@angular/router';
import { EditRessourceComponent } from '../../edit/edit-ressource/edit-ressource.component';

@Component({
  selector: 'app-display-ressource',
  templateUrl: './display-ressource.component.html',
  styleUrls: ['./display-ressource.component.css'],
  providers: [RessourceService]
})
export class DisplayRessourceComponent implements OnInit {

  ressources: Ressource[];
  selectedR: Ressource;
  isSelected: boolean;
  @ViewChild(EditRessourceComponent, {static: false}) erc: EditRessourceComponent;

  constructor(private resService: RessourceService, private router: Router) { }

  ngOnInit() {
    this.getRessources();
    this.isSelected = false;
  }

  onSelect(ressource: Ressource): void {
    this.selectedR = ressource;
    this.isSelected = true;
  }

  edit(): void {
    this.erc.passData(this.selectedR);
    this.router.navigate(['/editRessource']);
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

}
