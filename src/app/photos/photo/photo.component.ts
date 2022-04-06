import { Component, Input, OnInit } from '@angular/core';

const CLOUD = "http://4200/imgs/";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _url = '';

  @Input() nome = '';
  @Input() sexo = '';
  @Input() porte = '';
  @Input() idade = '';
  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  constructor() { }

  ngOnInit() {
  }

}
