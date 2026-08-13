import { Component, signal } from '@angular/core';
import { FormField } from "@angular/forms/signals";
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  UsuarioModel = signal<Usuario>(
  nome: "",
  email: "",
  senha: "",
  data: string )
}
