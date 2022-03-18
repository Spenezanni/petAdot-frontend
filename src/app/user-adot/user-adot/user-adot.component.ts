import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-adot',
  templateUrl: './user-adot.component.html',
  styleUrls: ['./user-adot.component.css']
})
export class UserAdotComponent implements OnInit {

  form2: FormGroup;

  moradiaOp: any[];
  sexoOp: any[];
  estadoCivilOp: any[];
  quantFilhosOp: any[];

  constructor(private userService: UserService, 
    private router: Router, 
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.moradiaOp = this.userService.getMoradia();
    this.sexoOp = this.userService.getSexo();
    this.estadoCivilOp = this.userService.getEstadoCivil();
    this.quantFilhosOp = this.userService.getQuantFilhos();

    this.form2 = this.formBuilder.group({
      moradia: [null],
      sexo: [null],
      estadoCivil: [null],
      quantFilhos: [null],
      rg: [null],
      renda: [null],
      tel: [null]

    })
    
  }

  onBack(){
    this.router.navigate(['/endereco']);
  }

  onNext(){

  }

}
