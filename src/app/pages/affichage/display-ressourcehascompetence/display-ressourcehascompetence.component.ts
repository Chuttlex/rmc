import { Component, OnInit, ViewChild } from '@angular/core';
import { RessourcehascompetenceService } from '../../service/ressourcehascompetence.service';
import { Router } from '@angular/router';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';
import { EditRessourcehascompetenceComponent } from '../../edit/edit-ressourcehascompetence/edit-ressourcehascompetence.component';


const resHasCptTest1: Ressourcehascompetence = {idr: 1, idc: 1, niveau: 5, organisme: 'Infotel', cnom: 'Java', rnom: 'Martin', rprenom: 'Paul', dateEvolComp: new Date('10/01')};
const resHasCptTest2: Ressourcehascompetence = {idr: 2, idc: 2, niveau: 1, organisme: 'Amadeus', cnom: 'C', rnom: 'Marchal', rprenom: 'Pierre', dateEvolComp: new Date('06/05')};
const resHasCptTest3: Ressourcehascompetence = {idr: 3, idc: 3, niveau: 5, organisme: 'ProBTP', cnom: 'JS', rnom: 'Phelps', rprenom: 'Jacques', dateEvolComp: new Date('12/01')};


@Component({
  selector: 'app-display-ressourcehascompetence',
  templateUrl: './display-ressourcehascompetence.component.html',
  styleUrls: ['./display-ressourcehascompetence.component.css'],
  providers: [RessourcehascompetenceService]
})
export class DisplayRessourcehascompetenceComponent implements OnInit {

  rcs: Ressourcehascompetence[] = [];
  selected: Ressourcehascompetence;
  isSelected: boolean;
  @ViewChild(EditRessourcehascompetenceComponent, {static: false}) ercc: EditRessourcehascompetenceComponent;

  constructor(private rcService: RessourcehascompetenceService, private router: Router) { }

  ngOnInit() {
    this.getRessourcehascompetences();
    this.rcs.push(resHasCptTest1,resHasCptTest2,resHasCptTest3);
  }

  onSelect(rc: Ressourcehascompetence): void {
    this.selected = rc;
    this.isSelected = true;
  }

  edit(): void {
    this.ercc.passData(this.selected);
    this.router.navigate(['/editRessourcehascompetence']);
  }

  clear(): void {
    this.rcService.clear().subscribe();
  }

  create(rc: Ressourcehascompetence): void {
    this.rcService.create(rc).subscribe((rcc) => this.rcs.push(rcc));
  }

  delete(idr: number, idc:number): void {
    this.rcs = this.rcs.filter((c) => c.idr !== idr && c.idc !== idc);
    this.rcService.delete(idr, idc).subscribe();
  }

  update(rc: Ressourcehascompetence): void {
    this.rcs = this.rcs.filter((c) => c.idr !== rc.idr && c.idc !== rc.idc);
    this.rcs.push(rc);
    this.rcService.update(rc).subscribe();
  }

  getRessourcehascompetences(): void {
    this.rcService.getAll().subscribe((rcs) => this.rcs = rcs);
  }

  getById(idr: number, idc:number): void {
    this.rcService.getById(idr, idc).subscribe((rc) => this.rcs.push(rc));
  }

  getByRessource(nom: string, prenom: string): void {
    this.rcService.getByRessource(nom, prenom).subscribe((rcs) => this.rcs = rcs);
  }

  getByCompetence(nom: string): void {
this.rcService.getByCompetence(nom).subscribe((rcs) => this.rcs = rcs);
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.rcService.getByNiveau(niveau, orgnom).subscribe((rcs) => this.rcs = rcs);
  }

  getByRessourceAndCompetence(nom: string, prenom: string, cnom: string): void {
    this.rcService.getByRessourceAndCompetence(nom, prenom, cnom).subscribe((rcs) => this.rcs = rcs);
  }

  getByDateEvol(date: Date): void {
    this.rcService.getByDateEvol(date).subscribe((rcs) => this.rcs = rcs);
  }

  getByRessourceAndDateEvol(nom: string, prenom: string, date: Date): void {
    this.rcService.getByRessourceAndDateEvol(nom, prenom, date).subscribe((rcs) => this.rcs = rcs);
  }

  getByCompetenceAndDateEvol(nom: string, date: Date): void {
    this.rcService.getByCompetenceAndDateEvol(nom, date).subscribe((rcs) => this.rcs = rcs);
  }

}
