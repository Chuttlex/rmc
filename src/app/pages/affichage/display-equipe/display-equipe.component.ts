import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipe } from '../../classe/equipe';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-equipe',
  templateUrl: './display-equipe.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [EquipeService]
})
export class DisplayEquipeComponent implements OnInit {

  equipes: Equipe[];
  selectedEquipe: Equipe;
  isSelected: boolean;

  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit() {
    this.equipeService.getAll().subscribe((e) => this.equipes = e);
  }

  onSelect(equipe: Equipe): void {
    this.selectedEquipe = equipe;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editEquipe'], {state: {equipe: this.selectedEquipe}});
  }

  add(): void {
    this.router.navigate(['/createEquipe'], {state: {equipe: this.selectedEquipe}});
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

  getByRessource(id: number): void {
    this.equipeService.getByRessource(id).subscribe((equipe) => this.equipes.push(equipe));
  }

  getByCompetence(nom: string): void {
    this.equipeService.getByCompetence(nom).subscribe((equipes) => this.equipes = equipes);
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.equipeService.getByNiveau(niveau, orgnom).subscribe((equipes) => this.equipes = equipes);
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
