import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-acesso',
  templateUrl: './usuario-acesso.component.html',
  styleUrls: ['./usuario-acesso.component.css']
})
export class UsuarioAcessoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['cadastroUsuario']);
  }

}
