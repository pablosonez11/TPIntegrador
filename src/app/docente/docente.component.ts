import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent  {

private _nombreDocente: string;
public get nombreDocente(): string {
  return this._nombreDocente;
}
public set nombreDocente(_nombreDocente: string) {
  this._nombreDocente = this.nombreDocente;
}


private _apellidoDocente: string;
public get apellidoDocente(): string {
  return this._apellidoDocente;
}
public set apellidoDocente(_apellidoDocente: string) {
  this._apellidoDocente = this.apellidoDocente;
}



}
