import { Component, OnInit } from '@angular/core';
import { HistoriqueresService } from '../../service/historique.service';
import { Historiqueres } from '../../classe/historiqueres';

@Component({
  selector: 'app-historiqueres',
  templateUrl: './historiqueres.component.html',
  styles: [],
  providers: [HistoriqueresService]
})
export class HistoriqueresComponent implements OnInit {
  historiques: Historiqueres[];

  constructor(private histService: HistoriqueresService) { }

  ngOnInit() {
    this.historiques = [];
  }

  clear(): void {
    this.histService.clear().subscribe();
  }

  create(historiqueres: Historiqueres): void {
    this.histService.create(historiqueres).subscribe((historiqueresc) => this.historiques.push(historiqueresc));
  }

  delete(id: number): void {
    this.historiques = this.historiques.filter((c) => c.id !== id);
    this.histService.delete(id).subscribe();
  }

  update(historique: Historiqueres): void {
    this.historiques = this.historiques.filter((c) => c.id !== historique.id);
    this.historiques.push(historique);
    this.histService.update(historique).subscribe();
  }

  getHistoriqueress(): void {
    this.histService.getAll().subscribe((historiques) => this.historiques = historiques);
  }

  getById(id: number): void {
    this.histService.getById(id).subscribe((historique) => this.historiques.push(historique));
  }

  getByRessource(nom: string, prenom: string, equipe: string): void {
    this.histService.getByRessource(nom, prenom, equipe).subscribe((historique) => this.historiques.push(historique));
  }

}
