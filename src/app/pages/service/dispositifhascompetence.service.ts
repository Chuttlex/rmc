import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from 'src/app/autres/constantes';
import { Dispositifhascompetence } from '../classe/dispositifhascompetence';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DispositifhascompetenceService {

  constructor(private http: HttpClient) { }

  create(dispositifhascompetence: Dispositifhascompetence): Observable<any> {
    const url = Constantes.url + 'api/infotel/createDispositifhascompetence';
    return this.http.post(url, JSON.stringify(dispositifhascompetence), httpOptions);
}

clear(): Observable<any> {
    return this.http.delete(Constantes.url + `api/infotel/clearDispositifhascompetences`);
}

getAll(): Observable<Dispositifhascompetence[]> {
    const url = Constantes.url + `api/infotel/getDispositifhascompetences`;
    return this.http.get<Dispositifhascompetence[]>(url);
}

getById(idd: number, idc: number): Observable<Dispositifhascompetence> {
    const url = Constantes.url + `api/infotel/getDispositifhascompetenceById=${idd}&${idc}`;
    return this.http.get<Dispositifhascompetence>(url);
}

delete(id: number): Observable<Dispositifhascompetence> {
    const url = Constantes.url + `api/infotel/deleteDispositifhascompetence=${id}`;
    return this.http.delete<Dispositifhascompetence>(url, httpOptions);
}

update(Dispositifhascompetence: Dispositifhascompetence): Observable<any> {
    const url = Constantes.url + `api/infotel/updateDispositifhascompetence`;
    return this.http.put(url, JSON.stringify(Dispositifhascompetence), httpOptions);
}

getByDispositif(nom: string): Observable<Dispositifhascompetence[]> {
    const url = Constantes.url + `api/infotel/Dispositifhascompetence/ByDispositif=${nom}`;
    return this.http.get<Dispositifhascompetence[]>(url);
}

getByCompetence(nom: string): Observable<Dispositifhascompetence[]> {
  const url = Constantes.url + `api/infotel/Dispositifhascompetence/ByCompetence=${nom}`;
  return this.http.get<Dispositifhascompetence[]>(url);
}

getByDispositifAndCompetence(dnom: string, cnom: string): Observable<Dispositifhascompetence[]> {
  const url = Constantes.url + `api/infotel/Dispositifhascompetence/ByDispositifAndCompetence=${dnom}&${cnom}`;
  return this.http.get<Dispositifhascompetence[]>(url);
}
}
