import { Component, Input, OnInit } from '@angular/core';
import { IAlumno } from './models/ialumno.alumno';
import { _document } from '@angular/platform-browser/src/browser';
import { IDocente } from './models/idocente.docente';
import { ICurso } from './models/icurso.curso';
import { AlumnoComponent } from './alumno/alumno.component';
import { EstadoCurso } from './estado-curso.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tpIntegrador';

  public unDocente: IDocente;
  public unCurso: ICurso;
  public unAlumno: IAlumno;

  constructor() {
    this.unAlumno = {
    nombre: 'juan',
    apellido: 'villa',
    documento: 23333333,
    legajo: 34433
    };

    this.unDocente = {
      nombreDocente: 'Charly',
      apellidoDocente: 'Gomez'
    };

    this.unCurso = {
      nombreCurso: 'Angular Cli',
      horario: '19hs-22hs',
      estadoCurso: EstadoCurso.activo
    };

  }

}

