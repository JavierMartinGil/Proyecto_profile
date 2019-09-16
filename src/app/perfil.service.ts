import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  baseUrl: string

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:3000/login/perfil"

  }

  obtenerPerfil(id) {
    return this.http.post(`${this.baseUrl}`, id).toPromise();
  }
}
