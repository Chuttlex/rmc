import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organisme } from '../classe/organisme';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {  
  
  constructor(private http: HttpClient) { }

  create(org: Organisme): Observable<any>{
    const urlCreate = Constantes.url + 'api/infotel/createOrganisme';
    console.log(JSON.stringify(org));
    return this.http.post(urlCreate, JSON.stringify(org), httpOptions);
  }

  getById(id: number): Observable<Organisme> {
    const url = Constantes.url + `api/infotel/getOrganismeById=${id}`;
    return this.http.get<Organisme>(url);
  }

  clear(): void {
    const url = Constantes.url + `api/infotel/clearOrganismes`;
    this.http.delete(url);
  }

  getAll(): Observable<Organisme[]> {
    const url = Constantes.url + `api/infotel/getOrganismes`;
    return this.http.get<Organisme[]>(url);
  }

  delete(id: number): Observable<Organisme> {
    const url = Constantes.url + `api/infotel/deleteOrganisme=${id}`;
    return this.http.delete<Organisme>(url, httpOptions);
}

update(organisme: Organisme): Observable<any> {
    const url = Constantes.url + 'api/infotel/updateOrganisme';
    return this.http.put(url, JSON.stringify(organisme), httpOptions);
}

getByNom(nom: string): Observable<Organisme> {
    const url = Constantes.url + `api/infotel/organisme/byNom=${nom}`;
    return this.http.get<Organisme>(url);
}
}
