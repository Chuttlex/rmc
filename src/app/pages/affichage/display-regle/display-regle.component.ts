import { Component, OnInit, ViewChild } from '@angular/core';
import { Regle } from '../../classe/regle';
import { RegleService } from '../../service/regle.service';
import { Router } from '@angular/router';

const testRegle1: Regle = {id: 1, enom: 'A Team', niveau: 3, organisme: 'Air France', cnom: 'Java', nombre: 4, pourcentage: 50, moyenne: true};
const testRegle2: Regle = {id: 2, enom: 'B Team', niveau: 4, organisme: 'Amadeus', cnom: 'C', nombre: 8, pourcentage: 35, moyenne: false};
const testRegle3: Regle = {id: 3, enom: 'C Team', niveau: 2, organisme: 'ProBTP', cnom: 'Conception', nombre: 3, pourcentage: 85, moyenne: true};

@Component({
  selector: 'app-display-regle',
  templateUrl: './display-regle.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [RegleService]
})
export class DisplayRegleComponent implements OnInit {
  regles: Regle[] = [];
  selectedRegle: Regle;
  isSelected: boolean;

  constructor(private regleService: RegleService, private router: Router) { }

  ngOnInit() {
    this.getRegles();
    this.regles.push(testRegle1,testRegle2,testRegle3);
  }

  onSelect(regle: Regle): void {
    this.selectedRegle = regle;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editRegle'], {state: {regle: this.selectedRegle}});
  }

  add(): void {
    this.router.navigate(['/createRegle'], {state: {regle: this.selectedRegle}});
  }

  clear(): void {
    this.regleService.clear().subscribe();
  }

  delete(id: number): void {
    this.regles = this.regles.filter((c) => c.id !== id);
    this.regleService.delete(id).subscribe();
  }

  getRegles(): void {
    this.regleService.getAll().subscribe((regles) => this.regles = regles);
  }

  getById(id: number): void {
    this.regleService.getById(id).subscribe((regle) => this.regles.push(regle));
  }

  getByEquipe(nom: string): void {
    this.regleService.getByEquipe(nom).subscribe((regles) => this.regles = regles);
  }

  getByCompetence(nom: string): void {
    this.regleService.getByCompetence(nom).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndCompetence(enom: string, cnom: string): void {
    this.regleService.getByEquipeAndCompetence(enom, cnom).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndNiveau(cnom: string, niveau: number, orgnom: string): void {
    this.regleService.getByCompetenceAndNiveau(cnom, niveau, orgnom).subscribe((regles) => this.regles = regles);
  }

  getByDispositif(nom: string): void {
    this.regleService.getByDispositif(nom).subscribe((regles) => this.regles = regles);
  }

  getByOrganisme(nom: string): void {
    this.regleService.getByOrganisme(nom).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndNiveau(nom: string, niveau: number, orgnom: string): void {
    this.regleService.getByEquipeAndNiveau(nom, niveau, orgnom).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndCompetenceAndNiveau(enom: string, cnom: string, niveau: number, orgnom: string): void {
    this.regleService.getByEquipeAndCompetenceAndNiveau(enom, cnom, niveau, orgnom).subscribe((regle) => this.regles.push(regle));
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.regleService.getByNiveau(niveau, orgnom).subscribe((regles) => this.regles = regles);
  }

  getByPourcentage(pourcentage: number): void {
    this.regleService.getByPourcentage(pourcentage).subscribe((regles) => this.regles = regles);
  }

  getByPourcentageAndNombre(pourcentage: number, nombre: number): void {
    this.regleService.getByPourcentageAndNombre(pourcentage, nombre).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndPourcentage(nom: string, pourcentage: number): void {
    this.regleService.getByCompetenceAndPourcentage(nom, pourcentage).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndNiveauAndPourcentage(nom: string, niveau: number, orgnom: string, pourcentage: number): void {
    this.regleService.getByCompetenceAndNiveauAndPourcentage(nom, niveau, orgnom, pourcentage).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndPourcentage(nom: string, pourcentage: number): void {
    this.regleService.getByEquipeAndPourcentage(nom, pourcentage).subscribe((regles) => this.regles = regles);
  }

  getByNombre(nombre: number): void {
    this.regleService.getByNombre(nombre).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndNombre(nom: string, nombre: number): void {
    this.regleService.getByCompetenceAndNombre(nom, nombre).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndNombre(nom: string, nombre: number): void {
    this.regleService.getByEquipeAndNombre(nom, nombre).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndNiveauAndNombre(nom: string, niveau: number, orgnom: string, nombre: number): void {
    this.regleService.getByCompetenceAndNiveauAndNombre(nom, niveau, orgnom, nombre).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndEquipeAndNombre(cnom: string, enom: string, nombre: number): void {
    this.regleService.getByCompetenceAndEquipeAndNombre(cnom, enom, nombre).subscribe((regles) => this.regles = regles);
  }

  getByMoyenne(moyenne: boolean): void {
    this.regleService.getByMoyenne(moyenne).subscribe((regles) => this.regles = regles);
  }

  getByCompetenceAndMoyenne(nom: string, moyenne: boolean): void {
    this.regleService.getByCompetenceAndMoyenne(nom, moyenne).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndMoyenne(nom: string, moyenne: boolean): void {
    this.regleService.getByEquipeAndMoyenne(nom, moyenne).subscribe((regles) => this.regles = regles);
  }

  getByEquipeAndCompetenceAndMoyenne(enom: string, cnom: string, moyenne: boolean): void {
    this.regleService.getByEquipeAndCompetenceAndMoyenne(enom, cnom, moyenne).subscribe((regles) => this.regles = regles);
  }

}
