import { Service, signal } from '@angular/core';
import { Users } from './users';

@Service()
export class UsuariosService {
      usuarios = signal<Users[]>([]);
      adicionarUsuario(novoUsuario:Users){
        this.usuarios.update((listaAtual) => [...listaAtual, novoUsuario]);}
      
}
