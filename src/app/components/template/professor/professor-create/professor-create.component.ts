import { ProfessorService } from './../../../../services/professor.service';
import { Router } from '@angular/router';
import { Professor } from './../../../../models/professor.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor: Professor = {
    nome: '',
    titulacao: ''
  }

  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  cadastrarProfessor(): void {
    this.professorService.cadastrarProfessor(this.professor).subscribe(() => {
      this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Professor cadastrado.'})
      this.router.navigate(['/professor/create']);
    });
  }

  cancelar(): void{
    this.router.navigate(['']);
  }

}
