import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../interfaces/IProduct";
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
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
      this.deleteProduct;
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
   this.getProducts();
  }

  public getProducts() {
    this.loading = true;
    this.http.get<IProduct[]>(environment.apiUrl + "/products").subscribe(response => {
      this.products = response;
      this.loading = false;
    });
  }

  public deleteProduct(id){
    this.http.delete(environment.apiUrl + "/products/" + id)
      .subscribe(_ => {this.getProducts()});
  }

}

