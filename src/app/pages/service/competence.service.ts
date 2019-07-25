import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competence } from '../classe/competence';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class CompetenceService {

    constructor( private http: HttpClient) { }

    create(competence: Competence): Observable<any> {
        const url = Constantes.url + 'api/infotel/createCompetence';
        return this.http.post(url, JSON.stringify(competence), httpOptions);
    }

    createSome(competences: Competence[]): Observable<any> {
        const url = Constantes.url + 'api/infotel/createCompetences';
        return this.http.post(url, JSON.stringify(competences), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + `api/infotel/clearCompetences`);
    }

    getAll(): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/getCompetences`;
        return this.http.get<Competence[]>(url);
    }

    getById(id: number): Observable<Competence> {
        const url = Constantes.url + `api/infotel/getCompetenceById=${id}`;
        return this.http.get<Competence>(url);
    }

    delete(id: number): Observable<Competence> {
        const url = Constantes.url + `api/infotel/deleteCompetence=${id}`;
        return this.http.delete<Competence>(url, httpOptions);
    }

    update(competence: Competence): Observable<any> {
        const url = Constantes.url + `api/infotel/updateCompetence`;
        return this.http.put(url, JSON.stringify(competence), httpOptions);
    }

    getByDomaine(nom: string): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/competence/ByDomaine=${nom}`;
        return this.http.get<Competence[]>(url);
    }

    getByNom(nom: string): Observable<Competence> {
        const url = Constantes.url + `api/infotel/competence/ByNom=${nom}`;
        return this.http.get<Competence>(url);
    }

    getByEquipe(nom: string): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/competence/ByEquipe=${nom}`;
        return this.http.get<Competence[]>(url);
    }

    getByRessource(nom: string, prenom: string, enom: string): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/competence/ByRessource=${nom}&${prenom}&${enom}`;
        return this.http.get<Competence[]>(url);
    }

    getByRessourceAndNiveau(nom: string, prenom: string, equipe: string, niveau: number, orgnom: string): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/competence/ByRessourceAndNiveau=${nom}&${prenom}&${equipe}&${niveau}&${orgnom}`;
        return this.http.get<Competence[]>(url);
    }

    getByEquipeAndNiveau(nom: string, niveau: number, orgnom: string): Observable<Competence[]> {
        const url = Constantes.url + `api/infotel/competence/ByEquipeAndNiveau=${nom}&${niveau}&${orgnom}`;
        return this.http.get<Competence[]>(url);
    }
  }
