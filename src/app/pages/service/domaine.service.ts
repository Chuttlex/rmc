import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from '../classe/domaine';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class DomaineService {

    constructor( private http: HttpClient) { }

    initialize(): Observable<any> {
        return this.http.post(Constantes.url + 'api/infotel/initialize','');
    }

    clear(): void {
        this.http.delete(Constantes.url + 'api/infotel/clearDomaines');
    }

    getAll(): Observable<Domaine[]> {
        const url = Constantes.url + `api/infotel/getDomaines`;
        return this.http.get<Domaine[]>(url);
    }

    getById(id: number): Observable<Domaine> {
        const url = Constantes.url + `api/infotel/getDomaineById=${id}`;
        return this.http.get<Domaine>(url);
    }

    getByNom(nom: string): Observable<Domaine> {
        const url = Constantes.url + `api/infotel/domaine/ByNom=${nom}`;
        return this.http.get<Domaine>(url);
    }

    update(domaine: Domaine): Observable<any> {
        const url = Constantes.url + `api/infotel/updateDomaine`;
        return this.http.put(url, JSON.stringify(domaine), httpOptions);
    }
  }
