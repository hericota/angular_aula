import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  desabilitado = true;
  alternar_estado(){
    if(this.desabilitado==true){
      this.desabilitado=false
    }
    else if(this.desabilitado==false){
      this.desabilitado=true
    }
    else{
      let desabilitado=true
    }
  }
  texto: string = '';
  registrar_click(){
    alert(this.texto)
  }
  protected nota_1!: number;
  protected nota_2!: number;
  protected nota_3!: number;
  protected media!:number;
  media_nota(){
    this.media = ((Number(this.nota_1)+Number(this.nota_2)+Number(this.nota_3))/3)
    alert("sua media é "+ this.media.toFixed(2))
  }
  comidas=["batata","salsicha","bacon",]
  protected contador=0
  inclementar(){
    this.contador+=1;
  }
  resetar(){
    this.contador=0;
  }
  estado_login="deslogado"
  deslogar(){
    this.estado_login="deslogado"
  }
  logar(){
    this.estado_login="logado"
  }
  protected url_imagem:string="";
}

