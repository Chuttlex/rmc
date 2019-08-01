import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Niveau } from '../classe/niveau';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class NiveauService {

    constructor( private http: HttpClient) { }

    create(niveaux: Niveau[]): Observable<any> {
        const url = Constantes.url + 'api/infotel/createNiveaux';
        return this.http.post(url, JSON.stringify(niveaux), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearNiveaux');
    }

    getAll(): Observable<Niveau[]> {
        const url = Constantes.url + 'api/infotel/getNiveaux';
        return this.http.get<Niveau[]>(url);
    }

    getById(id: number): Observable<Niveau> {
        const url = Constantes.url + `api/infotel/getNiveauById=${id}`;
        return this.http.get<Niveau>(url);
    }

    delete(id: number): Observable<Niveau> {
        const url = Constantes.url + `api/infotel/deleteNiveau=${id}`;
        return this.http.delete<Niveau>(url, httpOptions);
    }

    deleteSome(organisme: string): Observable<Niveau[]> {
        let url = Constantes.url + `api/infotel/deleteNiveaux=${organisme}`;
        return this.http.delete<Niveau[]>(url, httpOptions);
    }

    update(niveau: Niveau): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateNiveau';
        return this.http.put(url, JSON.stringify(niveau), httpOptions);
    }

    getByOrganisme(nom: string): Observable<Niveau[]> {
        const url = Constantes.url + `api/infotel/niveau/ByOrganisme=${nom}`;
        return this.http.get<Niveau[]>(url);
    }

    getByValeur(valeur: number): Observable<Niveau[]> {
        const url = Constantes.url + `api/infotel/niveau/ByValeur=${valeur}`;
        return this.http.get<Niveau[]>(url);
    }

    getByRessourceAndCompetence(nom: string, prenom: string, equipe: string, compNom: string): Observable<Niveau[]> {
        const url = Constantes.url + `api/infotel/niveau/ByRessourceAndCompetence=${nom}&${prenom}&${equipe}&${compNom}`;
        return this.http.get<Niveau[]>(url);
    }

    getByEquipeAndCompetence(enom: string, compNom: string): Observable<Niveau[]> {
        const url = Constantes.url + `api/infotel/niveau/ByEquipeAndCompetence=${enom}&${compNom}`;
        return this.http.get<Niveau[]>(url);
    }
  }
