import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../interfaces/IUsers";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IUsers[] = [];
  public loading:boolean = false;

  public swalDel = {
    icon: "error",
    title: "Are you sure?",
    showCancelButton: true,
    confirmButtonClass: "btn-danger",
    confirmButtonText: "Delete",
    cancelButtonColor: "#fc03fc",
    cancelButtonText: "Cancel",
    closeOnConfirm: false,
    closeOnCancel: false
  };
  function(Del) {
    if (Del) {
      this.deleteUsers;
    }
  };


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  public getUsers() {
    this.loading = true;
    this.http.get<IUsers[]>(environment.apiUrl + "/users").subscribe(response => {
      this.users = response;
      this.loading = false;

    });
  }

  public deleteUsers(id){
    this.http.delete(environment.apiUrl + "/users/" + id)
      .subscribe(_ => {this.getUsers()});
  }

}
