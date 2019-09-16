import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario_login: FormGroup;

  constructor() {
    this.formulario_login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit() {
  }

  envioLogin() {
    console.log(this.formulario_login.value)
    this.registro.registro(this.formulario_registro.value)
      .then(response => {
        if (response) {
          this.router.navigate(['/gracias'])
        }
      })
      .catch(err => {
        alert('Error en el registro. Inténtalo de nuevo más tarde.');
      })
  }

}
