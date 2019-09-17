import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario_login: FormGroup;
  arrUser: any;

  constructor(private login: LoginService, private router: Router) {

    this.arrUser = []

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
    this.login.loguear(this.formulario_login.value)
      .then(response => {
        if (response['token_user'] == null) {
          alert('Nombre de usuario o contraseña incorrecta')
        } else {
          this.arrUser = response
          localStorage.setItem('token_user', response['token_user'])
          this.router.navigate(['/perfil'])
        }

      })
      .catch(err => {
        alert('Error en el login. Inténtalo de nuevo más tarde.');
      })
  }

}
