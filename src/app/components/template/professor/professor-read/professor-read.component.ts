import { Professor } from './../../../../models/professor.model';
import { ProfessorService } from './../../../../services/professor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})
export class ProfessorReadComponent implements OnInit {

  professores: Professor[];

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.professorService.read().subscribe(professores => {
      this.professores = professores;
    });
  }
}
