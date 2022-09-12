import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { CursosComponent } from './cursos/cursos.component';
import { EmpezarComponent } from './empezar/empezar.component';
import { ForoComponent } from './foro/foro.component';
import { SesionComponent } from './sesion/sesion.component';
import { FooterComponent } from './footer/footer.component';
import { SingupComponent } from './singup/singup.component';
import {HttpClientModule} from  '@angular/common/http'
import { AuthService } from './service/auth.service';
import { LcursosService } from './lcursos.service';
import { InfocursoComponent } from './infocurso/infocurso.component';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';
import { DetalleCursoService } from './serviceDetalleCurso/detalle-curso.service';
import { ForoService } from './serviceForo/foro.service';
import { AuthGuard } from './auth.guard';
import { VideosCursosComponent } from './videos-cursos/videos-cursos.component';
import { GuiaEducativaComponent } from './guia/guia-educativa/guia-educativa.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    MenuComponent,
    CursosComponent,
    EmpezarComponent,
    ForoComponent,
    SesionComponent,
    FooterComponent,
    SingupComponent,
    InfocursoComponent,
    DetalleCursosComponent,
    VideosCursosComponent,
    GuiaEducativaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, LcursosService, DetalleCursoService, ForoService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
