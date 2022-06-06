import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-adot',
  templateUrl: './user-adot.component.html',
  styleUrls: ['./user-adot.component.css']
})
export class UserAdotComponent implements OnInit {

  bsModalRef: BsModalRef;

  form2: FormGroup;

  moradiaOp: any[];
  sexoOp: any[];
  estadoCivilOp: any[];
  quantFilhosOp: any[];

  constructor(private userService: UserService, 
    private router: Router, 
    private formBuilder: FormBuilder, private modalService: BsModalService) { }

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
  
  handle() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'User-Adot creado com sucesso!';
    this.bsModalRef.content.message2 = '';
  }

  onSuccess() {
    this.handle();
  }

}
