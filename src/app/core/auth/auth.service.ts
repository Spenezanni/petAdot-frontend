import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../../homelogin/loginForm';
import { TokenService } from '../token/token.service';

const API = '/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, 
    private tokenService: TokenService, 
    private http: HttpClient) { }

  fazerLogin(usuario: LoginForm) {

    if (usuario.login == 'user' && usuario.senha == '123') {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['/pet-lista']);
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

  fazerLoginLoiane(usuario: LoginForm){

  }

  fazerLoginAlura(usuario: LoginForm){
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      body: usuario
    };
    console.log(usuario)
     return this.http.post(`${environment.API}auth`, usuario);
    //.pipe(tap(
      //res => {
        //const authToken = res.headers.get('x-access-token');
       // console.log("authToken");
        //window.localStorage.setItem('authToken', authToken);
       // console.log("authToken");
       // this.tokenService.setToken(authToken);
       // console.log(authToken);
       // console.log("authToken");
     // }
    //)); 
  }


}
