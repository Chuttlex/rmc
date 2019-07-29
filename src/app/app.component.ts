import { Component, OnInit } from '@angular/core';
import { Domaine } from './pages/classe/domaine';
import { DomaineService } from './pages/service/domaine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DomaineService]
})
export class AppComponent implements OnInit {

  constructor(private domaineService: DomaineService) {}

  ngOnInit(): void {
    let domaines: Domaine[];
    domaines = [];
    this.domaineService.getAll().subscribe((d) => domaines = d);
    if (domaines.length !== 3) {
      this.domaineService.initialize().subscribe();
    }
  }
  title = 'rmc';
}
