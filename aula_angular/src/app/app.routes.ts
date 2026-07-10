import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';

export const routes: Routes = [
    {path: "contatos", component:Contato},
    {path: "home", component:Home},
    {path:'',redirectTo:"home",pathMatch:"full"}

];
