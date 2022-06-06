import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { LoginForm } from './loginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  public form: LoginForm = new LoginForm()

  constructor(private authService: AuthService, private router: Router, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  fazerLogin(){
    //  this.authService.fazerLoginAlura(form).subscribe(
    //    () => console.log('Autenticado com sucesso'),
    //    err => {
    //      console.log(err);
    //    }
    //  );
    // console.log(this.form)
    
  }

}
