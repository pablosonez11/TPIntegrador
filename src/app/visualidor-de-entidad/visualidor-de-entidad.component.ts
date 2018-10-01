import { Component, Input, OnInit } from '@angular/core';
import { IAlumno } from '../models/ialumno.alumno';
import { AlumnoComponent } from '../alumno/alumno.component';


@Component({
  selector: 'app-visualidor-de-entidad',
  templateUrl: './visualidor-de-entidad.component.html',
  styleUrls: ['./visualidor-de-entidad.component.css']
})

export class VisualidorDeEntidadComponent  {
  @Input() listadoAlumnos: Array<IAlumno>;

}


