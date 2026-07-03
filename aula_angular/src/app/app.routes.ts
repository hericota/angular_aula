import { HOST_TAG_NAME } from '@angular/core';
import { Routes } from '@angular/router';
import { MercadoComponent } from './mercado-component/mercado-component';
import { PessoaComponent } from './pessoa-component/pessoa-component';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';

export const routes: Routes = [
    {path: "mercado", component:MercadoComponent},
    {path: "pessoas", component:PessoaComponent},
    {path: "contatos", component:Contato},
    {path: "home", component:Home},
    {path:'',redirectTo:"home",pathMatch:"full"}
];
