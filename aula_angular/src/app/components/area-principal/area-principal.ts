import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navegation } from './navegation/navegation';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-area-principal',
  imports: [Navegation, RouterOutlet, Header, Footer],
  templateUrl: './area-principal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './area-principal.css',
})
export class AreaPrincipal {
  registrar_click() {
    console.log('Você clicou');
  }
}
