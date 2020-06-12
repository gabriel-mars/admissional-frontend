import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/template/views/home/home.component';
import { AlunoCrudComponent } from './components/template/views/aluno-crud/aluno-crud.component';
import { ProfessorCrudComponent } from './components/template/views/professor-crud/professor-crud.component';
import { TurmaCrudComponent } from './components/template/views/turma-crud/turma-crud.component';
import { AlunoCreateComponent } from './components/template/aluno/aluno-create/aluno-create.component';
import { AlunoReadComponent } from './components/template/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/template/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/template/aluno/aluno-delete/aluno-delete.component';
import { ProfessorDeleteComponent } from './components/template/professor/professor-delete/professor-delete.component';
import { ProfessorUpdateComponent } from './components/template/professor/professor-update/professor-update.component';
import { ProfessorReadComponent } from './components/template/professor/professor-read/professor-read.component';
import { ProfessorCreateComponent } from './components/template/professor/professor-create/professor-create.component';
import { TurmaCreateComponent } from './components/template/turma/turma-create/turma-create.component';
import { TurmaReadComponent } from './components/template/turma/turma-read/turma-read.component';
import { TurmaUpdateComponent } from './components/template/turma/turma-update/turma-update.component';
import { TurmaDeleteComponent } from './components/template/turma/turma-delete/turma-delete.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AlunoCrudComponent,
    ProfessorCrudComponent,
    TurmaCrudComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    ProfessorDeleteComponent,
    ProfessorUpdateComponent,
    ProfessorReadComponent,
    ProfessorCreateComponent,
    TurmaCreateComponent,
    TurmaReadComponent,
    TurmaUpdateComponent,
    TurmaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
