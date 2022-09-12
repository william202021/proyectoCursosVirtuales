import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "src/app/inicio/inicio.component";
import { CursosComponent } from "src/app/cursos/cursos.component";
import { EmpezarComponent } from "src/app/empezar/empezar.component";
import { ForoComponent } from "src/app/foro/foro.component";
import { SesionComponent } from "src/app/sesion/sesion.component";
import { SingupComponent } from "src/app/singup/singup.component";
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';
import { VideosCursosComponent } from './videos-cursos/videos-cursos.component';
import { GuiaEducativaComponent } from './guia/guia-educativa/guia-educativa.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  //{path: 'cursos', component: CursosComponent},
  {path: 'empezar', component: EmpezarComponent},
  {path: 'foro', component: ForoComponent,canActivate:[AuthGuard] },
  {path: 'sesion', component: SesionComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'detalle-cursos', component: DetalleCursosComponent},
  {path: 'videos-cursos', component: VideosCursosComponent},
  {path: 'guia', component: GuiaEducativaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
