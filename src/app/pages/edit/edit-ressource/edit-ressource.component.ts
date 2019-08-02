import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { HistoriqueresService } from '../../service/historique.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';
import { Ressource } from '../../classe/ressource';
import { Equipe } from '../../classe/equipe';
import { Historiqueres } from '../../classe/historiqueres';

@Component({
  selector: 'app-edit-ressource',
  templateUrl: './edit-ressource.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [EquipeService, RessourceService, HistoriqueresService]
})
export class EditRessourceComponent implements OnInit {
  ressource: Ressource;
  historique: Historiqueres;
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

  constructor(private equipeService: EquipeService, private resService: RessourceService, private histService: HistoriqueresService,
    private router: Router) { }

  ngOnInit() {
    this.ressource = history.state.ressource;
    this.equipeService.getAll().subscribe((equipes) => {
      this.equipes = equipes;
      this.histService.getByRessource(this.ressource.nom,this.ressource.prenom,this.ressource.equipe).subscribe((hist) => {
        this.historique = hist;
      })
    });
    
  }

  update(): void {
    let equipe = new Equipe();
      equipe = this.form.get('equipe').value;
        this.ressource.nom = this.form.get('nom').value;
        this.ressource.prenom = this.form.get('prenom').value;
          this.ressource.referenceClient = this.form.get('referenceClient').value;
          this.historique.dateentree = this.form.get('dateentree').value;
          this.historique.datesortie = this.form.get('datesortie').value;
          this.historique.actif = this.form.get('actif').value;
          this.historique.rnom = this.ressource.nom;
          this.historique.rprenom = this.ressource.prenom;
          this.resService.update(this.ressource).subscribe(
            (result) => this.histService.update(this.historique).subscribe(
              (result) => this.equipeService.update(equipe).subscribe(
                (result) => this.router.navigate(['/displayRessource'])
              )
            )
          )
      }
}
