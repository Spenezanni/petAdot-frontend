import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { PetAtualizarComponent } from './pet-atualizar/pet-atualizar.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetsService } from './pets.service';
import { PhotosModule } from '../photos/photos.module';
import { PetDoacaoComponent } from './pet-doacao/pet-doacao.component';
import { RouterModule } from '@angular/router';
import { LoginDoacaoComponent } from './pet-doacao/login-doacao/login-doacao.component';
import { PetUnicComponent } from './pet-unic/pet-unic.component';
import { PetPesquisarComponent } from './pet-pesquisar/pet-pesquisar.component';



@NgModule({
  declarations: [
    PetComponent,
    PetAtualizarComponent,
    PetDoacaoComponent,
    LoginDoacaoComponent,
    PetUnicComponent,
    PetPesquisarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [PetsService]
})
export class PetsModule { }
