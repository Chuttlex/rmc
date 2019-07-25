import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Equipe } from '../classe/equipe';
import { Constantes } from 'src/app/autres/constantes';

  @Injectable()
  export class CalcService {

       constructor(private http: HttpClient) { }

       getMoyenneForEquipe(equipe: Equipe): Observable<Map<String, Number>> {
           const url = Constantes.url + 'api/infotel/GetMoyenneForEquipe=' + equipe.nom;
           return this.http.get<Map<String, Number>>(url);
       }
  }
