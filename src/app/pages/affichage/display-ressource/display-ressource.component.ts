import { Component, OnInit, ViewChild } from '@angular/core';
import { Ressource } from '../../classe/ressource';
import { RessourceService } from '../../service/ressource.service';
import { Router } from '@angular/router';
import { Historiqueres } from '../../classe/historiqueres';
import { HistoriqueresService } from '../../service/historique.service';
import { RessourcePlusHistorique } from 'src/app/autres/ressourceplushistorique';

const testRessource1: Ressource = {id: 1, nom: 'Martin', prenom: 'Paul', referenceClient: 25631, equipe: 'A Team', organisme: 'Infotel', dispositif: 'Stagiaires'};
const testRessource2: Ressource = {id: 2, nom: 'Michellac', prenom: 'Pierre', referenceClient: 35214, equipe: 'B Team', organisme: 'Infotel', dispositif: 'Stagiaires'};
const testRessource3: Ressource = {id: 3, nom: 'Briard', prenom: 'Jacques', referenceClient: 65231, equipe: 'C Team', organisme: 'Air France', dispositif: 'Chocolat'};

@Component({
  selector: 'app-display-ressource',
  templateUrl: './display-ressource.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [RessourceService, HistoriqueresService]
})
export class DisplayRessourceComponent implements OnInit {

  ressources: Ressource[] = [];
  historiques: Historiqueres[] = [];
  selectedRH: RessourcePlusHistorique;
  isSelected: boolean;
  list: RessourcePlusHistorique[] = [];

  constructor(private resService: RessourceService, private router: Router, private histService: HistoriqueresService) { }

  ngOnInit() {
    this.resService.getAll().subscribe((res) => {
      this.ressources = res;
      this.isSelected = false;
      this.ressources.push(testRessource1,testRessource2,testRessource3);
      this.histService.getAll().subscribe((hist) => {
        this.historiques = hist;
        this.lierRessourceEtHistorique();
      });
    });
  }

  lierRessourceEtHistorique(): void {
    for(let i = 0; i<this.ressources.length; i++){
      for(let j = 0; j< this.historiques.length; j++){
        if(this.historiques[j].rnom==this.ressources[i].nom && this.historiques[j].rprenom==this.ressources[i].prenom
          && this.historiques[j].equipe==this.ressources[i].equipe){
            let plus = new RessourcePlusHistorique();
            plus.ressource = this.ressources[i];
            plus.historique = this.historiques[j];
            this.list.push(plus);
          }
      }
    }
  }

  onSelect(rh: RessourcePlusHistorique): void {
    this.selectedRH = rh;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editRessource'], {state: {rh: this.selectedRH}});
  }

  add(): void {
    this.router.navigate(['/createRessource']);
  }

  delete(): void {
    this.histService.delete(this.selectedRH.historique.id).subscribe(
      (result) => this.resService.delete(this.selectedRH.ressource.id).subscribe(
        (result) => this.router.navigate(['displayRessource'])
      )
    )
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
