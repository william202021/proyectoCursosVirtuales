import { Component, Input, OnInit } from '@angular/core';
import { DetalleCursoService } from '../serviceDetalleCurso/detalle-curso.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {


  
  /*detalleCursos : any[] = [];*/

//message=""
//detalleCursos=[] as any;

detalleCursos=[]as any;
  constructor(private DetalleCursoService:DetalleCursoService) { }

  ngOnInit(): void {

  }
  onSendEvent(datos: any){
    //this.DetalleCursoService.getDetalleCourses().subscribe(data=>this.detalleCursos=data)
    let objeto={
      nombre:datos
    }
    this.DetalleCursoService.getCurso(objeto)
    .subscribe(
      res=>{this.detalleCursos=res},
      err=> console.log(err)
    )

    console.log(this.detalleCursos)
   
    document.getElementById("detalles")?.setAttribute("style", "display:")
    document.getElementById("Principal")?.setAttribute("style", "display:none")
    //console.log(this.childEvent.emit(this.curso=dato))
    console.log(datos)
  }

  /*accion(item:any){

    alert(item)
  }*/

}
