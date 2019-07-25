import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular//common/http';
import { Observable } from 'rxjs';
import { AutoComplete } from '../classe/autocomplete';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class AutoCompleteService {

    constructor( private http: HttpClient) { }

    create(AutoComplete: AutoComplete): Observable<any> {
        const url = Constantes.url + `api/infotel/createAutoComplete`;
        return this.http.post(url, JSON.stringify(AutoComplete), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete( Constantes.url + `api/infotel/clearAutoCompletes`);
    }

    getAll(): Observable<AutoComplete[]> {
        const url = Constantes.url + `api/infotel/getAutoCompletes`;
        return this.http.get<AutoComplete[]>(url);
    }
  }
