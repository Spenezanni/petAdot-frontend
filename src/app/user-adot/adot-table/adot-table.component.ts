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

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const users$ = this.userService.loadListUsersByIdPet(id);

        users$.subscribe(data => this.users = data)
        console.log(users$);
        console.log("passei no serviço");
      }
    );


  }

  verDetalhes(cpf) {
    this.router.navigate(['detalhe', cpf], { relativeTo: this.route });  
  }

}
