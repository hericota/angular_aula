import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  desabilitado = signal(true);
  alternar_estado() {
    if (this.desabilitado()) {
      this.desabilitado.update(current => false);
    }
    else if (this.desabilitado() == false) {
      this.desabilitado.update(current=>true)
    }
    else {
      let desabilitado = true
    }
  }

  
  protected texto: string = '';
  registrar_click() {
    alert(this.texto)
  }
  protected nota_1= signal(0);
  protected nota_2= signal(0);
  protected nota_3= signal(0);
  protected media= signal(0);
  media_nota() {
    this.media.update(current => (Number(this.nota_1()) + Number(this.nota_2()) + Number(this.nota_3())) / 3)
    alert("sua media é " + this.media().toFixed(2))
  }
  comidas = signal(["batata", "salsicha", "bacon",]);
  protected contador = signal(0);
  protected fator_soma = signal(1);
  inclementar() {
    this.contador.update(current => current + this.fator_soma());
  }
  resetar() {
    this.contador.update(current => current = 0);
  }
  estado_login = signal("deslogado");
  deslogar() {
    this.estado_login.update(current=>"deslogado");
  }
  logar() {
    this.estado_login.update(current=>"logado");
  }
  protected url_imagem= signal("");
}

