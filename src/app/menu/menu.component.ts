import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/user/user';
import { UserService } from '../core/user/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user$: Observable<User>;
  user: User;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user)
   }

  ngOnInit() {
  }
}
