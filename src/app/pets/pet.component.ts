import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from './pets.service';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  form: FormGroup;
  sexoOp: any[];
  especieOp: any[];
  porteOp: any[];
  pelagemTamanhoOp: any[];
  pelagemCorOp: any[];
  castradoOp: any[];
  vermificadoOp: any[];
  statusAdocaoOp: any[];

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private petService: PetsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.sexoOp = this.petService.getSexo();
    this.especieOp = this.petService.getEspecie();
    this.porteOp = this.petService.getPorte();
    this.pelagemTamanhoOp = this.petService.getPelagemTamanho();
    this.pelagemCorOp = this.petService.getPelagemCor();
    this.castradoOp = this.petService.getCastrado();
    this.vermificadoOp = this.petService.getVermificado();
    this.statusAdocaoOp = this.petService.getStatusAdocao();

    this.form = this.formBuilder.group({
      sexo: [null],
      nomeUsu: [null],
      especie: [null],
      porte: [null],
      pelagemTamanho: [null],
      pelagemCor: [null],
      castrado: [null],  
      vermificado: [null],
      statusAdocao: [null]
    })
  }

  onSubmit(){
    this.router.navigate(['home']);
  }

}
