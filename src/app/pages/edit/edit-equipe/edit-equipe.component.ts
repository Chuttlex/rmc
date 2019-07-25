import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../service/equipe.service';
import { DispositifService } from '../../service/dispositif.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from '../../classe/equipe';
import { Dispositif } from '../../classe/dispositif';

@Component({
  selector: 'app-edit-equipe',
  templateUrl: './edit-equipe.component.html',
  styles: [],
  providers: [DispositifService, EquipeService]
})
export class EditEquipeComponent implements OnInit {
  equipe: Equipe;
  dispositifs: Dispositif[];

  form = new FormGroup ({
    nom: new FormControl(''),
    rescible: new FormControl(''),
    dispositif: new FormControl(''),
  })

  constructor(private dispService: DispositifService, private equipeService: EquipeService, private router: Router) { }

  ngOnInit() {
    this.dispService.getAll().subscribe((dispositifs) => this.dispositifs = dispositifs);
  }

  passData(equipe: Equipe): void {
    this.equipe = equipe;
  }

  update(): void {
    let dispositif: Dispositif;
    dispositif = this.form.get('dispositif').value;
    this.equipe.nom = this.form.get('nom').value;
    this.equipe.rescible = this.form.get('rescible').value;
    this.equipe.dispositif = dispositif.nom;
    this.equipeService.update(this.equipe).subscribe(
      (result) => this.dispService.update(dispositif).subscribe(
        (result) => this.router.navigate(['/displayEquipe'])
      )
    );
  }
}
