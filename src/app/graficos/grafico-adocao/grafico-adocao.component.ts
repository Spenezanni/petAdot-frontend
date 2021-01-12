import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-grafico-adocao',
  templateUrl: './grafico-adocao.component.html',
  styleUrls: ['./grafico-adocao.component.css']
})
export class GraficoAdocaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    var myChart2 = new Chart("myChart2", {
      type: 'line',
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
