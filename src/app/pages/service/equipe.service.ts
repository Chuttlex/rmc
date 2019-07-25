import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../classe/equipe';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class EquipeService {

    constructor( private http: HttpClient) { }

    create(equipe: Equipe): Observable<any> {
        const url = Constantes.url + 'api/infotel/createEquipe';
        return this.http.post(url, JSON.stringify(equipe), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearEquipes');
    }

    getAll(): Observable<Equipe[]> {
        const url = Constantes.url + 'api/infotel/getEquipes';
        return this.http.get<Equipe[]>(url);
    }

    getById(id: number): Observable<Equipe> {
        const url = Constantes.url + `api/infotel/getEquipeById=${id}`;
        return this.http.get<Equipe>(url);
    }

    delete(id: number): Observable<Equipe> {
        const url = Constantes.url + `api/infotel/deleteEquipe=${id}`;
        return this.http.delete<Equipe>(url, httpOptions);
    }

    update(equipe: Equipe): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateEquipe';
        return this.http.put(url, JSON.stringify(equipe), httpOptions);
    }

    getByNom(nom: string): Observable<Equipe> {
        const url = Constantes.url + `api/infotel/equipe/ByNom=${nom}`;
        return this.http.get<Equipe>(url);
    }

    getByDispositif(nom: string): Observable<Equipe[]> {
        const url = Constantes.url + `api/infotel/equipe/ByDispositif=${nom}`;
        return this.http.get<Equipe[]>(url);
    }

    getByRessource(id: number): Observable<Equipe> {
        const url = Constantes.url + `api/infotel/equipe/ByRessource=${id}`;
        return this.http.get<Equipe>(url);
    }

    getByCompetence(nom: string): Observable<Equipe[]> {
        const url = Constantes.url + `api/infotel/equipe/ByCompetence=${nom}`;
        return this.http.get<Equipe[]>(url);
    }

    getByNiveau(niveau: number, orgnom: string): Observable<Equipe[]> {
        const url = Constantes.url + `api/infotel/equipe/ByNiveau=${niveau}&${orgnom}`;
        return this.http.get<Equipe[]>(url);
    }

    getByCompetenceAndNiveau(nom: string, niveau: number, orgnom: string): Observable<Equipe[]> {
        const url = Constantes.url + `api/infotel/equipe/ByCompetenceAndNiveau=${nom}&${niveau}&${orgnom}`;
        return this.http.get<Equipe[]>(url);
    }

    getByOrganisme(nom: string): Observable<Equipe[]> {
        const url = Constantes.url + `api/infotel/equipe/ByOrganisme=${nom}`;
        return this.http.get<Equipe[]>(url);
    }
  }
