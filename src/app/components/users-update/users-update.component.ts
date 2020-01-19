import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../interfaces/IUsers";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {
  public user: Partial<IUsers> = {};
  public users: IUsers[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers();
    this.route.params.subscribe(params => {
      this.initUser(params.userId);
    });
  }
  public initUser(id: string) {
    this.http.get<IUsers>(environment.apiUrl + "/users/" + id)
      .subscribe(response => {
        this.user = response;
      });
  }
  public saveUser() {
    this.http.put(environment.apiUrl + "/users/" + this.user._id, this.user)
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
