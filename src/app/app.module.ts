import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { CursoComponent } from './curso/curso.component';
import { VisualidorDeEntidadComponent } from './visualidor-de-entidad/visualidor-de-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent,
    CursoComponent,
    VisualidorDeEntidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
