import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Events } from './feats/events/events';
import { Usuarios } from './feats/usuarios/usuarios';
import { Marketplace } from './feats/marketplace/marketplace';
import { MediaAlunos } from './feats/media-alunos/media-alunos';
import { Login } from './feats/login/login';
import { FormularioPost } from './feats/formulario-post/formulario-post';
import { PutRequest } from './feats/put-request/put-request';
import { Delete } from './feats/delete/delete';
import { GetRequest } from './feats/get-request/get-request';
import { UsersRequest } from './feats/users-request/users-request';
import { formularioUsers } from './feats/formulario-users/formulario-users';

export const routes: Routes = [
    {path: "contatos", component:Contato},
    {path: "home", component:Home},
    {path: "eventos", component:Events},
    {path:"usuarios",component:Usuarios},
    {path:"marketplace", component:Marketplace},
    {path:"MediaAlunos", component:MediaAlunos},
    {path:"Login", component:Login},
    {path:"formularioPost", component:FormularioPost},
    {path:"PutRequest",component:PutRequest},
    {path:"deletando", component:Delete},
    {path:"getRequest", component:GetRequest},
    {path:"usersRequest", component:UsersRequest},
    {path:"formularioUsers", component:formularioUsers},
    {path:'',redirectTo:"home",pathMatch:"full"}

];
