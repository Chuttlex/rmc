import { Component, OnInit, ViewChild } from '@angular/core';
import { Dispositifhascompetence } from '../../classe/dispositifhascompetence';
import { Router } from '@angular/router';
import { DispositifhascompetenceService } from '../../service/dispositifhascompetence.service';
import { EditDispositifhascompetenceComponent } from '../../edit/edit-dispositifhascompetence/edit-dispositifhascompetence.component';

@Component({
  selector: 'app-display-dispositifhascompetence',
  templateUrl: './display-dispositifhascompetence.component.html',
  styleUrls: ['./display-dispositifhascompetence.component.css'],
  providers: [DispositifhascompetenceService]
})
export class DisplayDispositifhascompetenceComponent implements OnInit {
  dispositifhascompetence: Dispositifhascompetence[];
  selectedDispositifhascompetence: Dispositifhascompetence;
  isSelected: boolean;
  @ViewChild(EditDispositifhascompetenceComponent, {static: false}) edc: EditDispositifhascompetenceComponent;

  constructor(private dcService: DispositifhascompetenceService, private router: Router) { }

  ngOnInit() {
    this.dcService.getAll().subscribe((d) => this.dispositifhascompetence = d);
  }

  onSelect(dispositifhascompetence: Dispositifhascompetence): void {
    this.selectedDispositifhascompetence = dispositifhascompetence;
    this.isSelected = true;
  }

  edit(): void {
    this.edc.passData(this.selectedDispositifhascompetence);
    this.router.navigate(['/editDispositifhascompetence']);
  }

}
