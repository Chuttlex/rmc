import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { CompetenceService } from '../../service/competence.service';
import { RessourcehascompetenceService } from '../../service/ressourcehascompetence.service';
import { NiveauService } from '../../service/niveau.service';
import { EquipeService } from '../../service/equipe.service';
import { OrganismeService } from '../../service/organisme.service';
import { Router } from '@angular/router';
import { Competence } from '../../classe/competence';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';
import { FormGroup, FormControl } from '@angular/forms';
import { Ressource } from '../../classe/ressource';
import { Organisme } from '../../classe/organisme';
import { Equipe } from '../../classe/equipe';
import { DispositifService } from '../../service/dispositif.service';
import { Dispositif } from '../../classe/dispositif';

@Component({
  selector: 'app-create-ressourcehascompetence',
  templateUrl: './create-ressourcehascompetence.component.html',
  styleUrls: ['./create-ressourcehascompetence.component.css', '../../../../assets/stylesheets/formStyle.css'],
  providers: [RessourceService, CompetenceService, RessourcehascompetenceService, NiveauService, EquipeService, OrganismeService, DispositifService]
})
export class CreateRessourcehascompetenceComponent implements OnInit {
  ressources: Ressource[];
  competences: Competence[];

  form = new FormGroup ({
    competenceForm: new FormControl(''),
    ressourceForm: new FormControl(''),
    niveauForm: new FormControl(''),
    dateEvolForm: new FormControl(''),
  })

  constructor(private router: Router, private resService: RessourceService, private compService: CompetenceService,
    private rcService: RessourcehascompetenceService, private equipeService: EquipeService, private orgService: OrganismeService,
    private dispService: DispositifService) { }

  ngOnInit() {
    this.resService.getAll().subscribe((r) => {
      this.ressources = r;
      this.compService.getAll().subscribe((c) => this.competences = c)
    })
  }

  create(route: string): void {
    let rc = new Ressourcehascompetence();
    let comp: Competence = this.form.get('competenceForm').value;
    let res: Ressource = this.form.get('ressourceForm').value;
    let organisme: Organisme;
    let dispositif: Dispositif;
    let equipe: Equipe;
    this.equipeService.getByRessource(res.id).subscribe((e) => {
      equipe = e;
      this.dispService.getByNom(equipe.dispositif).subscribe((d) => {
      dispositif = d;
      this.orgService.getByNom(dispositif.organisme).subscribe((o) => {
        organisme = o;
        rc.niveau = parseInt(this.form.get('niveauForm').value, 10);
        rc.organisme = organisme.organisme;
        rc.rnom = res.nom;
        rc.rprenom = res.prenom;
        rc.idr = res.id;
        rc.idc = comp.id;
        rc.cnom = comp.nom;
        rc.equipe = equipe.nom;
        rc.dateEvolComp = this.form.get('dateEvolForm').value;
        this.rcService.create(rc).subscribe(
          (result) => this.router.navigate([route])
          )
        });
      });
    });
  }

}
