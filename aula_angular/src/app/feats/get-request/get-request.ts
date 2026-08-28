import { Component, inject } from '@angular/core';
import { Getting } from './getting';

@Component({
  selector: 'app-get-request',
  imports: [],
  templateUrl: './get-request.html',
  styleUrl: './get-request.css',
})
export class GetRequest {
  protected readonly consumoService = inject(Getting)
  recarregarPosts(){
    this.consumoService.postsDetais.reload()
  }
}
