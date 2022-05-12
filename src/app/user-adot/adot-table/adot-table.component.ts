import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserAdot } from '../userAdot';

@Component({
  selector: 'app-adot-table',
  templateUrl: './adot-table.component.html',
  styleUrls: ['./adot-table.component.css']
})
export class AdotTableComponent implements OnInit {

  users: UserAdot[] = [];

  constructor( private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.userService.listFromUser()
      .subscribe(users => this.users = users);
    console.log(this.users);
  }

}
