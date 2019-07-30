import { Component, OnInit } from '@angular/core';
import { RessourcehascompetenceService } from '../../service/ressourcehascompetence.service';
import { RessourceService } from '../../service/ressource.service';
import { CompetenceService } from '../../service/competence.service';
import { NiveauService } from '../../service/niveau.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';
import { Ressource } from '../../classe/ressource';
import { Competence } from '../../classe/competence';
import { Niveau } from '../../classe/niveau';

@Component({
  selector: 'app-edit-ressourcehascompetence',
  templateUrl: './edit-ressourcehascompetence.component.html',
  styles: [],
  providers: [RessourcehascompetenceService, RessourceService, CompetenceService, NiveauService]
})
export class EditRessourcehascompetenceComponent implements OnInit {
  rc: Ressourcehascompetence;
  ressources: Ressource[];
  competences: Competence[];
  niveaux: Niveau[];

  form = new FormGroup ({
    ressource: new FormControl(''),
    competence: new FormControl(''),
    niveau: new FormControl(''),
    dateevolcomp: new FormControl(''),
  })

  constructor(private rcService: RessourcehascompetenceService, private resService: RessourceService, private compService: CompetenceService,
    private niveauService: NiveauService, private router: Router) { }

  ngOnInit() {
    this.compService.getAll().subscribe((competences) => {
      this.competences = competences;
      this.resService.getAll().subscribe((ressources) => {
        this.ressources = ressources;
        this.niveauService.getByRessourceAndCompetence(this.rc.rnom, this.rc.rprenom, this.rc.equipe , this.rc.cnom)
        .subscribe((niveaux) => this.niveaux = niveaux);
      });
    });
    this.rc = history.state.rc;
  }

  setNiveaux(): void {
    this.niveauService.getByRessourceAndCompetence(this.form.get('ressource').value.nom, this.form.get('ressource').value.nom,
     this.form.get('ressource').value.equipe ,this.form.get('competence').value.nom)
    .subscribe((niveaux) => this.niveaux = niveaux);
  }

  update(): void {
    let ressource: Ressource;
    let competence: Competence;
    let niveau: Niveau;
    ressource = this.form.get('ressource').value;
    competence = this.form.get('competence').value;
    niveau = this.form.get('niveau').value;
    let date: Date;
    date = this.form.get('dateevolcomp').value;
    this.rc.niveau = niveau.valeur;
    this.rc.organisme = niveau.organisme;
    this.rc.rnom = ressource.nom;
    this.rc.rprenom = ressource.prenom;
    this.rc.cnom = competence.nom;
    this.rc.dateEvolComp = date;
    this.niveauService.update(niveau).subscribe(
      (result) => this.resService.update(ressource).subscribe(
        (result) => this.compService.update(competence).subscribe(
          (result) => this.rcService.update(this.rc).subscribe(
            (result) => this.router.navigate(['/displayRessourcehascompetence'])
          )
        )
      )
    );
  }
}
