import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico-analise',
  templateUrl: './grafico-analise.component.html',
  styleUrls: ['./grafico-analise.component.css']
})
export class GraficoAnaliseComponent implements OnInit {
  @ViewChild("container", { static: true }) elementoRef: ElementRef;
  constructor() { }

  ngOnInit() {
    //var container = Highcharts.chart('container', {
    //chart: {
    // type: 'bar'
    // },
    //title: {
    //  text: 'Stacked bar chart'
    // },
    // xAxis: {
    //  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    //},
    //yAxis: {
    //  title: {
    // text: 'Total fruit consumption'
    //}
    //},
    // legend: {
    //  // reversed: true
    //  / },
    //  / },
    //   / },
    //  / },
    // plotOptions: {
    // series: {
    // stacking: 'normal'
    // }
    //}//,
    // series: [{
    //  name: 'John',
    // data: [5, 3, 4, 7, 2]
    //}, {
    // name: 'Jane',
    // data: [2, 2, 3, 2, 1]
    //}, {
    //   name: 'Joe',
    //  data: [3, 4, 4, 2, 5]
    //}]
    // });
  }

}
