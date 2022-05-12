import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAdot } from './userAdot';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSexo(){
    return [
      { valor: 'MASC', desc: 'Masculino' },
      { valor: 'FEM', desc: "Feminino"}
    ];
  }

  getMoradia(){
    return [
      { valor: 'CASA', desc: 'Casa' },
      { valor: 'APTO', desc: 'Apartamento' },
      { valor: 'SITIO', desc: 'Sítio' },
      { valor: 'FAZENDA', desc: 'Fazenda' }
    ];
  }

  getEstadoCivil(){
    return [
      { valor: 'CASADO', desc: 'Casado' },
      { valor: 'SOLTEIRO', desc: 'Solteiro' },
      { valor: 'DIVORCIADO', desc: 'Divorciado' }
    ];
  }

  getQuantFilhos(){
    return [
      { valor: 'SEM_FILHOS', desc: 'Sem Filhos'},
      { valor: 'UM', desc: 'Um'},
      { valor: 'DOIS', desc: 'Dois'},
      { valor: 'TRES', desc: 'Três'},
      { valor: 'QUATRO', desc: 'Quatro'}
    ];
  }

  
  listFromUser() {
    console.log("entrei no serviço");
    return this.http.get<UserAdot[]>(environment.API + 'userAdot')
  }

}
