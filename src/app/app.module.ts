import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';


import { UsuarioExtensaoComponent } from './usuario-master/usuario-extensao/usuario-extensao.component';
import { UsuarioAcessoComponent } from './usuario-master/usuario-acesso/usuario-acesso.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

import { UsuarioMasterComponent } from './usuario-master/usuario-master.component';
import { AnimaisComponent } from './animais/animais.component';
import { UsuarioCadastroComponent } from './usuario-master/usuario-cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario-master/usuario/usuario.component';
import { UsuarioCadastroService } from './usuario-master/usuario-cadastro/usuario-cadastro.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AnimaisComponent,
    UsuarioExtensaoComponent,
    UsuarioAcessoComponent,
    ApresentacaoComponent,
    UsuarioCadastroComponent,
    UsuarioMasterComponent, 
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [LoginService, UsuarioCadastroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
