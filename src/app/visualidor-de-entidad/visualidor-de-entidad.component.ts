import { Component, Input } from '@angular/core';
import { IAlumno } from '../models/ialumno.alumno';


@Component({
  selector: 'app-visualidor-de-entidad',
  templateUrl: './visualidor-de-entidad.component.html',
  styleUrls: ['./visualidor-de-entidad.component.css']
})

export class VisualidorDeEntidadComponent  {
@Input() listaAlumnos: IAlumno;
}


