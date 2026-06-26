import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Valores } from './valores/valores';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Valores],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('(●◡●)');
}
