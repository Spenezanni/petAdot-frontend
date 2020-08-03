import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario-master/usuario/usuario.component';

import { UsuarioExtensaoComponent } from './usuario-master/usuario-extensao/usuario-extensao.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { UsuarioAcessoComponent } from './usuario-master/usuario-acesso/usuario-acesso.component';
import { AnimaisComponent } from './animais/animais.component';
import { UsuarioCadastroComponent } from './usuario-master/usuario-cadastro/usuario-cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'home', component: HomeComponent } ,
  { path: 'login', component: LoginComponent},
  { path: 'cadastroUsuario', component: UsuarioComponent},
  { path: 'cadastroExtensao', component: UsuarioExtensaoComponent},
  { path: 'cadastroAnimais', component: AnimaisComponent},
  { path: 'quemSomos', component: ApresentacaoComponent },
  { path: 'cadastroAcesso', component: UsuarioAcessoComponent },
  { path: 'usuarioCadastroFunc', component: UsuarioCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
