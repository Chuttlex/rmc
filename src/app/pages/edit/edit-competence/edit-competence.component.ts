import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../../service/competence.service';
import { DomaineService } from '../../service/domaine.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Competence } from '../../classe/competence';
import { Domaine } from '../../classe/domaine';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styles: [],
  providers: [CompetenceService, DomaineService]
})
export class EditCompetenceComponent implements OnInit {
  competence: Competence;
  domaines: Domaine[];

  form = new FormGroup ({
    nom: new FormControl(''),
    domaine: new FormControl('Technique'),
  })

  constructor(private compService: CompetenceService, private domaineService: DomaineService, private router: Router) { }

  ngOnInit() {
    this.competence = history.state.competence;
    this.domaineService.getAll().subscribe((domaines) => {
      this.domaines = domaines;
    });
    
  }

  update(): void {
    let domaine = new Domaine();
    this.domaineService.getByNom(this.form.get('domaine').value).subscribe((d) => {
      domaine = d;
        this.competence.nom = this.form.get('nom').value;
      this.competence.domaine = domaine.valeur;
      this.compService.update(this.competence).subscribe(
        (result) => this.domaineService.update(domaine).subscribe(
          (result) => this.router.navigate(['/displayCompetence'])
        )
      );
    });   
  }
}
