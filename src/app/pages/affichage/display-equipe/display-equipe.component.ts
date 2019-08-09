import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipe } from '../../classe/equipe';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-equipe',
  templateUrl: './display-equipe.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
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

  delete(): void {
    this.equipeService.delete(this.selectedEquipe.id).subscribe(
      (result) => {
        this.equipeService.getAll().subscribe(
          (equipes) => {
            this.equipes = equipes;
            this.isSelected=false;
            this.router.navigate(['/displayOrganisme']);
          })
      })
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
