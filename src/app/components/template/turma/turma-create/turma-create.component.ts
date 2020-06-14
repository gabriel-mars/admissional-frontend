import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ProfessorService } from './../../../../services/professor.service';
import { TurmaService } from './../../../../services/turma.service';
import { Professor } from './../../../../models/professor.model';
import { Turma } from './../../../../models/turma.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.css']
})
export class TurmaCreateComponent implements OnInit {

  turma: Turma = {
    codigo: '',
    sala: '',
    dataAbertura: new Date,
    dataEncerramento: new Date
  }

  professores: Professor [];
  professor: Professor;

  constructor(
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.professorService.read().subscribe(professores => {
      console.log(professores);
      this.professores = professores;
    });
  }

  cadastrarTurma(): void {

  }

  cancelar(): void {

  }
}
