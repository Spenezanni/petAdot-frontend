import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFuncCompComponent } from './user-func-comp/user-func-comp.component';
import { EnderecoFuncComponent } from './endereco-func/endereco-func.component';
import { UserFuncComponent } from './user-func/user-func.component';
import { AdotFuncUnicComponent } from './adot-func-unic/adot-func-unic.component';
import { AdotFuncTableComponent } from './adot-func-table/adot-func-table.component';

@NgModule({
  declarations: [
    UserFuncCompComponent,
    UserFuncComponent,
    EnderecoFuncComponent,
    AdotFuncUnicComponent,
    AdotFuncTableComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserFuncModule { }
