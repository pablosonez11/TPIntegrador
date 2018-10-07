import { EstadoCurso } from '../estado-curso.enum';

export interface ICurso {
  nombreCurso: string;
  horario: string;
  estadoCurso: EstadoCurso;
}
