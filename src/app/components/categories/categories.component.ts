import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {ICategory} from "../../interfaces/ICategories";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: ICategory[] = [];
  public loading:boolean = false;

  public swalDel = {
    icon: "error",
    title: "Are you sure?",
    showCancelButton: true,
    confirmButtonClass: "btn-danger",
    cancelButtonColor: "#fc03fc",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    closeOnConfirm: false,
    closeOnCancel: false
  };
  function(Del) {
    if (Del) {
      this.deleteCategories;
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getCategories();
  }
  public getCategories() {
    this.loading = true;
    this.http.get<ICategory[]>(environment.apiUrl + "/categories").subscribe(response => {
      this.categories = response;
      this.loading = false;
    })
  }

  public deleteCategories(id){
    this.http.delete(environment.apiUrl + "/categories/" + id)
      .subscribe(_ => {this.getCategories()});
  }
}
