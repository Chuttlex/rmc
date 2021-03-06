import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganismeService } from '../../service/organisme.service';
import { Organisme } from '../../classe/organisme';
import { Router } from '@angular/router';

/*const testOrga1: Organisme = {id: 1, organisme: 'Infotel', description: 'ESN'};
const testOrga2: Organisme = {id: 2, organisme: 'Air France', description: 'Compagnie Aerienne'};
const testOrga3: Organisme = {id: 3, organisme: 'Pro BTP', description: 'Assureur'};*/

@Component({
  selector: 'app-display-organisme',
  templateUrl: './display-organisme.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [OrganismeService]
})
export class DisplayOrganismeComponent implements OnInit {

  organismes: Organisme[] = [];
  selectedOrganisme: Organisme;
  isSelected: boolean;

  constructor(private orgService: OrganismeService, private router: Router) {
  }

  onSelect(organisme: Organisme): void {
    this.selectedOrganisme = organisme;
    this.isSelected = true;
  }

  ngOnInit() {
    this.getAll();
    this.isSelected = false;
  }

  getAll() {
    this.orgService.getAll().subscribe(orgs => this.organismes = orgs);
  }

  edit(): void {
    this.router.navigate(['/editOrganisme'], {state: {organisme: this.selectedOrganisme}});
  }

  add(): void {
    this.router.navigate(['/createOrganisme']);
  }

  delete(): void {
    this.orgService.delete(this.selectedOrganisme.id).subscribe(
      (result) => {
        this.orgService.getAll().subscribe(
          (orgs) => {
            this.organismes = orgs;
            this.isSelected = false;
            this.router.navigate(['/displayOrganisme']);
          })
      });
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }
}
