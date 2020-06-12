import { ProfessorCrudComponent } from './components/template/views/professor-crud/professor-crud.component';
import { ProfessorCreateComponent } from './components/template/professor/professor-create/professor-create.component';
import { AlunoCreateComponent } from './components/template/aluno/aluno-create/aluno-create.component';
import { AlunoCrudComponent } from './components/template/views/aluno-crud/aluno-crud.component';
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
    component: AlunoCrudComponent
  },
  {
    path: "aluno/create",
    component: AlunoCreateComponent
  },
  {
    path: "professor",
    component: ProfessorCrudComponent
  },
  {
    path: "professor/create",
    component: ProfessorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
