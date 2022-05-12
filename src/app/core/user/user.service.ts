import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);  
  }

  getUser() { 
    return this.userSubject.asObservable();
  }


  //ainda precisa importar o jwt

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

}
