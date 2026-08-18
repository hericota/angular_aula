import { Injectable, signal } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class MediaAlunosService {

  alunos = signal<Aluno[]>([]);

  cadastrar(aluno: Aluno) {
    this.alunos.update(lista => [
      ...lista,
      aluno
    ]);
  }

}