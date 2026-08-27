import { inject, Service } from '@angular/core';
import { Put } from './put';
import { HttpClient } from '@angular/common/http';

@Service()
export class Putting {
    private readonly httpClient = inject(HttpClient);
    protected readonly urlapi ="https://jsonplaceholder.typicode.com/posts///";

    cadastrarPut(putCadastrado: Put){
    
        return this.httpClient.put<Put>(`${this.urlapi}/${putCadastrado.id}`,putCadastrado)
    }
}
