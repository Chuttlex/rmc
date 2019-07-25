import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regle } from '../classe/regle';
import { Constantes } from 'src/app/autres/constantes';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class RegleService {

    constructor( private http: HttpClient) { }

    create(regle: Regle): Observable<any> {
        const url = Constantes.url + 'api/infotel/createRegle';
        return this.http.post(url, JSON.stringify(regle), httpOptions);
    }

    clear(): Observable<any> {
        return this.http.delete(Constantes.url + 'api/infotel/clearRegles');
    }

    getAll(): Observable<Regle[]> {
        const url = Constantes.url + 'api/infotel/getRegles';
        return this.http.get<Regle[]>(url);
    }

    getById(id: number): Observable<Regle> {
        const url = Constantes.url + `api/infotel/getRegleById=${id}`;
        return this.http.get<Regle>(url);
    }

    delete(id: number): Observable<Regle> {
        const url = Constantes.url + `api/infotel/deleteRegle=${id}`;
        return this.http.delete<Regle>(url, httpOptions);
    }

    update(regle: Regle): Observable<any> {
        const url = Constantes.url + 'api/infotel/updateRegle';
        return this.http.put(url, JSON.stringify(regle), httpOptions);
    }

    getByEquipe(nom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipe=${nom}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetence(nom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetence=${nom}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndCompetence(enom: string, cnom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndCompetence=${enom}&${cnom}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndNiveau(cnom: string, niveau: number, orgnom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndNiveau=${cnom}&${niveau}&${orgnom}`;
        return this.http.get<Regle[]>(url);
    }

    getByDispositif(nom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByDispositif=${nom}`;
        return this.http.get<Regle[]>(url);
    }

    getByOrganisme(nom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByOrganisme=${nom}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndNiveau(enom: string, niveau: number, orgnom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndNiveau=${enom}&${niveau}&${orgnom}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndCompetenceAndNiveau(enom: string, cnom: string, niveau: number, orgnom: string): Observable<Regle> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndCompetenceAndNiveau=${enom}&${cnom}&${niveau}&${orgnom}`;
        return this.http.get<Regle>(url);
    }

    getByNiveau(niveau: number, orgnom: string): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByNiveau=${niveau}&${orgnom}`;
        return this.http.get<Regle[]>(url);
    }

    getByPourcentage(pourcentage: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByPourcentage=${pourcentage}`;
        return this.http.get<Regle[]>(url);
    }

    getByPourcentageAndNombre(pourcentage: number, nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByPourcentageAndNombre=${pourcentage}&${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndPourcentage(cnom: string, pourcentage: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndPourcentage=${cnom}&${pourcentage}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndNiveauAndPourcentage(cnom: string, niveau: number, orgnom: string, pourcentage: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndNiveauAndPourcentage=${cnom}&${niveau}&${orgnom}&${pourcentage}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndPourcentage(enom: string, pourcentage: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndPourcentage=${enom}&${pourcentage}`;
        return this.http.get<Regle[]>(url);
    }

    getByNombre(nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByNombre=${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndNombre(cnom: string, nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndNombre=${cnom}&${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndNombre(enom: string, nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndNombre=${enom}&${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndNiveauAndNombre(cnom: string, niveau: number, orgnom: string, nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndNiveauAndNombre=${cnom}&${niveau}&${orgnom}&${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndEquipeAndNombre(cnom: string, enom: string, nombre: number): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndEquipeAndNombre=${cnom}&${enom}&${nombre}`;
        return this.http.get<Regle[]>(url);
    }

    getByMoyenne(moyenne: boolean): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByMoyenne=${moyenne}`;
        return this.http.get<Regle[]>(url);
    }

    getByCompetenceAndMoyenne(cnom: string, moyenne: boolean): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByCompetenceAndMoyenne=${cnom}&${moyenne}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndMoyenne(enom: string, moyenne: boolean): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndMoyenne=${enom}&${moyenne}`;
        return this.http.get<Regle[]>(url);
    }

    getByEquipeAndCompetenceAndMoyenne(enom: string, cnom: string, moyenne: boolean): Observable<Regle[]> {
        const url = Constantes.url + `api/infotel/regle/ByEquipeAndCompetenceAndMoyenne=${enom}&${cnom}&${moyenne}`;
        return this.http.get<Regle[]>(url);
    }
  }
