import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete } from '../models/juguete.interface';
import { Juguetes } from '../models/juguetes.interface';
 
@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  constructor(private http:HttpClient) { }


  getAllJuguetes(): Observable<Juguetes> {
    return this.http.get<Juguetes>('/juguetes/');
  }

  getJugueteById(id: string): Observable<Juguete> {
    return this.http.get<Juguete>('/juguete/' + id );
  }

}
