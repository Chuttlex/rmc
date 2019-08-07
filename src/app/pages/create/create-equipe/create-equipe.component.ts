import { Component, OnInit} from '@angular/core';
import { DispositifService } from '../../service/dispositif.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { EquipeService } from '../../service/equipe.service';
import { Router } from '@angular/router';
import { Dispositif } from '../../classe/dispositif';
import { Equipe } from '../../classe/equipe';

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['../../../../assets/stylesheets/formStyle.css'],
  providers: [DispositifService, EquipeService]
})
export class CreateEquipeComponent implements OnInit {

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

  create(route: string): void {
    const equipe = new Equipe();
    equipe.nom = this.form.get('nom').value;
    equipe.rescible = this.form.get('rescible').value;
    let disp: Dispositif;
    disp = this.form.get('dispositif').value;
    equipe.dispositif = disp.nom;
    this.equipeService.create(equipe).subscribe(
      (result) => this.router.navigate([route])
    );
  }
}
