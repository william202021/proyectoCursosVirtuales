import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourse } from './cursos';

@Injectable({
  providedIn: 'root'
})
export class LcursosService {


  url:string="assets/data/cursos.json"
  constructor(private http:HttpClient) { }
  getCourses(): Observable<Icourse[]>{

    return this.http.get<Icourse[]>(this.url)
   
  }
}
