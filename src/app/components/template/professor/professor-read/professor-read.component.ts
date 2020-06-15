import { Professor } from './../../../../models/professor.model';
import { ProfessorService } from './../../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})
export class ProfessorReadComponent implements OnInit {

  professores: Professor[];

  constructor(
    private professorService: ProfessorService,
    private router: Router
    ) { }

  // Inicialização do componente necessário carregando os professores retornados pelo WebService.
  ngOnInit(): void {
    this.professorService.read().subscribe(professores => {
      this.professores = professores;
    });
  }

  // Rota para o cadastro de professores.
  createProfessor(): void {
    this.router.navigate(['/professor/create']);
  }
}
