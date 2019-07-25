import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../service/competence.service';
import { RessourceService } from '../service/ressource.service';
import { DispositifService } from '../service/dispositif.service';
import { EquipeService } from '../service/equipe.service';
import { Dispositif } from '../classe/dispositif';
import { Equipe } from '../classe/equipe';
import { Competence } from '../classe/competence';
import { Ressource } from '../classe/ressource';
import { DispositifhascompetenceService } from '../service/dispositifhascompetence.service';
import { Dispositifhascompetence } from '../classe/dispositifhascompetence';

@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['./matrice.component.css'],
  providers: [CompetenceService, RessourceService, DispositifService, EquipeService, DispositifhascompetenceService]
})
export class MatriceComponent implements OnInit {
  dispositifs: Dispositif[];
  equipes: Equipe[];
  ressources: Ressource[];
  competences: Competence[];

  constructor(private compService: CompetenceService, private dispService: DispositifService, private resService: RessourceService,
    private equipeService: EquipeService, private dcService: DispositifhascompetenceService) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((d) => this.dispositifs = d);
  }

  updateEquipes(dispositif: string){
    this.equipeService.getByDispositif(dispositif).subscribe((e) => this.equipes = e);
  }

  updateTab(dispositif: string, equipe: string){
    let dcs: Dispositifhascompetence[];
    this.resService.getByEquipe(equipe).subscribe(
      (r) => {
        this.ressources = r;
        this.dcService.getByDispositif(dispositif).subscribe(
          (d) => {
            dcs = d;
            dcs.forEach(dc => {
              this.compService.getById(dc.idc).subscribe(
                (c) => this.competences.push(c)
              )
            });
          });
      }
    )
  }

}
