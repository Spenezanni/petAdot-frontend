import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent],
  exports: [PhotoComponent],

  imports: [
    CommonModule,
    CardModule
  ]
})
export class PhotosModule { }
