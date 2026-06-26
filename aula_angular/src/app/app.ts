import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Valores } from './valores/valores';
import { EnderecoComponent } from "./endereco-component/endereco-component";
import { PessoaComponent } from "./pessoa-component/pessoa-component";
import { MercadoComponent } from "./mercado-component/mercado-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Valores, EnderecoComponent, PessoaComponent, MercadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('(●◡●)');
}
