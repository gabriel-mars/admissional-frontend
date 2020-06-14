import { TurmaService } from './../../../../services/turma.service';
import { Turma } from './../../../../models/turma.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-read',
  templateUrl: './turma-read.component.html',
  styleUrls: ['./turma-read.component.css']
})
export class TurmaReadComponent implements OnInit {

  turmas: Turma[];

  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.turmaService.read().subscribe(turmas => {
      this.turmas = turmas;
    });
  }

}
