import { Component, OnInit } from '@angular/core';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';
import { CompetenceService } from '../../service/competence.service';
import { DispositifhascompetenceService } from '../../service/dispositifhascompetence.service';
import { DispositifService } from '../../service/dispositif.service';
import { Router } from '@angular/router';
import { Competence } from '../../classe/competence';
import { Dispositif } from '../../classe/dispositif';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-dispositifhascompetence',
  templateUrl: './edit-dispositifhascompetence.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [DispositifService, CompetenceService, DispositifhascompetenceService]
})
export class EditDispositifhascompetenceComponent implements OnInit {
  dispositifhascompetence: Dispositifhascompetence;
  dispositifs: Dispositif[];
  competences: Competence[];

  form = new FormGroup ({
    competenceForm: new FormControl(''),
    dispositifForm: new FormControl(''),
  })

  constructor(private router: Router, private dispService: DispositifService, private compService: CompetenceService,
    private dcService: DispositifhascompetenceService) { }

  ngOnInit() {
    this.dispositifhascompetence = history.state.dc;
    this.dispService.getAll().subscribe((d) => {
      this.dispositifs = d;
      this.compService.getAll().subscribe((c) => {
        this.competences = c;
      });
    })
  }

  update(): void {
    let dc: Dispositifhascompetence;
    let competence: Competence = this.form.get('competenceForm').value;
    let dispositif: Dispositif = this.form.get('dispositifForm').value;
      dc.idc = competence.id;
      dc.competence = competence.nom;
      dc.idd = dispositif.id;
      dc.dispositif = dispositif.nom;
    this.dcService.update(dc).subscribe(
      (result) => this.router.navigate(['/displayDispositifhascompetence'])
    )
  }

}
