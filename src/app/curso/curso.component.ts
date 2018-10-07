import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../models/icurso.curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit  {
@Input() unCurso: ICurso;

constructor() {
}

ngOnInit() {}

}
