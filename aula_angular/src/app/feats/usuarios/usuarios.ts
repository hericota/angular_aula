import { Component, signal } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
users() {
throw new Error('Method not implemented.');
}
  usuarios = signal<Users[]>([
    {
      id:1,
      nome:"henrique",
      idade:70
    },
    {
      id:2,
      nome:"henricão",
      idade:100
    }
  ]
  );
}
