import { Component, OnInit, ViewChild } from '@angular/core';
import { Dispositif } from '../../classe/dispositif';
import { DispositifService } from '../../service/dispositif.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-dispositif',
  templateUrl: './display-dispositif.component.html',
  styleUrls: ['../../../../assets/stylesheets/tabStyle.css'],
  providers: [DispositifService]
})
export class DisplayDispositifComponent implements OnInit {

  dispositifs: Dispositif[];
  selectedDispositif: Dispositif;
  isSelected: boolean;

  constructor(private dispService: DispositifService, private router: Router) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((d) => {
      this.dispositifs = d;
    });
  }

  onSelect(dispositif: Dispositif): void {
    this.selectedDispositif = dispositif;
    this.isSelected = true;
  }

  edit(): void {
    this.router.navigate(['/editDispositif'], {state: {dispositif: this.selectedDispositif}});
  }

  add(): void {
    this.router.navigate(['/createDispositif'], {state: {dispositif: this.selectedDispositif}});
  }


  clear(): void {
    this.dispService.clear().subscribe();
  }

  create(dispositif: Dispositif): void {
    this.dispService.create(dispositif).subscribe((dispositifc) => this.dispositifs.push(dispositifc));
  }

  delete(): void {
    this.dispService.delete(this.selectedDispositif.id).subscribe(
      (result) => this.router.navigate(['/displayDispositif']));
  }

  update(dispositif: Dispositif): void {
    this.dispositifs = this.dispositifs.filter((c) => c.id !== dispositif.id);
    this.dispositifs.push(dispositif);
    this.dispService.update(dispositif).subscribe();
  }

  getDispositifs(): void {
    this.dispService.getAll().subscribe((dispositifs) => this.dispositifs = dispositifs);
  }

  getById(id: number): void {
    this.dispService.getById(id).subscribe((dispositif) => this.dispositifs.push(dispositif));
  }

  getByNom(nom: string): void {
    this.dispService.getByNom(nom).subscribe((dispositif) => this.dispositifs.push(dispositif));
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
