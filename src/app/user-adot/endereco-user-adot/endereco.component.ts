import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  formEndereco: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient ) { }

  ngOnInit() {

    this.formEndereco = this.formBuilder.group({
      logradouro: [null],
      numero: [null],
      localidade: [null],
      bairro: [null],
      uf: [null],
      pais: [null],
      cep: [null]
    })
  }


  onNext(){
    this.router.navigate(['/user-adot']);
  }

  onBack(){
    this.router.navigate(['/user']);
  }

  consultarCep(){

    let cep = this.formEndereco.get('cep').value;

    cep = cep.replace(/\D/g, '');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.resetaDadosForm();

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        //.map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados));
        console.log(dados);

      }
    }
  }

  populaDadosForm(dados){
    console.log(dados)
    this.formEndereco.patchValue({
      logradouro: dados.logradouro,
      numero: dados.numero,
      localidade: dados.localidade,
      bairro: dados.bairro,
      uf: dados.uf,
      pais: dados.pais
    })
  }

  resetaDadosForm(){
    this.formEndereco.patchValue({
      logradouro: [null],
      numero: [null],
      localidade: [null],
      bairro: [null],
      uf: [null],
      pais: [null]
    })  
  }


}
function dados(dados: any) {
  throw new Error('Function not implemented.');
}

