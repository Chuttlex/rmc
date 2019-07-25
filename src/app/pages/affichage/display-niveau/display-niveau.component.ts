import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../service/niveau.service';
import { Niveau } from '../../classe/niveau';

@Component({
  selector: 'app-display-niveau',
  templateUrl: './display-niveau.component.html',
  styleUrls: ['./display-niveau.component.css'],
  providers: [NiveauService]
})
export class DisplayNiveauComponent implements OnInit {

  niveaux: Niveau[];

  constructor(private niveauService: NiveauService) { }

  ngOnInit() {
    this.niveauService.getAll().subscribe((n) => this.niveaux = n);
  }

  clear(): void {
    this.niveauService.clear().subscribe();
  }

  delete(id: number): void {
    this.niveaux = this.niveaux.filter((c) => c.id !== id);
    this.niveauService.delete(id).subscribe();
  }

  getNiveaus(): void {
    this.niveauService.getAll().subscribe((niveaux) => this.niveaux = niveaux);
  }

  getById(id: number): void {
    this.niveauService.getById(id).subscribe((niveau) => this.niveaux.push(niveau));
  }

}
