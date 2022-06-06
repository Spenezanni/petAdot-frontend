import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-atualizar',
  templateUrl: './pet-atualizar.component.html',
  styleUrls: ['./pet-atualizar.component.css']
})
export class PetAtualizarComponent implements OnInit {

  form = FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['pet-atualizar-desc']);
  }

  onBack(){

  }

  onCancel(){
    
  }

}
