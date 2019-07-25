import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { RessourceService } from '../../service/ressource.service';
import { HistoriqueresService } from '../../service/historique.service';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';
import { Equipe } from '../../classe/equipe';
import { Historiqueres } from '../../classe/historiqueres';
import { Ressource } from '../../classe/ressource';

@Component({
  selector: 'app-create-ressource',
  templateUrl: './create-ressource.component.html',
  styles: [],
  providers: [RessourceService, EquipeService, HistoriqueresService]
})
export class CreateRessourceComponent implements OnInit {

  equipes: Equipe[];

  form = new FormGroup ({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    referenceClient: new FormControl(''),
    actif: new FormControl(''),
    dateentree: new FormControl(''),
    datesortie: new FormControl(''),
    equipe: new FormControl(''),
  })

  constructor(private equipeService: EquipeService, private ressourceService: RessourceService,
     private histService: HistoriqueresService, private router: Router) { }

  ngOnInit() {
    this.equipeService.getAll().subscribe((equipes) => this.equipes = equipes);
  }

  create(route: string): void {
    const res = new Ressource(); const hist = new Historiqueres();
    let equipe: Equipe;
    equipe = this.form.get('equipe').value;
    res.nom = this.form.get('nom').value;
    res.prenom = this.form.get('prenom').value;
    res.referenceClient = this.form.get('referenceClient').value;
    hist.isactif = this.form.get('actif').value;
    hist.dateentree = this.form.get('dateentree').value;
    hist.datesortie = this.form.get('datesortie').value;
    hist.rnom = res.nom;
    hist.rprenom = res.prenom;
    res.equipe = equipe.nom;
    this.ressourceService.create(res).subscribe(
      (result) => this.histService.create(hist).subscribe(
        (result) => this.router.navigate([route]),
      )
    );    
  }
}
