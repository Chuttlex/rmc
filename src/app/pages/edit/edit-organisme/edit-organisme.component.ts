import { Component, OnInit } from '@angular/core';
import { OrganismeService } from '../../service/organisme.service';
import { NiveauService } from '../../service/niveau.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Organisme } from '../../classe/organisme';
import { Niveau } from '../../classe/niveau';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit-organisme',
  templateUrl: './edit-organisme.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [OrganismeService, NiveauService]
})
export class EditOrganismeComponent implements OnInit {
  organisme: Organisme;
  niveaux: Niveau[];

  private ech5 = ['Ne connaît pas',
  'Connaissance / Exécute les tâches confiées sous le contrôle d’un référent ',
  'Pratique / Planifie et exécute des taches. Analyse des problèmes et propose des solutions. ',
  'Maitrise / Gère ses tâches en autonomie complète dans des contextes multi dimensionnels.'
  + ' Engage sa responsabilité sur les tâches confiées ',
  'Expert / Référent dans son domaine de compétences. Propose les solutions innovantes liées à son domaine d’expertise.'
  + ' Capable d’organiser des formations et des transferts de compétences '
  ];
  private ech10 = ['Ne connaît pas',
  'Connaissance faible',
  'Connaissance / Exécute les tâches confiées sous le contrôle d’un référent',
  'Connaissance avancée',
  'Pratique / Planifie et exécute des taches. Analyse des problèmes et propose des solutions. ',
  'Pratique avancée',
  'Maitrise faible',
  'Maitrise / Gère ses tâches en autonomie complète dans des contextes multi dimensionnels.'
  + ' Engage sa responsabilité sur les tâches confiées',
  'Maitrise avancée',
  'Expert / Référent dans son domaine de compétences. Propose les solutions innovantes liées à son domaine d’expertise.'
  + 'Capable d’organiser des formations et des transferts de compétences '
  ];

  form = new FormGroup ({
    nom: new FormControl(''),
    description: new FormControl(''),
    echelle: new FormControl(''),
  })

  constructor(private orgService: OrganismeService, private niveauService: NiveauService, private router: Router) { }

  ngOnInit() {
    this.organisme = history.state.organisme;
    this.niveauService.getByOrganisme(this.organisme.organisme).subscribe((n) => this.niveaux = n);
  }

  update(): void {
    let orgNiveaux : Niveau[];
    this.niveauService.getByOrganisme(this.organisme.organisme).subscribe((n) => {
      orgNiveaux = n;
      let idNiv: number[];
      for (let i = 0 ; i < orgNiveaux.length ; i++) {
        idNiv.push(orgNiveaux[i].id);
      }
      this.niveauService.deleteSome(idNiv).subscribe(
        (result) => {
          this.organisme.organisme = this.form.get('nom').value;
          this.organisme.description = this.form.get('description').value;
          let niveaux: Niveau[];
          niveaux = [];
          for (let j = 0 ; j < this.form.get('echelle').value ; j++) {
            let niveau = new Niveau();
            niveau.valeur = j+1;
            if (this.form.get('echelle').value === 5) {
              niveau.description = this.ech5[j];
            }
            if (this.form.get('echelle').value === 10) {
              niveau.description = this.ech10[j];
            }
            niveau.organisme = this.organisme.organisme;
            niveaux.push(niveau);
          }
          this.niveauService.create(niveaux).subscribe(
            (result) => this.orgService.update(this.organisme).subscribe(
              (result) => this.router.navigate(['/displayOrganisme'])
            )
          );
        }
      );
    }); 
  }
}
