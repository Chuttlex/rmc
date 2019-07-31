import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DispositifService } from '../../service/dispositif.service';
import { OrganismeService } from '../../service/organisme.service';
import { Router } from '@angular/router';
import { Dispositif } from '../../classe/dispositif';
import { Organisme } from '../../classe/organisme';

@Component({
  selector: 'app-edit-dispositif',
  templateUrl: './edit-dispositif.component.html',
  styles: [],
  providers: [DispositifService, OrganismeService]
})
export class EditDispositifComponent implements OnInit {
  dispositif: Dispositif;
  organismes: Organisme[];

  form = new FormGroup ({
    nom: new FormControl(''),
    description: new FormControl(''),
    organisme: new FormControl(''),
  });

  constructor(private dispositifService: DispositifService, private orgService: OrganismeService, private router: Router) { }

  ngOnInit() {
    this.dispositif = history.state.dispositif;
    this.orgService.getAll().subscribe((organismes) => {
      this.organismes = organismes;
    });
  }

  update(): void {
    const org = this.form.get('organisme').value;
    this.dispositif.organisme = org;
    this.dispositif.nom = this.form.get('nom').value;
    this.dispositif.description = this.form.get('description').value;
    org.dispositif = this.dispositif;
    this.dispositif.organisme = org;
    this.dispositifService.update(this.dispositif).subscribe(
      (result) => this.orgService.update(org).subscribe(
        (result) => this.router.navigate(['/displayDispositif'])
      )
    );
  }
}
