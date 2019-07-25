import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historiqueres } from '../classe/historiqueres';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class HistoriqueresService {

    constructor( private http: HttpClient) { }

    create(hist: Historiqueres): Observable<any> {
        const url = Constantes.url + 'api/infotel/createHistoriqueres';
        return this.http.post(url, JSON.stringify(hist), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearHistoriqueres');
    }

    getAll(): Observable<Historiqueres[]> {
        const url = Constantes.url + 'api/infotel/getHistoriqueres';
        return this.http.get<Historiqueres[]>(url);
    }

    getById(id: number): Observable<Historiqueres> {
        const url = Constantes.url + `api/infotel/getHistoriqueresById=${id}`;
        return this.http.get<Historiqueres>(url);
    }

    delete(id: number): Observable<Historiqueres> {
        const url = Constantes.url + `api/infotel/deleteHistoriqueres=${id}`;
        return this.http.delete<Historiqueres>(url, httpOptions);
    }

    update(hist: Historiqueres): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateHistoriqueres';
        return this.http.put(url, JSON.stringify(hist), httpOptions);
    }

    getByRessource(nom: string, prenom: string): Observable<Historiqueres> {
        const url = Constantes.url + `api/infotel/historique/ByRessource=${nom}&${prenom}`;
        return this.http.get<Historiqueres>(url);
    }
  }
