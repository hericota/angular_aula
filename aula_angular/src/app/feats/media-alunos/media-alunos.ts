import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media-alunos.html',
  styleUrl: './media-alunos.css',
})
export class MediaAlunos {
[x: string]: any;
   nome = signal('');
  media = signal<number | null>(null);
  alunos = signal<Aluno[]>([]);
  notaInvalida = signal(false);
  nomeInvalido = signal(false);

  cadastrar() {

    const nomeAluno = this.nome().trim();
    const mediaAluno = this.media();



    if (nomeAluno === '') {
      this.nomeInvalido.set(true)
      return;
    }
        else{
      this.nomeInvalido.set(false)
    }

    if (mediaAluno === null) {
      this.notaInvalida.set(true)
      
      return;
    }
    else{
      this.notaInvalida.set(false)
    }

    if (mediaAluno < 0 || mediaAluno > 10) {
      this.notaInvalida.set(true)
      return;
    }
        else{
      this.notaInvalida.set(false)
    }

    this.alunos.update(lista => [
      ...lista,
      {
        nome: nomeAluno,
        media: mediaAluno
      }
    ]);

    this.nome.set('');
    this.media.set(null);
  }
}
