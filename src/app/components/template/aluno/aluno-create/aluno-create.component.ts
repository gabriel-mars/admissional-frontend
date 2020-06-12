import { AlunoService } from './../../../../services/aluno.service';
import { Aluno } from './../../../../models/aluno.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  matricularAluno(): void {
    this.alunoService.matricularAluno(this.aluno).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
