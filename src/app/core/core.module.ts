import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../shared/alert/alert.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
