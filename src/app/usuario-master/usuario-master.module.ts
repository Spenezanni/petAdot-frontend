import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioExtensaoComponent } from './usuario-extensao/usuario-extensao.component';
import { UsuarioAcessoComponent } from './usuario-acesso/usuario-acesso.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioExtensaoComponent,
    UsuarioAcessoComponent,
    UsuarioCadastroComponent,
    UsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioMasterModule { }
