import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUser() { }


  //ainda precisa importar o jwt

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    //const user = jwt.decode(token) as User;
    //this.userSuject.next(user);
  }

}
