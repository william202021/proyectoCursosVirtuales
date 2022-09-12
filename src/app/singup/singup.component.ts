import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singUpUser={

      name:"",
      email:"",
      password:""
 
  }

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  singUp(){
  this.auth.signUpUser(this.singUpUser)
  .subscribe(
    res=>{
      console.log(res)
      localStorage.setItem('token', res.token);
      this.router.navigate(['/detalle-cursos']);
    }, err => alert("Error al registrar usuario")
  )

  }

}
