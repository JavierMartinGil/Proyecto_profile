import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PerfilService } from './perfil.service'

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard implements CanActivate {

  constructor(private perfilService: PerfilService) { }
  canActivate() {
    return this.perfilService.isUserLogged();
  }
}
