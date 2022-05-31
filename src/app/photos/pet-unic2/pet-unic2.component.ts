
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetAdot } from 'src/app/pets/petAdot';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo/photo';



@Component({
  selector: 'app-pet-unic2',
  templateUrl: './pet-unic2.component.html',
  styleUrls: ['./pet-unic2.component.css']
})
export class PetUnic2Component implements OnInit {

  petAdot: PetAdot;
  photo: Photo;

  constructor(
    private servicePhoto: PhotoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);  
        const photo$ =  this.servicePhoto.loadPetById(id);

        photo$.subscribe(data => this.photo = data)
        console.log(photo$);
        console.log("passei no serviço");
         
      }
    ); 
  }



}
