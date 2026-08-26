import { Component, inject, signal } from '@angular/core';
import { Deletando } from './deletando';
import { form, required, FormField } from '@angular/forms/signals';
import { DeleteInterface } from './delete-interface';


@Component({
  selector: 'app-delete',
  imports: [FormField],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  protected readonly consumoService = inject(Deletando)

  deleteModel = signal<DeleteInterface>({
    id:null,
  });
  deleteForm = form(this.deleteModel, (s) => {
    required(s.id, { message: "Campo vazio" })
  })

  submitDelete(event: SubmitEvent) {
    event.preventDefault()

    const deletar = this.deleteModel();
    this.consumoService.cadastrarDelete(deletar).subscribe({
      next: () => {
        this.deleteModel.set({
          id:null
        });
        console.log("Você conseguiu")
        this.deleteForm().reset()
      },
      error:()=>{
        console.log("ta tudo errado")
      }
    })
  }
}


