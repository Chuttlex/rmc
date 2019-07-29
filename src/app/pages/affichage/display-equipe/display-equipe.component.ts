import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipe } from '../../classe/equipe';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';
import { EditEquipeComponent } from '../../edit/edit-equipe/edit-equipe.component';

const testEquipe1: Equipe = { id: 1, nom: 'Team A', rescible: 5, dispositif: 'Manhattan'};
const testEquipe2: Equipe = { id: 2, nom: 'Team B', rescible: 4, dispositif: 'Overlord'};
const testEquipe3: Equipe = { id: 3, nom: 'Team C', rescible: 8, dispositif: 'Enigma'};

@Component({
  selector: 'app-display-equipe',
  templateUrl: './display-equipe.component.html',
  styleUrls: ['../../../../tabStyle.css'],
  providers: [EquipeService]
})
export class DisplayEquipeComponent implements OnInit {

  equipes: Equipe[] = [];
  selectedEquipe: Equipe;
  isSelected: boolean;
  @ViewChild(EditEquipeComponent, {static: false}) eec: EditEquipeComponent;

  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit() {
    this.equipeService.getAll().subscribe((e) => this.equipes = e);
    this.equipes.push(testEquipe1,testEquipe2,testEquipe3);
  }

  onSelect(equipe: Equipe): void {
    this.selectedEquipe = equipe;
    this.isSelected = true;
  }

  edit(): void {
    this.eec.passData(this.selectedEquipe);
    this.router.navigate(['/editEquipe']);
  }

  clear(): void {
    this.equipeService.clear().subscribe();
  }

  delete(id: number): void {
    this.equipes = this.equipes.filter((c) => c.id !== id);
    this.equipeService.delete(id).subscribe();
  }

  getEquipes(): void {
    this.equipeService.getAll().subscribe((equipes) => this.equipes = equipes);
  }

  getById(id: number): void {
    this.equipeService.getById(id).subscribe((equipe) => this.equipes.push(equipe));
  }

  getByDispositif(nom: string): void {
    this.equipeService.getByDispositif(nom).subscribe((equipes) => this.equipes = equipes);
  }

  getByRessource(nom: string, prenom: string): void {
    this.equipeService.getByRessource(nom, prenom).subscribe((equipe) => this.equipes.push(equipe));
  }

  getByCompetence(nom: string): void {
    this.equipeService.getByCompetence(nom).subscribe((equipes) => this.equipes = equipes);
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.equipeService.getByNiveau(niveau, orgnom).subscribe((equipes) => this.equipes = equipes);
  }

}
