import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { Users } from './users';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios-service';

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

  protected readonly usuarioService= inject(UsuariosService)

  indice= 1

  adicionarUsuario() {
    if (this.novoNome().trim() === '' || this.novoIdade() === null) {
      alert('Valores invalidos');
      return;
    }




    const novoUsuario: Users = {
      id: this.indice,
      nome: this.novoNome(),
      idade: this.novoIdade()!,
    };

    this.usuarioService.adicionarUsuario(novoUsuario)
    this.indice++ 
  }
}
