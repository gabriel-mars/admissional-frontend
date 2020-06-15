import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlunoService } from './../../../../services/aluno.service';
import { TurmaService } from './../../../../services/turma.service';
import { Professor } from './../../../../models/professor.model';
import { Aluno } from './../../../../models/aluno.model';
import { Turma } from './../../../../models/turma.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-read-alunos',
  templateUrl: './turma-read-alunos.component.html',
  styleUrls: ['./turma-read-alunos.component.css']
})
export class TurmaReadAlunosComponent implements OnInit {

  turma: Turma;

  alunos: Aluno[];
  selectedAlunos: Aluno[];

  status: Boolean;
  turmaAberta: string;

  professor: Professor;

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this.turmaService.readById(id).subscribe((turma) => {
      this.turma = turma;
      this.professor = turma.professor;
    });

    this.turmaService.checkStatus(id).subscribe(status => {
      this.status = status;

      if(this.status == true){
        this.turmaAberta = "Aberta";
      } else {
        this.turmaAberta = "Fechada";
      }
    });

    this.alunoService.readByTurma(id).subscribe(alunos => {
      this.alunos = alunos;
      console.log(alunos);
    });
  }

  cancelar(): void {
    this.router.navigate(['/turma']);
  }
}
