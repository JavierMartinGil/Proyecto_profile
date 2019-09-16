import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

  perfil: any;

  constructor(private verPerfil: PerfilService) {
    this.perfil = []
  }

  ngOnInit() {
    this.verPerfil.obtenerPerfil(localStorage.getItem('usuario'))
      .then(response => {
        console.log(response)
        this.perfil = response;

      })
      .catch(err => {
        alert('Error en el login. Inténtalo de nuevo más tarde.');
      })
  }



}
