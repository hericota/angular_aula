import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Post } from './post';

@Service()
export class ConsumoApi {
    private readonly httpClient = inject(HttpClient);
    protected readonly urlapi ="https://jsonplaceholder.typicode.com/posts"

    cadastrarPost(postCadastrado: Post){
    
    return this.httpClient.post(this.urlapi,postCadastrado)
    }
}
