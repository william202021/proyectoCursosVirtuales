import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-cursos',
  templateUrl: './videos-cursos.component.html',
  styleUrls: ['./videos-cursos.component.css']
})
export class VideosCursosComponent implements OnInit {
pruebas:any=""
flag = false;

  constructor() { }

  ngOnInit(): void {
  }

enviar(evento:any){

 
document.getElementById("videoPrincipal")?.setAttribute("src", evento.src)

switch (evento.id){
case"video1":
this.pruebas="video pruebas 1"
break;

case"video2":
this.pruebas="video pruebas 2"
break;

case"video3":
this.pruebas="video pruebas 3"
break;

case"video4":
this.pruebas="video pruebas 4"
break;

case"video5":
this.pruebas="video pruebas 5"
break;

case"video6":
this.pruebas="video pruebas 6"
break;

case"video7":
this.pruebas="video pruebas 7"
break;

case"video8":
this.pruebas="video pruebas 8"
break;

}

 
}





  

}
