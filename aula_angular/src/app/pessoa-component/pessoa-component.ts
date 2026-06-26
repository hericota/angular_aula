import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa-component',
  imports: [],
  templateUrl: './pessoa-component.html',
  styleUrl: './pessoa-component.css',
})
export class PessoaComponent {
  pessoa1: Pessoa={
    nome: "henrique",
    sexo:"masculino",
    data_nascimento:"17/12/2009",
    estado_civil:"solteiro"
  }
  pessoa2: Pessoa={
    nome: "henricao",
    sexo:"masculinao",
    data_nascimento:"1/1/1860",
    estado_civil:"solteirão"
  }
}
