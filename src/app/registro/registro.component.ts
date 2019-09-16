import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form_registro: FormGroup;
  resultado: string;

  constructor(private registrar: RegistroService) {

    this.resultado = '';

    this.form_registro = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit() {
  }

  envioRegistro() {
    console.log(this.form_registro.value)
    this.registrar.registro(this.form_registro.value)
      .then(response => {
        console.log('Agregado correctamente')
        this.form_registro.reset();
        this.resultado = 'Usuario añadido correctamente'
      })
      .catch(err => {
        alert('Error en el registro. Inténtalo de nuevo más tarde.');
      })
  }

}
