import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user-adot/user.service';
import { UserAdot } from 'src/app/user-adot/userAdot';

@Component({
  selector: 'app-adot-func-table',
  templateUrl: './adot-func-table.component.html',
  styleUrls: ['./adot-func-table.component.css']
})
export class AdotFuncTableComponent implements OnInit {

  users: UserAdot[] = [];

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.userService.listFromUserFunc()
    .subscribe(users => this.users = users);
    console.log(this.users);

  }

}
