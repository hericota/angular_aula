import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';
import { MediaAlunosService } from './media-alunos-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media-alunos.html',
  styleUrl: './media-alunos.css',
})
export class MediaAlunos {

  nome = signal('');
  media = signal<number | null>(null);

  notaInvalida = signal(false);
  nomeInvalido = signal(false);

  constructor(public alunoService: MediaAlunosService) {}

  cadastrar() {

    const nomeAluno = this.nome().trim();
    const mediaAluno = this.media();

    if (nomeAluno === '') {
      this.nomeInvalido.set(true);
      return;
    }

    this.nomeInvalido.set(false);


    if (mediaAluno === null) {
      this.notaInvalida.set(true);
      return;
    }

    if (mediaAluno < 0 || mediaAluno > 10) {
      this.notaInvalida.set(true);
      return;
    }

    this.notaInvalida.set(false);

    const aluno: Aluno = {
      nome: nomeAluno,
      media: mediaAluno
    };


    this.alunoService.cadastrar(aluno);

    this.nome.set('');
    this.media.set(null);
  }
}