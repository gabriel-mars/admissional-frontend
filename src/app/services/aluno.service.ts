import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = "http://localhost:8080/alunos";

  constructor(private http: HttpClient) { }

  matricularAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno).pipe(
      map((obj) => obj)
    );
  }
}
