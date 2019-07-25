import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular//common/http';
import { Observable } from 'rxjs';
import { Dispositif } from '../classe/dispositif';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class DispositifService {

    constructor( private http: HttpClient) { }

    create(dispositif: Dispositif): Observable<any> {
        const url = Constantes.url + `api/infotel/createDispositif`;
        return this.http.post(url, JSON.stringify(dispositif), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete( Constantes.url + `api/infotel/clearDispositifs`);
    }

    getAll(): Observable<Dispositif[]> {
        const url = Constantes.url + `api/infotel/getDispositifs`;
        return this.http.get<Dispositif[]>(url);
    }

    getById(id: number): Observable<Dispositif> {
        const url = Constantes.url + `api/infotel/getDispositifById=${id}`;
        return this.http.get<Dispositif>(url);
    }

    delete(id: number): Observable<Dispositif> {
        const url = Constantes.url + `api/infotel/deleteDispositif=${id}`;
        return this.http.delete<Dispositif>(url, httpOptions);
    }

    update(dispositif: Dispositif): Observable<any> {
        const url = Constantes.url + `api/infotel/updateDispositif`;
        return this.http.put(url, JSON.stringify(dispositif), httpOptions);
    }

    getByNom(nom: string): Observable<Dispositif> {
        const url = Constantes.url + `api/infotel/dispositif/ByNom=${nom}`;
        return this.http.get<Dispositif>(url);
    }
  }
