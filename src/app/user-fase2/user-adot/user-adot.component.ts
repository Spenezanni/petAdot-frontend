import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-adot',
  templateUrl: './user-adot.component.html',
  styleUrls: ['./user-adot.component.css']
})
export class UserAdotComponent implements OnInit {

  moradiaOp: any[];

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.moradiaOp = this.userService.getMoradia();
    
  }

}
