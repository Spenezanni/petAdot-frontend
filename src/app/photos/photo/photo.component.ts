import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from 'dist/app/pets/pets.service';
import { Photo } from './photo';

const CLOUD = "http://4200/imgs/";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo: Photo;

  private _url = '';

  @Input() nome = '';
  @Input() sexo = '';
  @Input() porte = '';
  @Input() idade = '';
  @Input() id = '';
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

  constructor(private router: Router, 
     private route: ActivatedRoute,
     private servicePets: PetsService) { }

  ngOnInit() {

  }

  verDetalhes(id) {
    this.router.navigate(['detalhe', id], { relativeTo: this.route });
  }

}
