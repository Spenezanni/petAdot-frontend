import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PortalComponent } from './portal/portal.component';

@NgModule({
  declarations: [
    PortalComponent,
    LoginPortalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PortalModule { }
