import { Component, OnInit } from '@angular/core';
import { LcursosService } from '../lcursos.service';
import { Input, Output } from '@angular/core'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  dato="Mensaje"
  cursos : any[] = [];

 
  constructor(private servieCursos:LcursosService) { }

  ngOnInit(): void {
     //this.cursos=this.servieCursos.getCourses()
     this.servieCursos.getCourses().subscribe(data=>this.cursos=data)
     console.log(this.cursos)
  }

  accion(item:string){
    alert(item)
  }

}
