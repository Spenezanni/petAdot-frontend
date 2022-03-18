import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFuncCompComponent } from './user-func-comp/user-func-comp.component';
import { EnderecoFuncComponent } from './endereco-func/endereco-func.component';
import { UserFuncComponent } from './user-func/user-func.component';

@NgModule({
  declarations: [
    UserFuncCompComponent,
    UserFuncComponent,
    EnderecoFuncComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserFuncModule { }
