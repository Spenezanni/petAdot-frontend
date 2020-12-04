import { Component, OnInit } from '@angular/core';
import { UsuarioCadastroService } from './usuario-cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioCadastro } from './usuario-cadastro';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuarioCadastro: UsuarioCadastro[];
  usuarioCadastro$: Observable<UsuarioCadastro[]>;  
  form: FormGroup;
  submitted = false;
  location: any;
  

  constructor(
     private usuarioCadastroService: UsuarioCadastroService,
     private fb: FormBuilder,
     private router: Router,
     private route: ActivatedRoute ) { }

  ngOnInit() {
    //const usuarioCadastro = this.route.snapshot.data['usuarioCadastro'];

    //part configurer the form
      this.form = this.fb.group({
      nomeUsuario: [null],
      senhaUsuario: [null],
      dsEmail: [null],
      cpfUsuario: [null]
  }); 

/*   const produto = this.route.snapshot.data['produto'];

  //part configurer the form
  this.form = this.fb.group({
    id: [produto.id],
    descricao: [produto.descricao, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    codfabricante: [produto.codfabricante, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
  }); */
  }
/*   onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      if (this.form.value.id) {
        this.usuarioCadastroService.update(this.form.value).subscribe(
          sucess => {
            console.log('sucesso');
            this.location.back();
          },
          error => console.error(error),
          () => console.log('request completo')
        );
      } else {
        this.usuarioCadastroService.create(this.form.value).subscribe(
          sucess => {
            console.log('sucesso');
            this.location.back();
          },
          error => console.error(error),
          () => console.log('request completo')
        );
      }
    }
  } */

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.usuarioCadastroService.create(this.form.value).subscribe();
  }
}

 /*  hasError(field: string) {
    return this.form.get(field).errors;
  } */

 /*  onCancel() {
    this.submitted = false;
    this.form.reset();
    //console.log('onCancel');
  } */
}
