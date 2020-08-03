import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {

  private usuario : Usuario = new Usuario;

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.LoginService.fazerLogin(this.usuario);
    }

  

}
