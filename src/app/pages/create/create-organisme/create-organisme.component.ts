import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganismeService } from '../../service/organisme.service';
import { Organisme } from '../../classe/organisme';
import { Niveau } from '../../classe/niveau';
import { NiveauService } from '../../service/niveau.service';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';

@Component({
  selector: 'app-create-organisme',
  templateUrl: './create-organisme.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css', './create-organisme.component.css'],
  /*MAT_RADIO permet de changer la couleur par defaut des radio buttons*/
  providers: [OrganismeService, NiveauService, {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class CreateOrganismeComponent implements OnInit {
  organisme: string;
  description: string;

  private ech5 = ['Ne connaît pas',
  'Connaissance / Exécute les tâches confiées sous le contrôle d’un référent ',
  'Pratique / Planifie et exécute des taches. Analyse des problèmes et propose des solutions. ',
  'Maitrise / Gère ses tâches en autonomie complète dans des contextes multi dimensionnels.'
  + 'Engage sa responsabilité sur les tâches confiées ',
  'Expert / Référent dans son domaine de compétences. Propose les solutions innovantes liées à son domaine d’expertise.'
  + 'Capable d’organiser des formations et des transferts de compétences '
  ];
  private ech10 = ['Ne connaît pas',
  'Connaissance faible',
  'Connaissance / Exécute les tâches confiées sous le contrôle d’un référent',
  'Connaissance avancée',
  'Pratique / Planifie et exécute des taches. Analyse des problèmes et propose des solutions. ',
  'Pratique avancée',
  'Maitrise faible',
  'Maitrise / Gère ses tâches en autonomie complète dans des contextes multi dimensionnels.'
  + 'Engage sa responsabilité sur les tâches confiées',
  'Maitrise avancée',
  'Expert / Référent dans son domaine de compétences. Propose les solutions innovantes liées à son domaine d’expertise.'
  + 'Capable d’organiser des formations et des transferts de compétences '
  ];

  form = new FormGroup ({
    nom: new FormControl(''),
    description: new FormControl(''),
    echelle: new FormControl(''),
  });

  constructor(private orgService: OrganismeService, private niveauService: NiveauService, private router: Router) { }

  ngOnInit() {
  }

  create(route: string): void {
    const org = new Organisme();
    org.organisme = this.form.get('nom').value;
    org.description = this.form.get('description').value;
    let niveaux: Niveau[];
    niveaux = [];
    for (let i = 0 ; i < parseInt(this.form.get('echelle').value, 10) ; i++) {
      let niveau = new Niveau();
      niveau.valeur = i+1;
      if (parseInt(this.form.get('echelle').value, 10) === 5) {
        niveau.description = this.ech5[i];
      }
      if (parseInt(this.form.get('echelle').value, 10) === 10) {
        niveau.description = this.ech10[i];
      }
      niveau.organisme = org.organisme;
      niveaux.push(niveau); 
    }
    this.orgService.create(org).subscribe(
      (result) => 
        this.niveauService.create(niveaux).subscribe(
          (result) => this.router.navigate([route]),
          (error) => {
            console.log('Erreur: ' + error);
          }
        )
    );
    
    
    
  }
}
