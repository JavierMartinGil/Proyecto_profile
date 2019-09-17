import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  baseUrl: string

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:3000/perfil"

  }

  obtenerPerfil(): Promise<any> {
    let token = this.getHeaders()
    return this.http.get<any>(`${this.baseUrl}`, token).toPromise();
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'token_user': localStorage.getItem('token_user')
      })
    }
  }
}

