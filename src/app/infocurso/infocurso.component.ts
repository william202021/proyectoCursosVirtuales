import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core'


@Component({
  selector: 'app-infocurso',
  templateUrl: './infocurso.component.html',
  styleUrls: ['./infocurso.component.css']
})
export class InfocursoComponent implements OnInit {


   @Input() parent:any
  constructor() { }

  ngOnInit(): void {
  }

}
