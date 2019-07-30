import { Component, OnInit, ViewChild } from '@angular/core';
import { RessourcehascompetenceService } from '../../service/ressourcehascompetence.service';
import { Router } from '@angular/router';
import { Ressourcehascompetence } from '../../classe/ressourcehascompetence';

@Component({
  selector: 'app-display-ressourcehascompetence',
  templateUrl: './display-ressourcehascompetence.component.html',
  styleUrls: ['./display-ressourcehascompetence.component.css'],
  providers: [RessourcehascompetenceService]
})
export class DisplayRessourcehascompetenceComponent implements OnInit {

  rcs: Ressourcehascompetence[];
  selected: Ressourcehascompetence;
  isSelected: boolean;

  constructor(private rcService: RessourcehascompetenceService, private router: Router) { }

  ngOnInit() {
    this.getRessourcehascompetences();
  }

  onSelect(rc: Ressourcehascompetence): void {
    this.selected = rc;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editRessourcehascompetence'], {state: {rc: this.selected}});
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

  getByRessource(nom: string, prenom: string, equipe: string): void {
    this.rcService.getByRessource(nom, prenom, equipe).subscribe((rcs) => this.rcs = rcs);
  }

  getByCompetence(nom: string): void {
this.rcService.getByCompetence(nom).subscribe((rcs) => this.rcs = rcs);
  }

  getByNiveau(niveau: number, orgnom: string): void {
    this.rcService.getByNiveau(niveau, orgnom).subscribe((rcs) => this.rcs = rcs);
  }

  getByRessourceAndCompetence(nom: string, prenom: string, equipe: string, cnom: string): void {
    this.rcService.getByRessourceAndCompetence(nom, prenom, equipe, cnom).subscribe((rcs) => this.rcs = rcs);
  }

  getByDateEvol(date: Date): void {
    this.rcService.getByDateEvol(date).subscribe((rcs) => this.rcs = rcs);
  }

  getByRessourceAndDateEvol(nom: string, prenom: string, equipe: string, date: Date): void {
    this.rcService.getByRessourceAndDateEvol(nom, prenom, equipe, date).subscribe((rcs) => this.rcs = rcs);
  }

  getByCompetenceAndDateEvol(nom: string, date: Date): void {
    this.rcService.getByCompetenceAndDateEvol(nom, date).subscribe((rcs) => this.rcs = rcs);
  }

}
