
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  private signUrl="http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  getForo(){
   /*return this.http.post<any>(this.signUpUrl, user)*/
   return this.http.get<any>(this.signUrl + '/foro');
   
  }

  envioForo(foro:any){
    /*return this.http.post<any>(this.signUpUrl, user)*/
    return this.http.post<any>(this.signUrl + '/guardarforo', foro);
    
   }
}
