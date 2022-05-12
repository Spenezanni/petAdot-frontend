import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo/photo';

const API = '/api';

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

  listFromUser() {
    console.log("entrei no serviço");
    return this.http.get<Photo[]>(environment.API + 'petAdot')
  }


  listFromId() {
    console.log("entrei no serviço");
    return this.http.get<Photo[]>(environment.API + 'petAdot' )
  }


  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    console.log("entrei no serviço");
    return this.http.get<Photo[]>(API + '/flavio/photos' + {params: params})
  }

  loadPetById(id){
    return this.http.get<Photo>(`${environment.API}petAdot/${id}`).pipe(take(1)); 
  }

}