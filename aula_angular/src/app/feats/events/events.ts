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
  registrar_click(){
    alert("clicou")
  }
  texto: string = '';

}
