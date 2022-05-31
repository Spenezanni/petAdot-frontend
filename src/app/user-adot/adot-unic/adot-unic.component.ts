import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserAdot } from '../userAdot';

@Component({
  selector: 'app-adot-unic',
  templateUrl: './adot-unic.component.html',
  styleUrls: ['./adot-unic.component.css']
})
export class AdotUnicComponent implements OnInit {

  user: UserAdot;

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const cpf = params['cpf'];
        console.log(cpf);
        const user$ = this.userService.loadUserAdotById(cpf);

        user$.subscribe(data => this.user = data)
        console.log(user$);
        console.log("passei no serviço");
      }
    );
  }

}
