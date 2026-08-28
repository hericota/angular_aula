import { Component, inject } from '@angular/core';
import { Post } from './post';
import { signal } from '@angular/core';
import { form, FormField, required } from "@angular/forms/signals";
import { ConsumoApi } from './consumo-api';

@Component({
  selector: 'app-formulario-post',
  imports: [FormField],
  templateUrl: './formulario-users.html',
  styleUrl: './formulario-users.css',
})
export class formularioUsers {
  protected readonly consumoService = inject(ConsumoApi)

  postModel = signal<Post>({
    name: '',
    username: '',
    email:'',
    phone:''
  });
  postForm = form(this.postModel, (s) => {
    required(s.name, { message: "Campo vazio" })
    required(s.username, { message: "Campo vazio" })
    required(s.email, { message: "Campo vazio" })
    required(s.phone, { message: "Campo vazio" })
  })

  submitPost(event: SubmitEvent) {
    event.preventDefault()

    const post = this.postModel();
    this.consumoService.cadastrarPost(post).subscribe({
      next: (response) => {
        alert("Nome:"+response.name+"\n username:"+response.username+"\n  email:"+response.email+"\n telefone:"+response.username)


        this.postModel.set({
          name: '',
          username: '',
          email:'',
          phone:''
        });

        this.postForm().reset()
      },
      error:()=>{
        console.log("ta tudo errado")
      }
    })
  }
}
