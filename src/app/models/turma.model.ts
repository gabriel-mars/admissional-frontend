import { Professor } from './professor.model';

export interface Turma {
    id?: number
    codigo: string
    sala: string
    dataAbertura: string
    dataEncerramento: string
    professor?: Professor
}