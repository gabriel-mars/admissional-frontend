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

  matricularAluno(): void {
    this.alunoService.matricularAluno(this.aluno).subscribe(() => {
      this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Aluno cadastrado.'})

      this.aluno.nome = '';
      this.aluno.matricula = '';

      this.router.navigate(['/aluno/create']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/aluno']);
  }
}
