import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { CardModule } from '../shared/components/card/card.module';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { LoadButtomComponent } from './photo-list/load-buttom/load-buttom.component';


@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    LoadButtomComponent], 
  exports: [PhotoComponent],

  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class PhotosModule { }
