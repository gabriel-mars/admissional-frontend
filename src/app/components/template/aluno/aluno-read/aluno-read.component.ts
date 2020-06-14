import { AlunoService } from './../../../../services/aluno.service';
import { Aluno } from './../../../../models/aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.read().subscribe(alunos => {
      this.alunos = alunos;
    });
  }
}
