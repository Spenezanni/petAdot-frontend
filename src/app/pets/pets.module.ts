import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { PetAtualizarComponent } from './pet-atualizar/pet-atualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetAtualizarDescComponent } from './pet-atualizar-desc/pet-atualizar-desc.component';

@NgModule({
  declarations: [
    PetComponent,
    PetAtualizarComponent,
    PetAtualizarDescComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PetsModule { }
