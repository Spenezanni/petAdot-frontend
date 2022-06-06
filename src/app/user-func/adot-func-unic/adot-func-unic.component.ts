import { Component, OnInit } from '@angular/core';
import { UserAdot } from 'src/app/user-adot/userAdot';

@Component({
  selector: 'app-adot-func-unic',
  templateUrl: './adot-func-unic.component.html',
  styleUrls: ['./adot-func-unic.component.css']
})
export class AdotFuncUnicComponent implements OnInit {

  user: UserAdot;

  constructor() { }

  ngOnInit() {
  }

}
