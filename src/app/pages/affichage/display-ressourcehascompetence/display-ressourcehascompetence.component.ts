import { Component, OnInit, ViewChild } from '@angular/core';
import { RessourcehascompetenceService } from '../../service/ressourcehascompetence.service';
import { Router } from '@angular/router';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';

@Component({
  selector: 'app-display-ressourcehascompetence',
  templateUrl: './display-ressourcehascompetence.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [RessourcehascompetenceService]
})
export class DisplayRessourcehascompetenceComponent implements OnInit {

  rcs: Ressourcehascompetence[];
  selected: Ressourcehascompetence;
  isSelected: boolean;

  constructor(private rcService: RessourcehascompetenceService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  onSelect(rc: Ressourcehascompetence): void {
    this.selected = rc;
    this.isSelected = true;
  }

  getAll() {
    this.rcService.getAll().subscribe((rcs) => this.rcs = rcs);
  }

  edit(): void {
    this.router.navigate(['/editRessourcehascompetence'], {state: {rc: this.selected}});
  }

  add(): void {
    this.router.navigate(['/createRessourcehascompetence'], {state: {rc: this.selected}});
  }

  delete(): void {
    this.rcService.delete(this.selected.idr, this.selected.idc).subscribe(
      (result) => {
        this.rcService.getAll().subscribe(
          (rcs) => {
          this.rcs = rcs;
          this.isSelected=false;
          this.router.navigate(['/displayRessourcehascompetence']);
        });
      });
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
