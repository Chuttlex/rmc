import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../../service/domaine.service';
import { Domaine } from '../../classe/domaine';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styles: [],
  providers: [DomaineService]
})
export class DomaineComponent implements OnInit {
  domaines: Domaine[];

  constructor(private domaineService: DomaineService) { }

  ngOnInit() {
    this.domaines = [];
  }

  update(domaine: Domaine): void {
    this.domaines = this.domaines.filter((c) => c.id !== domaine.id);
    this.domaines.push(domaine);
    this.domaineService.update(domaine).subscribe();
  }

  getDomaines(): void {
    this.domaineService.getAll().subscribe((domaines) => this.domaines = domaines);
  }

  getById(id: number): void {
    this.domaineService.getById(id).subscribe((domaine) => this.domaines.push(domaine));
  }

  getByNom(nom: string): void {
    this.domaineService.getByNom(nom).subscribe((domaine) => this.domaines.push(domaine));
  }

}
