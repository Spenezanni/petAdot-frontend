import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-relatorio-principal',
  templateUrl: './relatorio-principal.component.html',
  styleUrls: ['./relatorio-principal.component.css']
})
export class RelatorioPrincipalComponent implements OnInit {

  //@ViewChild("meuCanvas", { static: true}) elementoRef: ElementRef;
  //ctx = document.getElementById('meuCanvas');
  meses :["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  constructor() { }

  ngOnInit() {

    var myChart = new Chart("myChart", {
      type: 'horizontalBar',
      data: {
        labels:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
          label: 'Adoção Pet-Adote',
          data: [12, 19, 3, 5, 2, 3, 4, 7, 15, 10, 6, 4],
        }]
      }
  });


  }

}
