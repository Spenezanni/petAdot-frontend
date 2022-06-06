import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { PetsService } from './pets.service';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petForm: FormGroup;
  sexoOp: any[];
  especieOp: any[];
  porteOp: any[];
  pelagemTamanhoOp: any[];
  pelagemCorOp: any[];
  castradoOp: any[];
  vermificadoOp: any[];
  raca: any[];
  nomePet: any[];
  //statusAdocaoOp: any[];
  file: Blob;
  imageError: any;
  cardImageBase64: any;
  isImageSaved: boolean;
  base64textString: string;

  
  bsModalRef: BsModalRef;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private petService: PetsService,
    private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.sexoOp = this.petService.getSexo();
    this.especieOp = this.petService.getEspecie();
    this.porteOp = this.petService.getPorte();
    this.pelagemTamanhoOp = this.petService.getPelagemTamanho();
    this.pelagemCorOp = this.petService.getPelagemCor();
    this.castradoOp = this.petService.getCastrado();
    this.vermificadoOp = this.petService.getVermificado();
    //this.statusAdocaoOp = this.petService.getStatusAdocao();

    this.petForm = this.formBuilder.group({
      sexo: [null],
      nomePet: [null],
      especie: [null],
      idadePet: [null],
      porte: [null],
      pelagemTamanho: [null],
      pelagemCor: [null],
      castrado: [null],  
      vermificado: [null],
      raca: [null],
      //statusAdocao: [null],
      condSaude: [null],
      file: [null]
    })
  }

  onSubmit(){
    const formData = new FormData(); 
    formData.append('file', this.base64textString);
    formData.append('sexo', this.petForm.value.sexo);
    formData.append('especie', this.petForm.value.especie);
    formData.append('porte', this.petForm.value.porte);
    formData.append('pelagemTamanho',this.petForm.value.pelagemTamanho);
    formData.append('pelagemCor', this.petForm.value.pelagemCor);
    formData.append('castrado',this.petForm.value.castrado);
    formData.append('vermificacao', this.petForm.value.vermificado);
    formData.append('raca', this.petForm.value.raca);
    formData.append('idade', this.petForm.value.idadePet);
    formData.append('nome', this.petForm.value.nomePet);
    formData.append('condicaoSaude', this.petForm.value.condSaude);
    //formData.append('statusAdocao', this.petForm.value.statusAdocao);
    this.petService.createPet(formData).subscribe(res => console.log("Created Pet"));
    console.log("passei aqui sim")
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
  }

  onCancel(){
    
  }

  handle() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'Cadastro do pet realizado com sucesso!';
    this.bsModalRef.content.message2 = '';
  }

  onSuccess() {
    this.handle();
  }


}
