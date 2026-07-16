import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Navegation } from './components/area-principal/navegation/navegation';
import { AreaPrincipal } from './components/area-principal/area-principal';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLinkWithHref, Header, Footer,Navegation,AreaPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('(●◡●)');
}
