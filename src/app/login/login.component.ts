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
    this.formulario_login = new FormGroup({})
  }

  ngOnInit() {
  }

}
