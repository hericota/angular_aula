import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ItensMarket } from './itens-market';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-marketplace',
  imports: [FormField],
  templateUrl: './marketplace.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './marketplace.css',
})
export class Marketplace {
  protected novo_titulo = signal("");
  protected nova_descricao = signal("");
  protected novo_preco = signal(0);
  produtoModel = signal<ItensMarket>({
    titulo: '',
    descricao: '',
    preco: null,
  });
  protected card_criado = signal(false)
  produtoMarket = form(this.produtoModel);
  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault()
    this.card_criado.update((current)=>(true))
  }
  cardTrueOrFalse(){
    this.card_criado.update((current)=>(false))
  }

}
