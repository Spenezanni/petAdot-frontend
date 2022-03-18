import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserAdotComponent } from './user-adot/user-adot.component';
import { UserService } from './user.service';
import { EnderecoComponent } from './endereco-user-adot/endereco.component';

@NgModule({
  declarations: [
    UserComponent,
    EnderecoComponent,
    UserAdotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
