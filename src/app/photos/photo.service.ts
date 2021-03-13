import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo/photo';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})


export class PhotoService {

  constructor(private http: HttpClient) { }

  upload(description: string, allowComments: boolean, file: File) {
        
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData);

  }

  listFromUser(userName: string) {
    console.log("entrei no serviço");
    return this.http.get<Photo[]>(API + '/flavio/photos')
  }

}