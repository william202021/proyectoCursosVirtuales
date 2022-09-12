import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-empezar',
  templateUrl: './empezar.component.html',
  styleUrls: ['./empezar.component.css']
})
export class EmpezarComponent implements OnInit {

  curso=""




 @Output() childEvent = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSendEvent(dato: string){
    this.router.navigate(['/detalle-cursos']);
    
    //console.log(this.childEvent.emit(this.curso=dato))
    console.log(dato)
  }

}
