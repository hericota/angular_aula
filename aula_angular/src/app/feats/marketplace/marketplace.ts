import { Component, signal } from '@angular/core';
import { ItensMarket } from './itens-market';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-marketplace',
  imports: [FormField],
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css',
})
export class Marketplace {
  produtoModel= signal<ItensMarket>({
    titulo: "",
    descricao:"",
    preco:null

  })
  produtoMarket=form(this.produtoModel);
}
