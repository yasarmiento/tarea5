import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NapolesComponent } from './component/equipos/napoles/napoles.component';
import { InterComponent } from './component/equipos/inter/inter.component';
import { MilanComponent } from './component/equipos/milan/milan.component';
import { JuventusComponent } from './component/equipos/juventus/juventus.component';
import { AtalantaComponent } from './component/equipos/atalanta/atalanta.component';
import { InicioComponent } from './component/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NapolesComponent,
    InterComponent,
    MilanComponent,
    JuventusComponent,
    AtalantaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
