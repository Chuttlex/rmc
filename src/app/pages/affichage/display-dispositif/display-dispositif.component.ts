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
    this.getAll();
  }

  getAll() {
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
  
  delete(): void {
    this.dispService.delete(this.selectedDispositif.id).subscribe(
      (result) => {
        this.dispService.getAll().subscribe(
          (disps) => {
            this.dispositifs = disps;
            this.isSelected=false;
            this.router.navigate(['/displayDispositif']);
          }
        )
      })
  }

  getColorButton(): string {
    if (!this.isSelected) {
      return '#6d071a';
    }
  }

}
