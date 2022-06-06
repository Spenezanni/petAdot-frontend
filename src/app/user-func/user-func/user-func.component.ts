import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { UserFuncService } from '../user-func.service';

@Component({
  selector: 'app-user-func',
  templateUrl: './user-func.component.html',
  styleUrls: ['./user-func.component.css']
})
export class UserFuncComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private router: Router,
    private userFuncService: UserFuncService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigate(['/endereco-func']);
  }

  onBack(){
    this.router.navigate(['/home']);
  }

  handle() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'Usuário colaborador criado com sucesso!';
    this.bsModalRef.content.message2 = '';
  }

  onSuccess() {
    this.handle();
  }


}
