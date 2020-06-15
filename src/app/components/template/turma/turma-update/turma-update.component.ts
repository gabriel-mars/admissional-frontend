import { Professor } from './../../../../models/professor.model';
import { MessageService, SelectItem } from 'primeng/api';
import { ProfessorService } from './../../../../services/professor.service';
import { Aluno } from './../../../../models/aluno.model';
import { Turma } from './../../../../models/turma.model';
import { TurmaService } from './../../../../services/turma.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-update',
  templateUrl: './turma-update.component.html',
  styleUrls: ['./turma-update.component.css']
})
export class TurmaUpdateComponent implements OnInit {

  turma: Turma;
  alunos: Aluno[];

  status: Boolean;
  turmaAberta: string;

  professores: SelectItem[];
  professor: Professor;

  constructor(
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

    this.professores = [];
    this.professorService.read().subscribe(professores => {
      professores.forEach(professor => {
        this.professores.push({label: `${professor.nome}`, value: `${professor.id}`});
      });
    });
  }

  adicionarAlunos(): void {
    console.log(this.turma.id);
  }

  cancelar(): void {
    this.router.navigate(['/turma']);
  }
}
