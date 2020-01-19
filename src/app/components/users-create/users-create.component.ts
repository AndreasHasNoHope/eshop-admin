import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {IUsers} from "../../interfaces/IUsers";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  public user: Partial<IUsers> = {};
  public users: IUsers[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  public saveUser() {
    this.http.post(environment.apiUrl + "/users", this.user)
      .subscribe(response => {
        this.router.navigate(["/users"]);
      });
  }

  public getUsers() {
    this.http.get<IUsers[]>(environment.apiUrl + "/users")
      .subscribe(response => {
        this.users = response;
      });
  }

}
