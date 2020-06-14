import { Professor } from './professor.model';

export interface Turma {
    id?: number
    codigo: string
    sala: string
    dataAbertura: Date
    dataEncerramento: Date
    professor?: Professor
}