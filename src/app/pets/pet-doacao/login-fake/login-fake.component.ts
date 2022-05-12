import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/homelogin/loginForm';

@Component({
  selector: 'app-login-fake',
  templateUrl: './login-fake.component.html',
  styleUrls: ['./login-fake.component.css']
})
export class LoginFakeComponent implements OnInit {

  private usuario : LoginForm = new LoginForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
