import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form: FormGroup;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['cadastroExtensao']);
  }

  onBack(){
    this.router.navigate(['home']);
  }

}
