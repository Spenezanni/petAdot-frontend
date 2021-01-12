import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from './signin/signin.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[
    SigninService
  ]
})
export class HomeloginModule { }
