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

  // Método para o cadastro de professor
  cadastrarProfessor(): void {

    // Verificação dos inputs do formulário.
    // Caso todos estejam preenchidos, o processo continua.
    if (this.professor.nome === '' || this.professor.titulacao === '' ||
        this.professor.nome == null || this.professor.titulacao == null) {
          
          this.messageService.add({severity:'warn', summary: 'Atenção!', detail:'Preencha todos os campos.'})
    } else {
      this.professorService.cadastrarProfessor(this.professor).subscribe(() => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Professor cadastrado.'})
  
        this.professor.nome = '';
        this.professor.titulacao = '';
  
        this.router.navigate(['/professor/create']);
      });
    }
  }

  // Método para cancelar o cadastro e retorna para a lista de professores.
  cancelar(): void{
    this.router.navigate(['/professor']);
  }

}
