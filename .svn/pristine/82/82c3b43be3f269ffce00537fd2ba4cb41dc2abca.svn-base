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

@Component({
  selector: 'app-regle-form',
  templateUrl: './create-regle.component.html',
  styles: [],
  providers: [RegleService, CompetenceService, EquipeService, NiveauService]
})
export class CreateRegleComponent implements OnInit {

  equipes: Equipe[];
  competences: Competence[];
  niveaux: Niveau[];

  form = new FormGroup ({
    equipe: new FormControl(''),
    competence: new FormControl(''),
    niveau: new FormControl(''),
    nombre: new FormControl(''),
    pourcentage: new FormControl(''),
    moyenne: new FormControl(''),
  })

  constructor(private regleService: RegleService, private compService: CompetenceService, private equipeService: EquipeService,
    private niveauService: NiveauService, private router: Router) { }

  ngOnInit() {
    this.equipeService.getAll().subscribe((equipes) => this.equipes = equipes);
    this.compService.getAll().subscribe((competences) => this.competences = competences);
    this.niveauService.getAll().subscribe((niveaux) => this.niveaux = niveaux);
  }

  create(route: string): void {
    const regle = new Regle();
    let competence: Competence;
    competence = this.form.get('competence').value;
    let equipe: Equipe;
    equipe = this.form.get('equipe').value;
    regle.cnom = competence.nom;
    regle.enom = equipe.nom;
    let niveau: Niveau;
    niveau.valeur = this.form.get('niveau').value;
    regle.niveau = niveau.valeur;
    regle.moyenne = this.form.get('moyenne').value;
    regle.pourcentage = parseFloat(this.form.get('pourcentage').value);
    regle.nombre = parseInt(this.form.get('nombre').value, 10);
    this.regleService.create(regle).subscribe(
      (result) => this.compService.update(competence).subscribe(
        (result) => this.equipeService.update(equipe).subscribe(
          (result) =>this.niveauService.update(niveau).subscribe(
            (result) => this.router.navigate([route])
          )
        )
      )
    );
  }
}
