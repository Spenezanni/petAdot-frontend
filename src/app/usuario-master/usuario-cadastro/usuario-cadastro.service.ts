import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCadastroService {

  private readonly API = `${environment.API}usuarioCadastro`;

  constructor(private http: HttpClient, private router: Router) { }

  
  create(usuarioCadastro){
    return this.http.post(this.API, usuarioCadastro)
    .pipe(take(1));
  }

  update(usuarioCadastro){
    return this.http.put(`${this.API}/${usuarioCadastro.id}`, usuarioCadastro)
    .pipe(take(1));
  }
}
