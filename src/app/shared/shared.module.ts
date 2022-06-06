
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VmessageComponent } from './components/vmessage/vmessage.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@NgModule({
  declarations: [
    AlertModalComponent
  ],
  exports:[AlertModalComponent],
  entryComponents:[AlertModalComponent],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
