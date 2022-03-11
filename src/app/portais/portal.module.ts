import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal/portal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PortalModule { }
