import { AlunoService } from './../../../../services/aluno.service';
import { Aluno } from './../../../../models/aluno.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    matricula: ''
  }
  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  // Método para matricular um aluno
  matricularAluno(): void {

    // Verificação dos inputs do formulário
    // Caso estejam preenchidos, o processo continua.
    if (this.aluno.nome === '' || this.aluno.matricula === '' ||
        this.aluno.nome == null || this.aluno.matricula == null) {
          
      this.messageService.add({severity:'warn', summary: 'Atenção!', detail:'Preencha todos os campos.'})
    } else {
      
      this.alunoService.matricularAluno(this.aluno).subscribe(() => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Aluno cadastrado.'})
  
        this.aluno.nome = '';
        this.aluno.matricula = '';
  
        this.router.navigate(['/aluno/create']);
      });
    }
  }

  // Método para cancelar a matrícula e retornar para a lista de alunos.
  cancel(): void {
    this.router.navigate(['/aluno']);
  }
}
