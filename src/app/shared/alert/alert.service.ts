import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();

  constructor() { }

  success(message: string){
    this.alert(AlertType.SUCCESS, message);
  }

  warning(message: string){
    this.alert(AlertType.WARNING, message);
  }

  info(message: string){
    this.alert(AlertType.INFO, message);
  }

  danger(message: string){
    this.alert(AlertType.DANGER, message);
  }

  alert(alertType: AlertType, message: string){
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert(){
    return this.alertSubject.asObservable();
  }

}
