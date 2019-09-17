import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/login"
  }

  loguear(values) {
    return this.http.post(`${this.baseUrl}`, values).toPromise();
  }
}
