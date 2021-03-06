import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ICategory} from '../../interfaces/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public loading: boolean = false;
  public  categories: ICategory [] = [];
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
      this.deleteCategory;
    }
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }
  public getCategories() {
    this.loading = true;
    this.http.get<ICategory[]>(environment.apiUrl + '/categories').subscribe( response => {
      this.categories = response;
      this.loading = false;

    });
  }

  public deleteCategory(id) {
    this.http.delete(environment.apiUrl + '/categories/' + id)
      .subscribe(_ => {
        this.getCategories();
      });
  }

}
