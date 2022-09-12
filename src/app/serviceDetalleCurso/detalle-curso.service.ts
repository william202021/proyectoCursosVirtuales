
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetallecourse } from '../detalledelosCursos';

@Injectable({
  providedIn: 'root'
})
export class DetalleCursoService {

  /*url:string="assets/data/detallecurso.json"
  constructor(private http:HttpClient) { }
  getDetalleCourses(): Observable<IDetallecourse[]>{

    return this.http.get<IDetallecourse[]>(this.url)
   
  }*/



  private signUrl="http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  getCurso(dato:any){
   /*return this.http.post<any>(this.signUpUrl, user)*/
   return this.http.post<any>(this.signUrl + '/curso-detalle', dato);
   
  }

}
