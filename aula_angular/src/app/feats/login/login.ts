import { Component, signal } from '@angular/core';
import { form, FormField } from "@angular/forms/signals";
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  clicado = signal<boolean>(false);
  logado = signal<boolean>(false);

  UsuarioModel = signal<Usuario>({
    email: "",
    senha: "",
  })
  login = form(this.UsuarioModel, (s) => {
  })

  
  cadastrar(event: Event) {
    event.preventDefault();
    this.logado.set(false);
    this.clicado.set(true)

    if (
      this.UsuarioModel().email == "henriquegdall@gmail.com" &&
      this.UsuarioModel().senha == "1234"
    ) {
      this.logado.set(true);
    }
  }
}