import { Component, inject } from '@angular/core';
import { Post } from './post';
import { signal } from '@angular/core';
import { form, FormField, required } from "@angular/forms/signals";
import { ConsumoApi } from './consumo-api';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-formulario-post',
  imports: [FormField],
  templateUrl: './formulario-post.html',
  styleUrl: './formulario-post.css',
})
export class FormularioPost {
  protected readonly consumoService = inject(ConsumoApi)

  postModel = signal<Post>({
    userId: null,
    title: '',
    body: '',
  });
  postForm = form(this.postModel, (s) => {
    required(s.title, { message: "Campo vazio" })
    required(s.body, { message: "Campo vazio" })
    required(s.userId, { message: "Campo vazio" })
  })

  submitPost(event: SubmitEvent) {
    event.preventDefault()

    const post = this.postModel();
    this.consumoService.cadastrarPost(post).subscribe({
      next: () => {

        this.postModel.set({
          userId: null,
          title: '',
          body: '',
        });
        this.postForm().reset()
      },
      error:()=>{
        console.log("ta tudo errado")
      }
    })
  }
}
