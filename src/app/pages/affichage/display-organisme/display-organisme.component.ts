import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganismeService } from '../../service/organisme.service';
import { Organisme } from '../../classe/organisme';
import { EditOrganismeComponent } from '../../edit/edit-organisme/edit-organisme.component';
import { Router } from '@angular/router';

const testOrga1: Organisme = {id: 1, organisme: 'Infotel', description: 'ESN', dispositif: 'Manhattan'};
const testOrga2: Organisme = {id: 2, organisme: 'Air France', description: 'Compagnie Aerienne', dispositif: 'Overlord'};
const testOrga3: Organisme = {id: 3, organisme: 'Pro BTP', description: 'Assureur', dispositif: 'Enigma'};

@Component({
  selector: 'app-display-organisme',
  templateUrl: './display-organisme.component.html',
  styleUrls: ['./display-organisme.component.css'],
  providers: [OrganismeService]
})
export class DisplayOrganismeComponent implements OnInit {

  organismes: Organisme[] = [];
  selectedOrganisme: Organisme;
  isSelected: boolean;
  @ViewChild(EditOrganismeComponent, {static: false}) eoc: EditOrganismeComponent;

  constructor(private orgService: OrganismeService, private router: Router) { }

  onSelect(organisme: Organisme): void {
    this.selectedOrganisme = organisme;
    this.isSelected = true;
  }

  ngOnInit() {
    this.orgService.getAll().subscribe(orgs => this.organismes = orgs);
    this.isSelected = false;
    this.organismes.push(testOrga1,testOrga2,testOrga3);
  }

  edit(): void {
    this.eoc.passData(this.selectedOrganisme);
    this.router.navigate(['/editOrganisme']);
  }

}
