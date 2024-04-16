import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contatto } from '../models/contatto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(environment.JSON_SERVER_BASE_URL);
  }

  getContattoById(id:string): Observable<Contatto>{
    return this.http.get<Contatto>(`${environment.JSON_SERVER_BASE_URL}/${id}`);
  }

  addContatto(contatto: Contatto): Observable<Contatto>{
    return this.http.post<Contatto>(`${environment.JSON_SERVER_BASE_URL}`, contatto)
  }

  deleteContatto(id: string): Observable<any>{
    return this.http.delete(`${environment.JSON_SERVER_BASE_URL}/${id}`);
  }
}