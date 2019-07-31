import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../service/competence.service';
import { RessourceService } from '../service/ressource.service';
import { DispositifService } from '../service/dispositif.service';
import { EquipeService } from '../service/equipe.service';
import { Dispositif } from '../classe/dispositif';
import { Equipe } from '../classe/equipe';
import { Competence } from '../classe/competence';
import { Ressource } from '../classe/ressource';


@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['./matrice.component.css'],
  providers: [CompetenceService, RessourceService, DispositifService, EquipeService]
})
export class MatriceComponent implements OnInit {
  dispositifs: Dispositif[];
  equipes: Equipe[];
  ressources: Ressource[];
  competences: Competence[];
  selectedDispositif: Dispositif;

  constructor(private compService: CompetenceService, private dispService: DispositifService, private resService: RessourceService,
    private equipeService: EquipeService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((d) => this.dispositifs = d);
  }

  updateEquipes(dispositif: Dispositif){
    this.equipeService.getByDispositif(dispositif.nom).subscribe((e) => this.equipes = e);
    this.selectedDispositif = dispositif;
  }

  getRessourcesAndCompetences(equipe: Equipe) {
    this.resService.getByEquipe(equipe.nom).subscribe((res) => {
      this.ressources = res;
      this.compService.getByDispositif(this.selectedDispositif.nom).subscribe((comps) => {
        this.competences = comps;
        this.generateTable();
      })
    })
  }

  // Génère ou envoie les données pour le tableau
  generateTable() {
    throw new Error("Method not implemented.");
  }
}
