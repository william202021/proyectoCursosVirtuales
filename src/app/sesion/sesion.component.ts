import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  dato=""

  sesionUser={
    email:"",
    password:""

  }

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  upSession(){
   
    if(this.sesionUser.email=="" || this.sesionUser.password==""){

      alert("Campos vacíos")
    }else{
        this.authService.signIn(this.sesionUser)
        .subscribe(
          res=>{
            console.log(res)
            localStorage.setItem('nombre', res.nombre.name)
            console.log(this.dato)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/detalle-cursos']);
      
          },
          err=>alert("Revise los datos que está ingresando.")

        )


    console.log(this.sesionUser)
    }
    
  }

}
