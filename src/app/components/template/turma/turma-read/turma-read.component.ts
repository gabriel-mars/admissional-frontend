import { TurmaService } from './../../../../services/turma.service';
import { Turma } from './../../../../models/turma.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma-read',
  templateUrl: './turma-read.component.html',
  styleUrls: ['./turma-read.component.css']
})
export class TurmaReadComponent implements OnInit {

  turmas: Turma[];

  constructor(
    private turmaService: TurmaService,
    private router: Router) { }

  // Inicialização do componente necessário com as turmas retornadas do WebService.
  ngOnInit(): void {
    this.turmaService.read().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

  // Rota para o cadastro de novas turmas.
  createTurma(): void {
    this.router.navigate(['/turma/create']);
  }
}
