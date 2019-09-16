import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/registro"
  }


  registro(values) {
    return this.http.post(`${this.baseUrl}/nuevo`, values).toPromise();
  }

}

