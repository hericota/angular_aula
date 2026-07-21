import { Component, signal } from '@angular/core';
import { AreaPrincipal } from './components/area-principal/area-principal';


@Component({
  selector: 'app-root',
  imports: [AreaPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('(●◡●)');
}
