import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { LoginForm } from './loginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: LoginForm = new LoginForm()

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(usuario: LoginForm){
     this.authService.fazerLoginAlura(usuario).subscribe(
       () => console.log('Autenticado com sucesso'),
       err => {
         console.log(err);
       }
     );
    console.log(this.usuario)
  }

}
