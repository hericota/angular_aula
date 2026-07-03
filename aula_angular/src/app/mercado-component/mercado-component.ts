import { Component } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  selector: 'app-mercado-component',
  imports: [],
  templateUrl: './mercado-component.html',
  styleUrl: './mercado-component.css',
})
export class MercadoComponent {
  UnidadeDeBlumenau: Mercado = {
    Nome: "Unidade de blumenau",
    Vendamacas: 1000,
    precomacas: 1.20,
    vendalaranja: 700,
    precolaranja: 2
  }
  UnidadeDeJoinville: Mercado = {
    Nome: "Unidade de joinville",
    Vendamacas: 1000,
    precomacas: 1.50,
    vendalaranja: 570,
    precolaranja: 2.2
  }
  UnidadeDeFlorianopolis: Mercado = {
    Nome: "Unidade de florianopolis",
    Vendamacas: 1000,
    precomacas: 1.50,
    vendalaranja: 450,
    precolaranja: 2.5
  }
}
