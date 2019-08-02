import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganismeComponent } from './pages/entitée/organisme/organisme.component';
import { DisplayOrganismeComponent } from './pages/affichage/display-organisme/display-organisme.component';
import { CreateOrganismeComponent } from './pages/create/create-organisme/create-organisme.component';
import { OrganismeService } from './pages/service/organisme.service';
import { HttpClientModule } from '@angular/common/http';
import { DispositifService } from './pages/service/dispositif.service';
import { DomaineService } from './pages/service/domaine.service';
import { CompetenceService } from './pages/service/competence.service';
import { NiveauService } from './pages/service/niveau.service';
import { RessourceService } from './pages/service/ressource.service';
import { HistoriqueresService } from './pages/service/historique.service';
import { RessourcehascompetenceService } from './pages/service/ressourcehascompetence.service';
import { RegleService } from './pages/service/regle.service';
import { EquipeService } from './pages/service/equipe.service';
import { DisplayCompetenceComponent } from './pages/affichage/display-competence/display-competence.component';
import { DisplayDispositifComponent } from './pages/affichage/display-dispositif/display-dispositif.component';
import { DisplayEquipeComponent } from './pages/affichage/display-equipe/display-equipe.component';
import { DisplayNiveauComponent } from './pages/affichage/display-niveau/display-niveau.component';
import { DisplayRegleComponent } from './pages/affichage/display-regle/display-regle.component';
import { DisplayRessourceComponent } from './pages/affichage/display-ressource/display-ressource.component';
import { DisplayRessourcehascompetenceComponent } from './pages/affichage/display-ressourcehascompetence/display-ressourcehascompetence.component';
import { RegleComponent } from './pages/entitée/regle/regle.component';
import { CompetenceComponent } from './pages/entitée/competence/competence.component';
import { DispositifComponent } from './pages/entitée/dispositif/dispositif.component';
import { DomaineComponent } from './pages/entitée/domaine/domaine.component';
import { EquipeComponent } from './pages/entitée/equipe/equipe.component';
import { RessourceComponent } from './pages/entitée/ressource/ressource.component';
import { HistoriqueresComponent } from './pages/entitée/historiqueres/historiqueres.component';
import { NiveauComponent } from './pages/entitée/niveau/niveau.component';
import { RessourcehascompetenceComponent } from './pages/entitée/ressourcehascompetence/ressourcehascompetence.component';
import { RadarComponent } from './pages/radar/radar.component';
import { CreateCompetenceComponent } from './pages/create/create-competence/create-competence.component';
import { CreateDispositifComponent } from './pages/create/create-dispositif/create-dispositif.component';
import { CreateEquipeComponent } from './pages/create/create-equipe/create-equipe.component';
import { CreateRegleComponent } from './pages/create/create-regle/create-regle.component';
import { EditCompetenceComponent } from './pages/edit/edit-competence/edit-competence.component';
import { EditDispositifComponent } from './pages/edit/edit-dispositif/edit-dispositif.component';
import { EditEquipeComponent } from './pages/edit/edit-equipe/edit-equipe.component';
import { EditOrganismeComponent } from './pages/edit/edit-organisme/edit-organisme.component';
import { EditRegleComponent } from './pages/edit/edit-regle/edit-regle.component';
import { EditRessourceComponent } from './pages/edit/edit-ressource/edit-ressource.component';
import { EditRessourcehascompetenceComponent } from './pages/edit/edit-ressourcehascompetence/edit-ressourcehascompetence.component';
import { CreateRessourceComponent } from './pages/create/create-ressource/create-ressource.component';
import { AutoCompleteService } from './pages/service/autocomplete.service';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatChipsModule,
  MatInputModule,
  MatTableModule,
  MatRadioModule, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatriceComponent } from './pages/matrice/matrice.component';
import { CreateRessourcehascompetenceComponent } from './pages/create/create-ressourcehascompetence/create-ressourcehascompetence.component';
import { DispositifhascompetenceComponent } from './pages/entitée/dispositifhascompetence/dispositifhascompetence.component';
import { DisplayDispositifhascompetenceComponent } from './pages/affichage/display-dispositifhascompetence/display-dispositifhascompetence.component';
import { EditDispositifhascompetenceComponent } from './pages/edit/edit-dispositifhascompetence/edit-dispositifhascompetence.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOrganismeComponent,
    OrganismeComponent,
    CreateOrganismeComponent,
    DisplayCompetenceComponent,
    DisplayDispositifComponent,
    DisplayEquipeComponent,
    DisplayNiveauComponent,
    DisplayRegleComponent,
    DisplayRessourceComponent,
    DisplayRessourcehascompetenceComponent,
    RegleComponent,
    CompetenceComponent,
    DispositifComponent,
    DomaineComponent,
    EquipeComponent,
    RessourceComponent,
    HistoriqueresComponent,
    RegleComponent,
    NiveauComponent,
    RessourcehascompetenceComponent,
    RadarComponent,
    CreateCompetenceComponent,
    CreateDispositifComponent,
    CreateEquipeComponent,
    CreateRegleComponent,
    CreateRegleComponent,
    CreateRessourceComponent,
    EditCompetenceComponent,
    EditDispositifComponent,
    EditEquipeComponent,
    EditOrganismeComponent,
    EditRegleComponent,
    EditRessourceComponent,
    EditRessourcehascompetenceComponent,
    NavbarComponent,
    AutocompleteComponent,
    MatriceComponent,
    CreateRessourcehascompetenceComponent,
    DispositifhascompetenceComponent,
    DisplayDispositifhascompetenceComponent,
    EditDispositifhascompetenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [
    OrganismeService,
    DispositifService,
    DomaineService,
    CompetenceService,
    NiveauService,
    RessourceService,
    HistoriqueresService,
    RessourcehascompetenceService,
    RegleService,
    EquipeService,
    AutoCompleteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
