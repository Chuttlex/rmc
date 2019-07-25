import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressourcehascompetence } from '../classe/ressourcehascompetence';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class RessourcehascompetenceService {

    constructor( private http: HttpClient) { }

    create(rc: Ressourcehascompetence): Observable<any> {
        const url = Constantes.url + 'api/infotel/createRessourcehascompetence';
        return this.http.post(url, JSON.stringify(rc), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearRessourcehascompetences');
    }

    getAll(): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + 'api/infotel/getRessourcehascompetences';
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getById(idr: number, idc: number): Observable<Ressourcehascompetence> {
        const url = Constantes.url + `api/infotel/getRessourcehascompetenceById=${idr}&${idc}`;
        return this.http.get<Ressourcehascompetence>(url);
    }

    delete(idr: number, idc:number): Observable<Ressourcehascompetence> {
        const url = Constantes.url + `api/infotel/deleteRessourcehascompetence=${idr}&${idc}`;
        return this.http.delete<Ressourcehascompetence>(url, httpOptions);
    }

    update(rc: Ressourcehascompetence): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateRessourcehascompetence';
        return this.http.put(url, JSON.stringify(rc), httpOptions);
    }

    getByRessource(nom: string, prenom: string, equipe: string): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByRessource=${nom}&${prenom}&${equipe}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByCompetence(nom: string): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByCompetence=${nom}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByNiveau(niveau: number, orgnom: string): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByNiveau=${niveau}&${orgnom}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByRessourceAndCompetence(nom: string, prenom: string, equipe: string, cnom: string): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByRessourceAndCompetence=${nom}&${prenom}&${equipe}&${cnom}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByDateEvol(date: Date): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByDateEvol=${date}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByRessourceAndDateEvol(nom: string, prenom: string, equipe: string, date: Date): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByRessourceAndDateEvol=${nom}&${prenom}&${equipe}&${date}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }

    getByCompetenceAndDateEvol(nom: string, date: Date): Observable<Ressourcehascompetence[]> {
        const url = Constantes.url + `api/infotel/ressourcehascompetence/ByCompetenceAndDateEvol=${nom}&${date}`;
        return this.http.get<Ressourcehascompetence[]>(url);
    }
  }
