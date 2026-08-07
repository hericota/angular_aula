import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Users } from './users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './usuarios.css',
})
export class Usuarios {
  novoId = signal<number>(0);
  novoNome = signal<string>('');
  novoIdade = signal<number | null>(null);

  usuarios = signal<Users[]>([]);

  adicionarUsuario() {
    if (this.novoNome().trim() === '' || this.novoIdade() === null) {
      alert('Valores invalidos');
      return;
    }

    const listaAtual = this.usuarios();

    const proximoId = listaAtual.length > 0 ? listaAtual[listaAtual.length - 1].id + 1 : 1;

    const novoUsuario: Users = {
      id: proximoId,
      nome: this.novoNome(),
      idade: this.novoIdade()!,
    };

    this.usuarios.update((listaAtual) => [...listaAtual, novoUsuario]);
    this.novoId.set(proximoId);
    this.novoNome.set('');
    this.novoIdade.set(null);
  }
}
