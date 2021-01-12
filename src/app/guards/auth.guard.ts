import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean | Observable<boolean> {

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
