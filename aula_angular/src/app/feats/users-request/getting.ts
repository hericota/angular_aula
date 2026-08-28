import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PostGetResponse } from './post-get-response';

@Service()
export class Getting {
    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/users'

    readonly postsDetais = httpResource<PostGetResponse[]> (
        () => this.urlApi,
        {defaultValue: []}
    )
}
