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

import { GraficoAdocaoComponent } from './graficos/grafico-adocao/grafico-adocao.component';
import { RelatorioPrincipalComponent } from './graficos/relatorio-principal/relatorio-principal.component';
import { GraficoAnaliseComponent } from './graficos/grafico-analise/grafico-analise.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PetAtualizarComponent } from './pets/pet-atualizar/pet-atualizar.component';
import { PetAtualizarDescComponent } from './pets/pet-atualizar-desc/pet-atualizar-desc.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { UserComponent } from './user-adot/user/user.component';
import { UserAdotComponent } from './user-adot/user-adot/user-adot.component';
import { PortalComponent } from './portais/portal/portal.component';
import { EnderecoComponent } from './user-adot/endereco-user-adot/endereco.component';
import { UserFuncComponent } from './user-func/user-func/user-func.component';
import { PetTableComponent } from './pets/pet-table/pet-table.component';
import { PetUnicComponent } from './pets/pet-unic/pet-unic.component';
import { PetDoacaoComponent } from './pets/pet-doacao/pet-doacao.component';
import { LoginFakeComponent } from './pets/pet-doacao/login-fake/login-fake.component';
import { PetUnic2Component } from './photos/pet-unic2/pet-unic2.component';
import { LoginComponent } from './login/login.component';
import { AdotTableComponent } from './user-adot/adot-table/adot-table.component';


const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'home', component: HomeComponent } ,
  { path: 'home/:usuarioNome', component: HomeComponent } ,
  { path: 'login', component: SigninComponent },
  { path: 'login-fake', component: LoginFakeComponent },
  { path: 'login-loiane', component: LoginComponent },
  { path: 'cadastroUsuario', component: UsuarioComponent, },
  { path: 'cadastroExtensao', component: UsuarioExtensaoComponent },
  { path: 'pet-cadastro', component: PetComponent },
  { path: 'pet-atualizar', component: PetAtualizarComponent },
  { path: 'pet-atualizar-desc', component: PetAtualizarDescComponent },
  { path: 'pet-lista', component: PhotoListComponent },
  { path: 'doacao-pet', component: PetDoacaoComponent },

  { path: 'quemSomos', component: ApresentacaoComponent }, 
  { path: 'cadastroAcesso', component: UsuarioAcessoComponent },
  { path: 'usuarioCadastroFunc', component: UsuarioCadastroComponent },
  { path: 'graficoPrincipal', component: RelatorioPrincipalComponent },
  { path: 'graficoAdocao', component: GraficoAdocaoComponent },

  { path: 'portal', component: PortalComponent },

  { path: 'user', component: UserComponent },

  { path: 'user-adot', component: UserAdotComponent },
  { path: 'endereco', component: EnderecoComponent },

  { path: 'user-func', component: UserFuncComponent },
  { path: 'endereco-func', component: EnderecoComponent },
  { path: 'user-func-comp', component: UserFuncComponent },
  { path: 'pet-table', component: PetTableComponent },
  { path: 'user-table', component: AdotTableComponent },
  { path: 'graficoAnalise', component: GraficoAnaliseComponent },
  { path: 'add', component: PhotoFormComponent },

  {path: 'pet-table/detalhe/:id', component: PetUnicComponent},
  {path: 'pet-lista/detalhe/:id', component: PetUnic2Component},

  { path: '**', component: NotFoundComponent }
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
