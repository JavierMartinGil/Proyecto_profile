import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  baseUrl: string

  constructor(private http: HttpClient, private router: Router) {

    this.baseUrl = "http://localhost:3000/perfil"

  }

  obtenerPerfil() {
    let token = this.getHeaders()
    return this.http.get(`${this.baseUrl}`, token).toPromise();
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'token_user': localStorage.getItem('token_user')
      })
    }
  }

  logout() {
    localStorage.removeItem('token_user');
    this.router.navigate(['/login'])
  }

  isUserLogged() {
    if (localStorage.getItem('token_user')) {
      return true;
    } else {
      return false;
    }
  }
}

