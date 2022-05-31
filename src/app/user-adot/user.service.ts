import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
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

  loadUserAdotById(cpf) {
    return this.http.get<UserAdot>(`${environment.API}userAdot/${cpf}`).pipe(take(1)); 
  }

  loadListUsersByIdPet(id){
    return this.http.get<UserAdot[]>(`${environment.API}petAdot/list-userAdot/${id}`).pipe(take(1));
  }

  listFromUserFunc(){
    console.log("entrei no serviço");
    return this.http.get<UserAdot[]>(environment.API + 'user')
  }

}
