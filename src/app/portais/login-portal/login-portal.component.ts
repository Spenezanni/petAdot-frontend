import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/homelogin/loginForm';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {
  
  public form : LoginForm = new LoginForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
