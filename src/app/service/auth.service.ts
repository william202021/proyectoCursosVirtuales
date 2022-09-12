import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*private signUpUrl="http://localhost:3003/api/user"
  private loginUrl="http://localhost:3003/api/auth"*/

  private signUrl="http://localhost:3000/api"

  constructor(private http:HttpClient, private router:Router) { }

  signUpUser(user: any){
   /*return this.http.post<any>(this.signUpUrl, user)*/
   return this.http.post<any>(this.signUrl + '/signup', user);
   
  }

  signIn(user: any){
    /*return this.http.post<any>(this.signUpUrl, user)*/
    return this.http.post<any>(this.signUrl + '/signin', user);
    
   }

   loggedIn(){

    return !!localStorage.getItem('token');
   }

   logout(){
     localStorage.removeItem("token");
     localStorage.removeItem("nombre")
     this.router.navigate(['/sesion'])
   }
}
