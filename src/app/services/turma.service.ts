import { map, catchError } from 'rxjs/operators';
import { Turma } from './../models/turma.model';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  baseUrl = "http://localhost:8080/turma";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  cadastrarTurma(turma: Turma): Observable<Turma> {
    turma.dataAbertura = new Date(turma.dataAbertura).toLocaleDateString('pt-BR');
    turma.dataEncerramento = new Date(turma.dataEncerramento).toLocaleDateString('pt-BR');
    
    console.log(turma);

    return this.http.post<Turma>(this.baseUrl, turma).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.baseUrl);
  }

  readById(id: number): Observable<Turma>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Turma>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  checkStatus(id: number): Observable<Boolean>{
    const url = `${this.baseUrl}/status/${id}`;

    return this.http.get<Boolean>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.messageService.add({severity:'error', summary: 'Ops', detail:'Não foi possível completar a ação.'});
    return EMPTY;
  }
}
