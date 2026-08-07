import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ItensMarket } from './itens-market';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-marketplace',
  imports: [FormField],
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Marketplace {

  protected card_criado = signal(false);

  produtoModel = signal<ItensMarket>({
    titulo: '',
    descricao: '',
    preco: null,
  });

  produtoMarket = form(this.produtoModel);

  produtoCadastrado = signal<ItensMarket | null>(null);

  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault();

    // Salva os dados digitados
    this.produtoCadastrado.set({
      titulo: this.produtoMarket.titulo().value(),
      descricao: this.produtoMarket.descricao().value(),
      preco: this.produtoMarket.preco().value(),
    });

    this.card_criado.set(true);

    // Limpa o formulário
    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: null,
    });
    alert("card criado")
  }

  cardTrueOrFalse() {
    this.card_criado.set(false);
  }
}