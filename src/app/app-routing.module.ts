import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario-master/usuario/usuario.component';

import { UsuarioExtensaoComponent } from './usuario-master/usuario-extensao/usuario-extensao.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { UsuarioAcessoComponent } from './usuario-master/usuario-acesso/usuario-acesso.component';
import { PetComponent } from './pets/pet.component';
import { UsuarioCadastroComponent } from './usuario-master/usuario-cadastro/usuario-cadastro.component';
import { SigninComponent } from './homeLogin/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';

import { GraficoAdocaoComponent } from './graficos/grafico-adocao/grafico-adocao.component';
import { RelatorioPrincipalComponent } from './graficos/relatorio-principal/relatorio-principal.component';
import { GraficoAnaliseComponent } from './graficos/grafico-analise/grafico-analise.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PetAtualizarComponent } from './pets/pet-atualizar/pet-atualizar.component';
import { PetAtualizarDescComponent } from './pets/pet-atualizar-desc/pet-atualizar-desc.component';

const routes: Routes = [
  { path: '', component: SigninComponent} ,
  { path: 'home', component: HomeComponent} ,
  { path: 'home/:usuarioNome', component: HomeComponent,canActivate: [AuthGuard]} ,
  { path: 'login', component: SigninComponent},
  { path: 'cadastroUsuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  { path: 'cadastroExtensao', component: UsuarioExtensaoComponent, canActivate: [AuthGuard]},
  { path: 'pet-cadastro', component: PetComponent, canActivate: [AuthGuard]},
  { path: 'pet-atualizar', component: PetAtualizarComponent, canActivate: [AuthGuard]},
  { path: 'pet-atualizar-desc', component: PetAtualizarDescComponent, canActivate: [AuthGuard]},
  { path: 'quemSomos', component: ApresentacaoComponent, canActivate: [AuthGuard]},
  { path: 'cadastroAcesso', component: UsuarioAcessoComponent, canActivate: [AuthGuard] },
  { path: 'usuarioCadastroFunc', component: UsuarioCadastroComponent, canActivate: [AuthGuard]},
  { path: 'graficoPrincipal', component: RelatorioPrincipalComponent, canActivate: [AuthGuard]},
  { path: 'graficoAdocao', component: GraficoAdocaoComponent, canActivate: [AuthGuard]},
  { path: 'graficoAnalise', component: GraficoAnaliseComponent, canActivate: [AuthGuard]},
  { path: 'add', component: PhotoFormComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
