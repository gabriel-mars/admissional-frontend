import { Professor } from './professor.model';
import { Aluno } from './aluno.model';

export interface Turma {
    id?: number
    codigo: string
    sala: string
    dataAbertura: string
    dataEncerramento: string
    professor?: Professor
    alunos?: Aluno[]
}