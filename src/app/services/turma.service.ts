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
    return this.http.post<Turma>(this.baseUrl, turma).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.baseUrl);
  }

  errorHandler(e: any): Observable<any> {
    this.messageService.add({severity:'error', summary: 'Ops', detail:'Não foi possível completar a ação.'});
    return EMPTY;
  }
}
