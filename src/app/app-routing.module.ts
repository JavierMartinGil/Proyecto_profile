import { NgModule } from '@angular/core';
import { PerfilGuard } from './perfil.guard';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilusuarioComponent, canActivate: [PerfilGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
