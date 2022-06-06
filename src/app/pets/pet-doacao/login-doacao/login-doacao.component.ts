import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/homelogin/loginForm';

@Component({
  selector: 'app-login-doacao',
  templateUrl: './login-doacao.component.html',
  styleUrls: ['./login-doacao.component.css']
})
export class LoginDoacaoComponent implements OnInit {

  public usuario : LoginForm = new LoginForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
