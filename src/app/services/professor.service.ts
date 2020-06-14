import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Professor } from './../models/professor.model';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl = "http://localhost:8080/professor";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  cadastrarProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.baseUrl, professor).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.baseUrl);
  }

  errorHandler(e: any): Observable<any> {
    this.messageService.add({severity:'error', summary: 'Ops', detail:'Não foi possível completar a ação.'});
    return EMPTY;
  }
}
