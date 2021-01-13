import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../homelogin/usuario';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private tokenService: TokenService) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome == 'user' && usuario.senha == '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home/' + usuario.nome]);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      alert('Usuario ou senha errados!')
      this.router.navigate(['/login']);
    }
  }

  usuarioEstaAutenticado(){
        return this.usuarioAutenticado;
  }


}
