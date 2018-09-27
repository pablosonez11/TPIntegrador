import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent  {


  private _nombreCurso: string;
  public get nombreCurso(): string {
    return this._nombreCurso;
  }
  public set nombreCurso(_nombreCurso: string) {
    this._nombreCurso = this.nombreCurso;
  }


  private _horario: string;
  public get horario(): string {
    return this._horario;
  }
  public set horario(_horario: string) {
    this._horario = this.horario ;
  }


}
