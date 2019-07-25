import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayOrganismeComponent } from './pages/affichage/display-organisme/display-organisme.component';
import { CreateOrganismeComponent } from './pages/create/create-organisme/create-organisme.component';
import { EditOrganismeComponent } from './pages/edit/edit-organisme/edit-organisme.component';
import { CreateCompetenceComponent } from './pages/create/create-competence/create-competence.component';
import { EditCompetenceComponent } from './pages/edit/edit-competence/edit-competence.component';
import { DisplayDispositifComponent } from './pages/affichage/display-dispositif/display-dispositif.component';
import { CreateDispositifComponent } from './pages/create/create-dispositif/create-dispositif.component';
import { EditDispositifComponent } from './pages/edit/edit-dispositif/edit-dispositif.component';
import { DisplayEquipeComponent } from './pages/affichage/display-equipe/display-equipe.component';
import { CreateEquipeComponent } from './pages/create/create-equipe/create-equipe.component';
import { EditEquipeComponent } from './pages/edit/edit-equipe/edit-equipe.component';
import { DisplayRessourceComponent } from './pages/affichage/display-ressource/display-ressource.component';
import { CreateRessourceComponent } from './pages/create/create-ressource/create-ressource.component';
import { EditRessourceComponent } from './pages/edit/edit-ressource/edit-ressource.component';
import { DisplayCompetenceComponent } from './pages/affichage/display-competence/display-competence.component';
import { DisplayRegleComponent } from './pages/affichage/display-regle/display-regle.component';
import { EditRegleComponent } from './pages/edit/edit-regle/edit-regle.component';
import { DisplayRessourcehascompetenceComponent } from './pages/affichage/display-ressourcehascompetence/display-ressourcehascompetence.component';
import { EditRessourcehascompetenceComponent } from './pages/edit/edit-ressourcehascompetence/edit-ressourcehascompetence.component';
import { CreateRegleComponent } from './pages/create/create-regle/create-regle.component';
import { DisplayNiveauComponent } from './pages/affichage/display-niveau/display-niveau.component';
import { RadarComponent } from './pages/radar/radar.component';
import { MatriceComponent } from './pages/matrice/matrice.component';
import { CreateRessourcehascompetenceComponent } from './pages/create/create-ressourcehascompetence/create-ressourcehascompetence.component';
import { DisplayDispositifhascompetenceComponent } from './pages/affichage/display-dispositifhascompetence/display-dispositifhascompetence.component';
import { EditDispositifhascompetenceComponent } from './pages/edit/edit-dispositifhascompetence/edit-dispositifhascompetence.component';

const routes: Routes = [
  { path: 'displayOrganisme', component: DisplayOrganismeComponent},
  { path: 'createOrganisme', component: CreateOrganismeComponent},
  { path: 'editOrganisme', component: EditOrganismeComponent},
  { path: 'displayCompetence', component: DisplayCompetenceComponent},
  { path: 'createCompetence', component: CreateCompetenceComponent},
  { path: 'editCompetence', component: EditCompetenceComponent},
  { path: 'displayDispositif', component: DisplayDispositifComponent},
  { path: 'createDispositif', component: CreateDispositifComponent},
  { path: 'editDispositif', component: EditDispositifComponent},
  { path:'displayEquipe', component: DisplayEquipeComponent},
  { path: 'createEquipe', component: CreateEquipeComponent},
  { path: 'editEquipe', component: EditEquipeComponent},
  { path: 'displayRessource', component: DisplayRessourceComponent},
  { path: 'createRessource', component: CreateRessourceComponent},
  { path: 'editRessource', component: EditRessourceComponent},
  { path: 'displayRegle', component: DisplayRegleComponent},
  { path: 'createRegle', component: CreateRegleComponent},
  { path: 'editRegle', component: EditRegleComponent},
  { path: 'displayRessourcehascompetence', component: DisplayRessourcehascompetenceComponent},
  { path: 'editRessourcehascompetence', component: EditRessourcehascompetenceComponent},
  { path: 'displayNiveau', component: DisplayNiveauComponent},
  { path: 'radar', component: RadarComponent},
  { path: 'matrice', component: MatriceComponent},
  { path: 'createRessourcehascompetence', component: CreateRessourcehascompetenceComponent},
  { path: 'displayDispositifhascompetence', component: DisplayDispositifhascompetenceComponent},
  { path: 'editDispositifhascompetence', component: EditDispositifhascompetenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
