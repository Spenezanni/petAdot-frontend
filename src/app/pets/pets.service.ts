import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from '../photos/photo/photo';
import { PetAdot } from './petAdot';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  getSexo(){
    return [
      { valor: 'MACHO', desc: 'Macho' },
      { valor: 'FEMEA', desc: "Femea"}
    ];
  }

  getEspecie(){
    return [
      { valor: 'CANINO', desc: 'Canino' },
      { valor: 'FELINO', desc: 'Felino' }
    ];
  } 

  getPorte(): any[] {
    return [
      { valor: 'PEQUENO', desc:'Pequeno'},
      { valor: 'MEDIO', desc:'Médio'},
      { valor: 'GRANDE', desc:'Grande'}
    ];
  }

  getPelagemTamanho(): any[] {
    return [
      { valor: 'CURTO', desc:'Curto'},
      { valor: 'MEDIO', desc:'Médio'},
      { valor: 'LONGO', desc:'Longo'}
    ];
  }

  getPelagemCor(): any[] {
    return [
      { valor: 'BRANCO', desc:'Branco'},
      { valor: 'PRETO', desc:'Preto'},
      { valor: 'MARROM', desc:'Marrom'},
      { valor: 'RAJADO', desc:'Rajado'}
    ];
  }

  getCastrado(): any[] {
    return [
      { valor: 'CASTRADO', desc:'Castrado'},
      { valor: 'NAO_CASTRADO', desc:'Não Castrado'}
    ];
  }

  getVermificado(): any[] {
    return [
      { valor: 'VERMIFICADO', desc:'Vermificado'},
      { valor: 'NAO_VERMIFICADO', desc:'Não Vermificado'}
    ];
  }

  getStatusAdocao(): any[] {
    return [
      { valor: 'ADOTADO', desc:'Adotado'},
      { valor: 'NAO_ADOTADO', desc:'Não Adotado'}
    ];
  }

  createPet(petAdot){
    return this.http.post(environment.API + 'petAdot', petAdot).pipe(take(1));
  }

  loadPetById(id){
    return this.http.get<Photo>(`${environment.API}petAdot/${id}`).pipe(take(1)); 
  }
}
