import { Component, OnInit} from '@angular/core';
import { CompetenceService } from '../../service/competence.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DomaineService } from '../../service/domaine.service';
import { Router } from '@angular/router';
import { Domaine } from '../../classe/domaine';
import { Competence } from '../../classe/competence';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';
import { DispositifhascompetenceService } from '../../service/dispositifhascompetence.service';
import { DispositifService } from '../../service/dispositif.service';
import { Dispositif } from '../../classe/dispositif';

@Component({
  selector: 'app-create-competence',
  templateUrl: './create-competence.component.html',
  styles: [],
  providers: [CompetenceService, DispositifService, DispositifhascompetenceService, DomaineService]
})
export class CreateCompetenceComponent implements OnInit {

  dispositifs: Dispositif[];
  domaines: Domaine[];

  form = new FormGroup ({
    nomForm: new FormControl(''),
    domaineForm: new FormControl(''),
    dispositifForm: new FormControl(''),
  })

  constructor(private compService: CompetenceService, private dispService: DispositifService, private dcService: DispositifhascompetenceService
    , private domaineService: DomaineService, private router: Router) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((dispositifs) => this.dispositifs = dispositifs);
    this.domaineService.getAll().subscribe((domaines) => this.domaines = domaines);
  }

  create(route: string): void {
    let comp = new Competence();
    comp.nom = this.form.get('nomForm').value;
    let domaine: Domaine;
    this.domaineService.getByNom(this.form.get('domaineForm').value).subscribe((dom) => {
      domaine = dom;
      comp.domaine = domaine.valeur;
      let dc = new Dispositifhascompetence();
          dc.competence = comp.nom;
          dc.dispositif = this.form.get('dispositifForm').value.nom;
          this.compService.create(comp).subscribe(
            (result) => this.dcService.create(dc).subscribe(
              (result) => this.router.navigate([route])
            )
          );
        })
  }
}
