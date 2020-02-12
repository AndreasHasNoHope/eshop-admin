import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/interfaces/IProduct';
import { environment } from 'src/environments/environment';
import {IResponce} from '../../interfaces/IResponce';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public loading: boolean = false;
  public products: IProduct[] = [];
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
      this.deleteProduct;
    }
  }
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.getProducts();

  }

  public getProducts() {
    this.loading = true;
    this.http.get<IResponce>(environment.apiUrl + '/products')
    .subscribe(response => {
      this.products = response.products;
      this.loading = false;
    });
  }

  public deleteProduct(id) {
    this.http.delete(environment.apiUrl + '/products/' + id)
    .subscribe(_ => {
      this.getProducts();
    });
  }

}
