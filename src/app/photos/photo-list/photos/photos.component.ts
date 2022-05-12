import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  pesquisa: FormGroup;

  @Input() photos: Photo[] = [];
  
  rows: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges ){

      if(changes.photos){
        this.rows = this.groupColumns(this.photos); 
      }

      this.pesquisa = this.formBuilder.group({
        sexo: [null],
        especie: [null],
        idade: [null],
        id: [null]
      })
  }
  
  groupColumns(photos: Photo[]){
    const newRows = [];
    for(let index = 0; index < photos.length; index += 3){
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

  onSearch(){
    
  }

}
