import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(
    private http: HttpClient,
  ) { }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPaisPorCapital(termino:string): Observable<Pais[]>{
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }
  
  buscarPaisPorCodigo(codigo: string): Observable<Pais> {
    const url = `${this.apiURL}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }
}
