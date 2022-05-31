import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'dist/app/photos/photo.service';
import { Photo } from 'dist/app/photos/photo/photo';
import { PetAdot } from '../petAdot';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-pesquisar',
  templateUrl: './pet-pesquisar.component.html',
  styleUrls: ['./pet-pesquisar.component.css']
})
export class PetPesquisarComponent implements OnInit {

  petAdot: PetAdot;
  photo: Photo;

  constructor(private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  onSubmit(id) {
    this.router.navigate(['detalhe', id], { relativeTo: this.route });
    console.log(id);
  }

}
