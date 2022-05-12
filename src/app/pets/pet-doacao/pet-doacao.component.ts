import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-doacao',
  templateUrl: './pet-doacao.component.html',
  styleUrls: ['./pet-doacao.component.css']
})
export class PetDoacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
