import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Events } from './feats/events/events';

export const routes: Routes = [
    {path: "contatos", component:Contato},
    {path: "home", component:Home},
    {path: "eventos", component:Events},
    {path:'',redirectTo:"home",pathMatch:"full"}

];
