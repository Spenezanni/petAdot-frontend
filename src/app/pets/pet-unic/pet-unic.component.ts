import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/photos/photo/photo';

import { PetAdot } from '../petAdot';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-unic',
  templateUrl: './pet-unic.component.html',
  styleUrls: ['./pet-unic.component.css']
})
export class PetUnicComponent implements OnInit {

  petAdot: PetAdot;
  photo: Photo;

  constructor(
    private route: ActivatedRoute,
    private servicePets: PetsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const photo$ = this.servicePets.loadPetById(id);

        photo$.subscribe(data => this.photo = data)
        console.log(photo$);
        console.log("passei no serviço");
      }
    );
  }

  verAdotadores(id) {
    this.router.navigate(['adotadores', id], { relativeTo: this.route });
    console.log(id);
  }

}
