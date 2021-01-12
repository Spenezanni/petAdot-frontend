import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UsuarioExtensaoComponent } from './usuario-master/usuario-extensao/usuario-extensao.component';
import { UsuarioAcessoComponent } from './usuario-master/usuario-acesso/usuario-acesso.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

import { UsuarioMasterComponent } from './usuario-master/usuario-master.component';
import { AnimaisComponent } from './animais/animais.component';
import { UsuarioCadastroComponent } from './usuario-master/usuario-cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario-master/usuario/usuario.component';
import { UsuarioCadastroService } from './usuario-master/usuario-cadastro/usuario-cadastro.service';
import { HomeloginModule } from './homeLogin/homelogin.module';
import { VmessageComponent } from './shared/components/vmessage/vmessage.component';
import { AuthService } from './core/auth/auth.service';
import { SigninService } from './homeLogin/signin/signin.service';
import { AuthGuard } from './guards/auth.guard';
import { CoreModule } from './core/core.module';
import { GraficosModule } from './graficos/graficos.module';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimaisComponent,
    UsuarioExtensaoComponent,
    UsuarioAcessoComponent,
    ApresentacaoComponent,
    UsuarioCadastroComponent,
    UsuarioMasterComponent,
    UsuarioComponent,
    VmessageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeloginModule,
    CoreModule,
    GraficosModule,
    PhotosModule,
    ErrorsModule
  ],
  providers: [
    UsuarioCadastroService,
    AuthService,
    SigninService,
    AuthGuard
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
