import { Component, Input } from '@angular/core';
import { IAlumno } from './models/ialumno.alumno';
import { _document } from '@angular/platform-browser/src/browser';
import { IDocente } from './models/idocente.docente';
import { Icurso } from './models/icurso.curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpIntegrador';

  constructor(

  ) {}
  unAlumno: IAlumno = {
    nombre: 'juan',
    apellido: 'villa',
    documento: 23333333,
    legajo: 34433
  };

  unDocente: IDocente = {
    nombreDocente: 'Charly',
    apellidoDocente: 'Gomez'
  };

  unCurso: Icurso = {
    nombreCurso: 'Angular Cli',
    horario: '19hs-22hs'
  };


}

