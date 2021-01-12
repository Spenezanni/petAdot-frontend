import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficoAdocaoComponent } from './grafico-adocao/grafico-adocao.component';
import { RelatorioPrincipalComponent } from './relatorio-principal/relatorio-principal.component';
import { GraficoAnaliseComponent } from './grafico-analise/grafico-analise.component';


@NgModule({
  declarations: [
    RelatorioPrincipalComponent,
    GraficoAdocaoComponent,
    GraficoAnaliseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GraficosModule { }
