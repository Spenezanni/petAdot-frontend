import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { UserAdotComponent } from './user-adot/user-adot.component';
import { UserFuncComponent } from './user-func/user-func.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserComponent,
    EnderecoComponent,
    UserAdotComponent,
    UserFuncComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
