import { Component } from '@angular/core';
import { Endereco } from './i-endereco';

@Component({
  selector: 'app-endereco-component',
  imports: [],
  templateUrl: './endereco-component.html',
  styleUrl: './endereco-component.css',
})
export class EnderecoComponent {
  senai: Endereco = {
    cep: "89030000",
    estado: "Santa catarina",
    cidade: "blumenau",
    bairro:"victor konder",
    rua:"São paulo",
    numero: "100"

  }
}
