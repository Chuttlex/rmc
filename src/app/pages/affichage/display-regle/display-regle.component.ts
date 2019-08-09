import { Component, OnInit, ViewChild } from '@angular/core';
import { Regle } from '../../classe/regle';
import { RegleService } from '../../service/regle.service';
import { Router } from '@angular/router';

/*const testRegle1: Regle = {id: 1, enom: 'A Team', niveau: 3, organisme: 'Air France', cnom: 'Java', nombre: 4, pourcentage: 50, moyenne: true};
const testRegle2: Regle = {id: 2, enom: 'B Team', niveau: 4, organisme: 'Amadeus', cnom: 'C', nombre: 8, pourcentage: 35, moyenne: false};
const testRegle3: Regle = {id: 3, enom: 'C Team', niveau: 2, organisme: 'ProBTP', cnom: 'Conception', nombre: 3, pourcentage: 85, moyenne: true};
*/
@Component({
  selector: 'app-display-regle',
  templateUrl: './display-regle.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [RegleService]
})
export class DisplayRegleComponent implements OnInit {
  regles: Regle[] = [];
  selectedRegle: Regle;
  isSelected: boolean;

  constructor(private regleService: RegleService, private router: Router) { }

  ngOnInit() {
    this.regleService.getAll().subscribe(
      (regles) => this.regles = regles
    );
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

  delete(): void {
    this.regleService.delete(this.selectedRegle.id).subscribe(
      (result) => {
        this.regleService.getAll().subscribe(
          (regles) => {this.regles = regles;
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
