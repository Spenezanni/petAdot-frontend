import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../photos/photo.service';
import { Photo } from '../../photos/photo/photo';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.photoService.listFromUser()
      .subscribe(photos => this.photos = photos);
    console.log(this.photos);
  }

  verDetalhes(id) {
    this.router.navigate(['detalhe', id], { relativeTo: this.route });
  }

}
