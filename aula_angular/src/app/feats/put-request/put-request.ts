import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from "@angular/forms/signals";
import { Put } from './put';
import { Putting } from './putting';

@Component({
  selector: 'app-put-request',
  imports: [FormField],
  templateUrl: './put-request.html',
  styleUrl: './put-request.css',
})
export class PutRequest {
    protected readonly consumoService = inject(Putting)

  putModel = signal<Put>({
    id:null,
    userId: null,
    title: '',
    body: '',
  });
  putForm = form(this.putModel, (s) => {
    required(s.title, { message: "Campo vazio" })
    required(s.body, { message: "Campo vazio" })
    required(s.userId, { message: "Campo vazio" })
  })

  submitPut(event: SubmitEvent) {
    event.preventDefault()

    const put = this.putModel();
    this.consumoService.cadastrarPut(put).subscribe({
      next: (response) => {
        alert("O Id atualizado é "+response.id + ", O userId é "+ response.userId+ ", o Titulo é = "+ response.title + ", o body é " + response.body)
        this.putModel.set({
          id:null,
          userId: null,
          title: '',
          body: '',
        });
        console.log("Você conseguiu")
        this.putForm().reset()
      },
      error:()=>{
        console.log("ta tudo errado")
      }
    })
  }
}

