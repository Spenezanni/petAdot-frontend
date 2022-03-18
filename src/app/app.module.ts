import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioCadastroService } from './usuario-master/usuario-cadastro/usuario-cadastro.service';
import { HomeloginModule } from './homeLogin/homelogin.module';
import { AuthService } from './core/auth/auth.service';
import { SigninService } from './homeLogin/signin/signin.service';
import { AuthGuard } from './guards/auth.guard';
import { CoreModule } from './core/core.module';
import { GraficosModule } from './graficos/graficos.module';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { UsuarioMasterModule } from './usuario-master/usuario-master.module';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PetsModule } from './pets/pets.module';
import { PortalModule } from './portais/portal.module';
import { EnderecoFuncComponent } from './user-func/endereco-func/endereco-func.component';
import { UserModule } from './user-adot/user.module';
import { UserFuncModule } from './user-func/user-func.module';


@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeloginModule,
    UsuarioMasterModule,
    PetsModule,
    CoreModule,
    GraficosModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    PortalModule,
    UserModule,
    UserFuncModule
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
