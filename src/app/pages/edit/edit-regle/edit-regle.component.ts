import { Component, OnInit } from '@angular/core';
import { RegleService } from '../../service/regle.service';
import { CompetenceService } from '../../service/competence.service';
import { EquipeService } from '../../service/equipe.service';
import { NiveauService } from '../../service/niveau.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Regle } from '../../classe/regle';
import { Equipe } from '../../classe/equipe';
import { Competence } from '../../classe/competence';
import { Niveau } from '../../classe/niveau';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';

@Component({
  selector: 'app-edit-regle',
  templateUrl: './edit-regle.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css', './edit-regle.component.css'],
  providers: [RegleService, CompetenceService, EquipeService, NiveauService, {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class EditRegleComponent implements OnInit {
  regle: Regle;
  equipes: Equipe[];
  competences: Competence[];
  selectedCompetence: string;

  form = new FormGroup ({
    competence: new FormControl(''),
    equipe: new FormControl(''),
    niveau: new FormControl(''),
    pourcentage: new FormControl(''),
    nombre: new FormControl(''),
    moyenne: new FormControl(''),
  })

  constructor(private regleService: RegleService, private compService: CompetenceService, private equipeService: EquipeService,
    private niveauService: NiveauService, private router: Router) { }

  ngOnInit() {
    this.regle = history.state.regle;
    this.equipeService.getAll().subscribe((equipes) => this.equipes = equipes);
    this.compService.getAll().subscribe((competences) => {this.competences = competences; console.log(this.competences); });
  }

  update(): void {
    let competence: Competence;
    competence = this.form.get('competence').value;
    let equipe: Equipe;
    equipe = this.form.get('equipe').value;
    this.regle.cnom = competence.nom;
    this.selectedCompetence = competence.nom;
    this.regle.enom = equipe.nom;
    this.regle.niveau = this.form.get('niveau').value;
    this.regle.moyenne = this.form.get('moyenne').value;
    this.regle.pourcentage = parseFloat(this.form.get('pourcentage').value);
    this.regle.nombre = parseInt(this.form.get('nombre').value, 10);
    this.regleService.update(this.regle).subscribe(
      (result) => this.compService.update(competence).subscribe(
        (result) => this.equipeService.update(equipe).subscribe(
            (result) => this.router.navigate(['/displayRegle'])
        )
      )
    );
  }
}
