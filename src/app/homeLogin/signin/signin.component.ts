import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginForm } from 'src/app/homelogin/loginForm';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public usuario : LoginForm = new LoginForm;

  constructor(private authSignin: AuthService) { }

  ngOnInit(): void {
  }
  
  fazerLogin(){
    console.log(this.usuario)
    this.authSignin.fazerLogin(this.usuario);
    }

}
