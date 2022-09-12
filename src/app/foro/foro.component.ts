import { Component, OnInit } from '@angular/core';
import { ForoService } from '../serviceForo/foro.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  fechas=new Date()

  preguntasForo={
    autor:"",
    titulo:"",
    respuesta:"",
    curso:"",
    identificador:"",
    fecha:this.fechas.toLocaleDateString()


  }
  objeto={}

  foros=[]as any;

  constructor(private ForoService:ForoService) { }

  ngOnInit(): void {
    this.ForoService.getForo()
    .subscribe(
      res=>{this.foros=res},
      err=> console.log(err)
    )
    console.log(this.foros)
  }
  mostrar(){

    document.getElementById("formForo")?.setAttribute("style", "display:")
    document.getElementById("contenido")?.setAttribute("style", "display:none")
    document.getElementById("boton")?.setAttribute("style", "display:none")

  }

  envioPreguntaForo(){

    this.ForoService.envioForo(this.preguntasForo)
  .subscribe(
    res=>{
      console.log(res)
    }, err => console.log(err)
  )

  }

}
