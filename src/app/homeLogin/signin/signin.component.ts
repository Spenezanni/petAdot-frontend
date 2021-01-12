import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Usuario } from 'src/app/homelogin/usuario';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private usuario : Usuario = new Usuario;

  constructor(private authSignin: AuthService) { }

  ngOnInit(): void {
  }
  
  fazerLogin(){
    console.log(this.usuario)
    this.authSignin.fazerLogin(this.usuario);
    }

}
