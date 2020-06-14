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
    dataAbertura: '',
    dataEncerramento: ''
  }

  professores: SelectItem[];
  professor: Professor;

  constructor(
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private messageService: MessageService,
    private router: Router) {}

  ngOnInit(): void {
    this.professores = [];
    this.professorService.read().subscribe(professores => {
      professores.forEach(professor => {
        this.professores.push({label: `${professor.nome}`, value: `${professor.id}`});
      });
    });
  }

  cadastrarTurma(): void {
    this.turma.professor = this.professor;
    const id = +this.turma.professor;

    this.professorService.readById(id).subscribe((professor) => {
      this.professor = professor;
      this.turma.professor = this.professor;

      this.turmaService.cadastrarTurma(this.turma).subscribe(() => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Turma cadastrada.'})
        this.router.navigate(['/turma']);
      });
    });
  }

  cancelar(): void {
    this.router.navigate(['/turma']);
  }
}
