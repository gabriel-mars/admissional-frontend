import { TurmaReadAlunosComponent } from './components/template/turma/turma-read-alunos/turma-read-alunos.component';
import { TurmaUpdateComponent } from './components/template/turma/turma-update/turma-update.component';
import { TurmaReadComponent } from './components/template/turma/turma-read/turma-read.component';
import { TurmaCreateComponent } from './components/template/turma/turma-create/turma-create.component';
import { ProfessorReadComponent } from './components/template/professor/professor-read/professor-read.component';
import { AlunoReadComponent } from './components/template/aluno/aluno-read/aluno-read.component';
import { ProfessorCreateComponent } from './components/template/professor/professor-create/professor-create.component';
import { AlunoCreateComponent } from './components/template/aluno/aluno-create/aluno-create.component';
import { HomeComponent } from './components/template/views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "aluno",
    component: AlunoReadComponent
  },
  {
    path: "aluno/create",
    component: AlunoCreateComponent
  },
  {
    path: "professor",
    component: ProfessorReadComponent
  },
  {
    path: "professor/create",
    component: ProfessorCreateComponent
  },
  {
    path: 'turma',
    component: TurmaReadComponent
  },
  {
    path: "turma/create",
    component: TurmaCreateComponent
  },
  {
    path: "turma/alunos/:id",
    component: TurmaUpdateComponent
  }
  ,
  {
    path: "turma/alunos/listar/:id",
    component: TurmaReadAlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
