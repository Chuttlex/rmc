import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressource } from '../classe/ressource';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class RessourceService {

    constructor( private http: HttpClient) { }

    create(ressource: Ressource): Observable<any> {
        const url = Constantes.url + 'api/infotel/createRessource';
        return this.http.post(url, JSON.stringify(ressource), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearRessources');
    }

    getAll(): Observable<Ressource[]> {
        const url = Constantes.url + 'api/infotel/getRessources';
        return this.http.get<Ressource[]>(url);
    }

    getById(id: number): Observable<Ressource> {
        const url = Constantes.url + `api/infotel/getRessourceById=${id}`;
        return this.http.get<Ressource>(url);
    }

    delete(id: number): Observable<Ressource> {
        const url = Constantes.url + `api/infotel/deleteRessource=${id}`;
        return this.http.delete<Ressource>(url, httpOptions);
    }

    update(ressource: Ressource): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateRessource';
        return this.http.put(url, JSON.stringify(ressource), httpOptions);
    }

    getByNomAndPrenom(nom: string, prenom: string): Observable<Ressource> {
        const url = Constantes.url + `api/infotel/ressource/ByNomAndPrenom=${nom}&${prenom}`;
        return this.http.get<Ressource>(url);
    }

    getByEquipe(nom: string): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByEquipe=${nom}`;
        return this.http.get<Ressource[]>(url);
    }

    getByCompetence(nom: string): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByCompetence=${nom}`;
        return this.http.get<Ressource[]>(url);
    }

    getByCompetenceAndNiveau(nom: string, niveau: number, orgnom: string): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByCompetenceAndNiveau=${nom}&${niveau}&${orgnom}`;
        return this.http.get<Ressource[]>(url);
    }

    getByNiveau(niveau: number, orgnom: string): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByNiveau=${niveau}&${orgnom}`;
        return this.http.get<Ressource[]>(url);
    }

    getByIsActif(actif: boolean): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByIsActif=${actif}`;
        return this.http.get<Ressource[]>(url);
    }

    getByIsActifAsBackUp(actif: boolean): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByIsActifAsBackUp=${actif}`;
        return this.http.get<Ressource[]>(url);
    }

    getByDateEntree(date: Date): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByDateentree=${date}`;
        return this.http.get<Ressource[]>(url);
    }

    getByDateSortie(date: Date): Observable<Ressource[]> {
        const url = Constantes.url + `api/infotel/ressource/ByDatesortie=${date}`;
        return this.http.get<Ressource[]>(url);
    }
  }
