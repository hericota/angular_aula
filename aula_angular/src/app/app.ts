import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AreaPrincipal } from './components/area-principal/area-principal';

@Component({
  selector: 'app-root',
  imports: [AreaPrincipal],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('(●◡●)');
}
