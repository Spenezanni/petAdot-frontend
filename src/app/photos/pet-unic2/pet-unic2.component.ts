
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PetAdot } from 'src/app/pets/petAdot';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
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

  bsModalRef: BsModalRef;

  constructor(
    private servicePhoto: PhotoService,
    private router: Router,
    private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const photo$ = this.servicePhoto.loadPetById(id);

        photo$.subscribe(data => this.photo = data)

        console.log(photo$);
        console.log("passei no serviço");

      }
    );
  }

  handle() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'Interesse de adoção registrado com sucesso!';
    this.bsModalRef.content.message2 = 'Em breve entraremos em Contato. Obrigado!';
  }

  onSuccess() {
    this.handle();
  }

}
