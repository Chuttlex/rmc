import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrganismeService } from '../../service/organisme.service';
import { DispositifService } from '../../service/dispositif.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Organisme } from '../../classe/organisme';
import { Dispositif } from '../../classe/dispositif';
import { Competence } from '../../classe/competence';
import { CompetenceService } from '../../service/competence.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';
import { DispositifhascompetenceService } from '../../service/dispositifhascompetence.service';

@Component({
  selector: 'app-create-dispositif',
  templateUrl: './create-dispositif.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css', './create-dispositif.component.css'],
  providers: [OrganismeService, DispositifService, CompetenceService, DispositifhascompetenceService]
})
export class CreateDispositifComponent implements OnInit {

  organismes: Organisme[];
  comps: Competence[];
  competencesT: string[] = ['Java'];
  competencesF: string[] = [];
  competencesE: string[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  competenceTCtrl = new FormControl();
  competenceFCtrl = new FormControl();
  competenceECtrl = new FormControl();
  filteredCompetencesT: Observable<string[]>;
  filteredCompetencesF: Observable<string[]>;
  filteredCompetencesE: Observable<string[]>;
  allCompetences: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('competenceInputT', {static: false}) competenceInputT: ElementRef<HTMLInputElement>;
  @ViewChild('competenceInputF', {static: false}) competenceInputF: ElementRef<HTMLInputElement>;
  @ViewChild('competenceInputE', {static: false}) competenceInputE: ElementRef<HTMLInputElement>;
  @ViewChild('autoT', {static: false}) matAutocompleteT: MatAutocomplete;
  @ViewChild('autoF', {static: false}) matAutocompleteF: MatAutocomplete;
  @ViewChild('autoE', {static: false}) matAutocompleteE: MatAutocomplete;

  form = new FormGroup ({
    nom: new FormControl(''),
    description: new FormControl(''),
    organisme: new FormControl(''),
  });

  constructor(private orgService: OrganismeService, private dispositifService: DispositifService, private router: Router,
    private compService: CompetenceService, private dcService: DispositifhascompetenceService) {
      this.filteredCompetencesT = this.competenceTCtrl.valueChanges.pipe(
        startWith(null),
        map((competence: string | null) => competence ? this._filter(competence) : this.allCompetences.slice()));
      this.filteredCompetencesF = this.competenceFCtrl.valueChanges.pipe(
        startWith(null),
        map((competence: string | null) => competence ? this._filter(competence) : this.allCompetences.slice()));
      this.filteredCompetencesE = this.competenceECtrl.valueChanges.pipe(
        startWith(null),
        map((competence: string | null) => competence ? this._filter(competence) : this.allCompetences.slice()));
     }
     

  ngOnInit() {
    this.orgService.getAll().subscribe((organismes) => {
      this.organismes = organismes;
      this.compService.getAll().subscribe(
        (c) => {
          this.comps = c;
          for(let i = 0; i < this.comps.length; i++) {
            this.allCompetences.push(this.comps[i].nom);
          }
        });
    });
  }

  create(route: string): void {
    const disp = new Dispositif();
    disp.nom = this.form.get('nom').value;
    disp.description = this.form.get('description').value;
    let org: Organisme;
    org = this.form.get('organisme').value;
    disp.organisme = org.organisme;
    let cs : Competence[] = [];
    for(let i = 0; i < this.competencesT.length; i++) {
      let c = new Competence();
      c.domaine = "Technique";
      c.nom = this.competencesT[i];
      cs.push(c);
    }
    for(let i = 0; i< this.competencesF.length; i++){
      let c = new Competence();
      c.domaine = "Fonctionnel";
      c.nom = this.competencesF[i];
      cs.push(c);
    }
    for(let i = 0; i< this.competencesE.length; i++){
      let c = new Competence();
      c.domaine = "Exploitation";
      c.nom = this.competencesE[i];
      cs.push(c);
    }
    let dcs : Dispositifhascompetence[] = [];
    for(let i = 0; i< cs.length; i++){
      let dc = new Dispositifhascompetence();
      dc.competence = cs[i].nom;
      dc.dispositif = disp.nom;
      dcs.push(dc);
    }
    this.dispositifService.create(disp).subscribe(
      (result) => this.compService.createSome(cs).subscribe(
        (result) => this.dcService.createSome(dcs).subscribe(
          (result) => this.router.navigate([route])
        )
      )
    );
  }

  addT(event: MatChipInputEvent): void {
    // Add competence only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocompleteT.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our competence
      if ((value || '').trim()) {
        this.competencesT.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.competenceTCtrl.setValue(null);
    }
  }

  addF(event: MatChipInputEvent): void {
    // Add competence only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocompleteF.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our competence
      if ((value || '').trim()) {
        this.competencesF.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.competenceFCtrl.setValue(null);
    }
  }

  addE(event: MatChipInputEvent): void {
    // Add competence only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocompleteE.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our competence
      if ((value || '').trim()) {
        this.competencesE.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.competenceECtrl.setValue(null);
    }
  }

  removeT(competence: string): void {
    const index = this.competencesT.indexOf(competence);

    if (index >= 0) {
      this.competencesT.splice(index, 1);
    }
  }

  removeF(competence: string): void {
    const index = this.competencesF.indexOf(competence);

    if (index >= 0) {
      this.competencesF.splice(index, 1);
    }
  }

  removeE(competence: string): void {
    const index = this.competencesE.indexOf(competence);

    if (index >= 0) {
      this.competencesE.splice(index, 1);
    }
  }

  selectedT(event: MatAutocompleteSelectedEvent): void {
    this.competencesT.push(event.option.viewValue);
    this.competenceInputT.nativeElement.value = '';
    this.competenceTCtrl.setValue(null);
  }

  selectedF(event: MatAutocompleteSelectedEvent): void {
    this.competencesF.push(event.option.viewValue);
    this.competenceInputF.nativeElement.value = '';
    this.competenceFCtrl.setValue(null);
  }

  selectedE(event: MatAutocompleteSelectedEvent): void {
    this.competencesE.push(event.option.viewValue);
    this.competenceInputE.nativeElement.value = '';
    this.competenceECtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCompetences.filter(competence => competence.toLowerCase().indexOf(filterValue) === 0);
  }
}
