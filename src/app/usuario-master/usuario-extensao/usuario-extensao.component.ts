import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-extensao',
  templateUrl: './usuario-extensao.component.html',
  styleUrls: ['./usuario-extensao.component.css'],
  preserveWhitespaces: true
})
export class UsuarioExtensaoComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['cadastroUsuario']);
  }

}
