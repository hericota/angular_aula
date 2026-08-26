import { Component } from '@angular/core';
import { FormularioPost } from "../formulario-post/formulario-post";
import { PutRequest } from "../put-request/put-request";
import { Delete } from "../delete/delete";

@Component({
  selector: 'app-consumo-api',
  imports: [FormularioPost, PutRequest, Delete],
  templateUrl: './consumo-api.html',
  styleUrl: './consumo-api.css',
})
export class ConsumoApi {}
