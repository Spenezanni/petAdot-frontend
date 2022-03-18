import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFuncService } from '../user-func.service';

@Component({
  selector: 'app-user-func',
  templateUrl: './user-func.component.html',
  styleUrls: ['./user-func.component.css']
})
export class UserFuncComponent implements OnInit {

  constructor(private router: Router,
    private userFuncService: UserFuncService) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigate(['/endereco-func']);
  }

  onBack(){
    this.router.navigate(['/home']);
  }


}
