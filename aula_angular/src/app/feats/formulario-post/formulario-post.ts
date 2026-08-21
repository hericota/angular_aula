import { Component } from '@angular/core';
import { Post } from './post';
import{signal} from '@angular/core';
import { form, FormField, required } from "@angular/forms/signals";

@Component({
  selector: 'app-formulario-post',
  imports: [FormField],
  templateUrl: './formulario-post.html',
  styleUrl: './formulario-post.css',
})
export class FormularioPost {
  postModel = signal<Post>({
    userId: 0,
    title: '',
    body: '',
  });
  postForm= form(this.postModel, (s)=>{
    required(s.title,{message:"Campo vazio"})
    required(s.body, {message:"Campo vazio"})
    required(s.userId, {message:"Campo vazio"})
  })

  submitPost() {

  }
}
