import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularHg } from "./angular-hg/angular-hg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularHg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('(●◡●)');
}
