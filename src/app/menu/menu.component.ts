import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { SesionComponent } from '../sesion/sesion.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

dato=localStorage.getItem("nombre")

  constructor(public authService:AuthService) { }



  ngOnInit(): void {
    
    
  }

  cerrarSesion(){
      this.authService.logout()
      
  }

 


}
