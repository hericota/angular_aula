import { Component, inject } from '@angular/core';
import { Getting } from './getting';

@Component({
  selector: 'app-users-request',
  imports: [],
  templateUrl: './users-request.html',
  styleUrl: './users-request.css',
})
export class UsersRequest {
  protected readonly consumoService = inject(Getting)
  recarregarPosts(){
    this.consumoService.postsDetais.reload()
}
}
