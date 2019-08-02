import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaxtuDadosService {
    uri = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {}
    
    logar() {
        let obj = {
            usuario: 'inserir usuario aqui',
            senha: 'inserir senha aqui'
        }
        return this.httpClient.post(`${this.uri}/login`, obj, {observe: 'response', withCredentials: true}).toPromise();
    }

    obterDados() {
        return this.httpClient.get<any>(`${this.uri}/lista_te`, {observe: 'response', withCredentials: true}).toPromise();
    }
}
