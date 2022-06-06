
import { HomeComponent } from './home/home.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PetComponent } from './pets/pet.component';
import { SigninComponent } from './homeLogin/signin/signin.component';
import { GraficoAdocaoComponent } from './graficos/grafico-adocao/grafico-adocao.component';
import { RelatorioPrincipalComponent } from './graficos/relatorio-principal/relatorio-principal.component';
import { GraficoAnaliseComponent } from './graficos/grafico-analise/grafico-analise.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PetAtualizarComponent } from './pets/pet-atualizar/pet-atualizar.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { UserComponent } from './user-adot/user/user.component';
import { UserAdotComponent } from './user-adot/user-adot/user-adot.component';
import { PortalComponent } from './portais/portal/portal.component';
import { EnderecoComponent } from './user-adot/endereco-user-adot/endereco.component';
import { UserFuncComponent } from './user-func/user-func/user-func.component';
import { PetTableComponent } from './pets/pet-table/pet-table.component';
import { PetUnicComponent } from './pets/pet-unic/pet-unic.component';
import { PetDoacaoComponent } from './pets/pet-doacao/pet-doacao.component';
import { LoginDoacaoComponent } from './pets/pet-doacao/login-doacao/login-doacao.component';
import { PetUnic2Component } from './photos/pet-unic2/pet-unic2.component';
import { LoginComponent } from './login/login.component';
import { AdotTableComponent } from './user-adot/adot-table/adot-table.component';
import { AdotUnicComponent } from './user-adot/adot-unic/adot-unic.component';
import { PetPesquisarComponent } from './pets/pet-pesquisar/pet-pesquisar.component';
import { EnderecoFuncComponent } from './user-func/endereco-func/endereco-func.component';
import { AdotFuncTableComponent } from './user-func/adot-func-table/adot-func-table.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPortalComponent } from './portais/login-portal/login-portal.component';


const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'home', component: HomeComponent } ,
  { path: 'home/:usuarioNome', component: HomeComponent } ,
  { path: 'login', component: SigninComponent },
  { path: 'login-doacao', component: LoginDoacaoComponent },
  { path: 'login-portal', component: LoginPortalComponent },
  { path: 'login-loiane', component: LoginComponent },
  { path: 'pet-cadastro', component: PetComponent },
  { path: 'pet-atualizar', component: PetAtualizarComponent },
  { path: 'pet-lista', component: PhotoListComponent },
  { path: 'doacao-pet', component: PetDoacaoComponent },
  { path: 'pet-pesquisa', component: PetPesquisarComponent },

  { path: 'quemSomos', component: ApresentacaoComponent }, 
  { path: 'graficoPrincipal', component: RelatorioPrincipalComponent },
  { path: 'graficoAdocao', component: GraficoAdocaoComponent },

  { path: 'portal', component: PortalComponent },

  { path: 'user', component: UserComponent },
  { path: 'user-adot', component: UserAdotComponent },
  { path: 'endereco', component: EnderecoComponent },

  { path: 'user-func', component: UserFuncComponent },
  { path: 'endereco-func', component: EnderecoFuncComponent },
  { path: 'user-func-comp', component: UserFuncComponent },
  { path: 'user-func-table', component: AdotFuncTableComponent},

  { path: 'pet-table', component: PetTableComponent },
  { path: 'user-table', component: AdotTableComponent },
  { path: 'graficoAnalise', component: GraficoAnaliseComponent },
  { path: 'add', component: PhotoFormComponent },
  { path: 'pet-table/detalhe/:id', component: PetUnicComponent},
  { path: 'pet-lista/detalhe/:id', component: PetUnic2Component},
  { path: 'pet-pesquisa/detalhe/:id', component: PetUnicComponent},
  { path: 'pet-pesquisa/detalhe/:id/adotadores/:id', component: AdotTableComponent},
  { path: 'pet-pesquisa/detalhe/:id/adotadores/:id/detalhe/:cpf', component: AdotUnicComponent},
  { path: 'user-table/detalhe/:cpf', component: AdotUnicComponent},

  { path: '**', component: NotFoundComponent }
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
