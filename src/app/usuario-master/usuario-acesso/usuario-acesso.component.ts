import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-acesso',
  templateUrl: './usuario-acesso.component.html',
  styleUrls: ['./usuario-acesso.component.css']
})
export class UsuarioAcessoComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['cadastroUsuario']);
  }

}
