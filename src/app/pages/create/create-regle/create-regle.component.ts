import { Component, OnInit } from '@angular/core';
import { RegleService } from '../../service/regle.service';
import { CompetenceService } from '../../service/competence.service';
import { NiveauService } from '../../service/niveau.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';
import { Equipe } from '../../classe/equipe';
import { Competence } from '../../classe/competence';
import { Niveau } from '../../classe/niveau';
import { Regle } from '../../classe/regle';
import { Organisme } from '../../classe/organisme';
import { DispositifService } from '../../service/dispositif.service';
import { OrganismeService } from '../../service/organisme.service';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';

@Component({
  selector: 'app-regle-form',
  templateUrl: './create-regle.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [RegleService, CompetenceService, EquipeService, NiveauService, DispositifService, OrganismeService, {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class CreateRegleComponent implements OnInit {

  equipes: Equipe[];
  competences: Competence[];

  form = new FormGroup ({
    equipe: new FormControl(''),
    competence: new FormControl(''),
    niveau: new FormControl(''),
    nombre: new FormControl(''),
    pourcentage: new FormControl(''),
    moyenne: new FormControl(''),
  })

  constructor(private regleService: RegleService, private compService: CompetenceService, private equipeService: EquipeService,
    private niveauService: NiveauService, private router: Router, private dispService: DispositifService, private orgService: OrganismeService) { }

  ngOnInit() {
    this.equipeService.getAll().subscribe((equipes) => this.equipes = equipes);
    this.compService.getAll().subscribe((competences) => this.competences = competences);
  }

  create(route: string): void {
    const regle = new Regle();
    let competence: Competence;
    competence = this.form.get('competence').value;
    let equipe: Equipe;
    equipe = this.form.get('equipe').value;
    regle.cnom = competence.nom;
    regle.enom = equipe.nom;
    this.dispService.getByNom(equipe.dispositif).subscribe((d) => {
      this.orgService.getByNom((d.organisme)).subscribe((o) => {
        this.niveauService.getByOrganisme(d.organisme).subscribe((niveaux) => {
          let niveau = niveaux[this.form.get('niveau').value -1];
          regle.niveau = niveau.valeur;
          regle.moyenne = this.form.get('moyenne').value;
          regle.pourcentage = parseFloat(this.form.get('pourcentage').value);
          regle.nombre = parseInt(this.form.get('nombre').value, 10);
          regle.organisme = o.organisme;
          this.regleService.create(regle).subscribe(
            (result) => this.compService.update(competence).subscribe(
             (result) => this.equipeService.update(equipe).subscribe(
                (result) =>this.niveauService.update(niveau).subscribe(
                  (result) => this.router.navigate([route])
              )
            )
          )
         );
        })        
      })
    })
    
  }
}
