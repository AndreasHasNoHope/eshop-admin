import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    public loading: boolean = false;
    public users: IUser[] = [];
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
      this.deleteUser;
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.loading = true;
    this.http.get<IUser[]>(environment.apiUrl + '/users').subscribe(res => {
      this.users = res;
      this.loading = false;
    });
  }
  public deleteUser(id) {
    this.http.delete(environment.apiUrl + '/users/' + id).subscribe(_ => {
      this.getUsers();
    });
  }
}
