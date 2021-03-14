import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-buttom',
  templateUrl: './load-buttom.component.html',
  styleUrls: ['./load-buttom.component.css']
})
export class LoadButtomComponent implements OnInit {

  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
