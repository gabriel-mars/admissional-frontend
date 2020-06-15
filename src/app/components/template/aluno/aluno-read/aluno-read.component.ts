import { AlunoService } from './../../../../services/aluno.service';
import { Aluno } from './../../../../models/aluno.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[];

  constructor(
    private alunoService: AlunoService,
    private router: Router
    ) { }

  // Inicialização do componente necessário carregando os alunos retornados pelo WebService.
  ngOnInit(): void {
    this.alunoService.read().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  // Rota de navegação para matricular um aluno.
  matricularAluno(): void {
    this.router.navigate(['/aluno/create']);
  }
}
