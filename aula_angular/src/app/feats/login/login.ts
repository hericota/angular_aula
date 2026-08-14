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
  nomeCorreto = signal<boolean>(true);
  emailCorreto = signal<boolean>(true);
  senhaCorreta = signal<boolean>(true);
  confirmaSenhaCorreta = signal<boolean>(true);


  UsuarioModel = signal<Usuario>({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
    data: "",
  })
  login = form(this.UsuarioModel, (s) => {
  })
  protected usuarios = signal<Usuario[]>([]);
  cadastrar(event: Event) {
    event.preventDefault();

    this.nomeCorreto.set(this.UsuarioModel().nome !== "");

    this.emailCorreto.set(this.UsuarioModel().email !== "");

    this.senhaCorreta.set(this.UsuarioModel().senha !== "");

    this.confirmaSenhaCorreta.set(
      this.UsuarioModel().confirmaSenha !== "" &&
      this.UsuarioModel().confirmaSenha === this.UsuarioModel().senha
    );

    if (
      this.nomeCorreto() &&
      this.emailCorreto() &&
      this.senhaCorreta() &&
      this.confirmaSenhaCorreta()
    ) {
      const usuario = this.UsuarioModel();

      this.usuarios.update(valor => [...valor, usuario]);
    }
  }



}
