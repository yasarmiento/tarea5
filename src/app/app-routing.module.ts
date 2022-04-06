import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtalantaComponent } from './component/equipos/atalanta/atalanta.component';
import { InterComponent } from './component/equipos/inter/inter.component';
import { JuventusComponent } from './component/equipos/juventus/juventus.component';
import { MilanComponent } from './component/equipos/milan/milan.component';
import { NapolesComponent } from './component/equipos/napoles/napoles.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    component:InicioComponent
  },
  {
    path: 'Napoles',
    component:NapolesComponent
  },
  {
    path: 'Milan',
    component:MilanComponent
  },
  {
    path: 'Juventus',
    component:JuventusComponent
  },
  {
    path: 'Inter',
    component:InterComponent
  },
  {
    path: 'Atalanta',
    component:AtalantaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
