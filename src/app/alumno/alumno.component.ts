import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent  {

  private _nombre: string;
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(_nombre: string) {
    this._nombre = this.nombre;
  }


  private _apellido: string;
  public get apellido(): string {
    return this._apellido;
  }
  public set apellido(_apellido: string) {
    this._apellido = this.apellido;
  }


  private _documento: number;
  public get documento(): number {
    return this._documento;
  }
  public set documento(_documento: number) {
    this._documento = this.documento;
  }

  private _legajo: number;
  public get legajo(): number {
    return this._legajo;
  }
  public set legajo(_legajo: number) {
    this._legajo = this.legajo;
  }


  constructor() {
     }

}
