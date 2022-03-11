import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getMoradia(){
    return [
      { valor: 'CASA', desc: 'Casa' },
      { valor: 'APTO', desc: 'Apartamento' },
      { valor: 'SITIO', desc: 'Sítio' },
      { valor: 'FAZENDA', desc: 'Fazenda' }
    ];
  }
  
  
  
}
