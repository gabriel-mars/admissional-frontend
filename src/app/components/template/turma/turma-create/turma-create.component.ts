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

  // Inicialização dos componentes necessários
  ngOnInit(): void {
    this.professores = [];
    this.professorService.read().subscribe(professores => {
      professores.forEach(professor => {
        this.professores.push({label: `${professor.nome}`, value: `${professor.id}`});
      });
    });
  }

  // Método para o cadastro de uma nova turma
  cadastrarTurma(): void {
    this.turma.professor = this.professor;
    const id = +this.turma.professor;

    // Verificação dos inputs do formulário
    // Caso todos estejam preenchidos, o processo continua.
    if (this.turma.codigo === '' || this.turma.sala === '' ||
        this.turma.codigo == null || this.turma.sala == null ||
        this.turma.dataAbertura === '' || this.turma.dataEncerramento === '' ||
        this.turma.dataAbertura == null || this.turma.dataEncerramento == null) {
          
          this.messageService.add({severity:'warn', summary: 'Atenção!', detail:'Preencha todos os campos.'})
    } else {
      this.professorService.readById(id).subscribe((professor) => {
        this.professor = professor;
        this.turma.professor = this.professor;
  
        this.turmaService.cadastrarTurma(this.turma).subscribe(() => {
          this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Turma cadastrada.'})
  
          this.turma.codigo = '';
          this.turma.sala = '';
          this.turma.dataAbertura = '';
          this.turma.dataEncerramento = '';
  
          this.router.navigate(['/turma/create']);
        });
      });
    }
  }

  // Método para cancelar o cadastro retornar para a lista das turmas
  cancelar(): void {
    this.router.navigate(['/turma']);
  }
}
