import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

const routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "products",
    children: [
      {
      path: "",
      component: ProductsComponent
      },
      {
        path: "create",
        component: ProductCreateComponent,
      },
      {
        path: "update/:productId",
        component: ProductUpdateComponent
      }

    ]
  },
  {
    path: "categories",
    children: [
      {
        path: "",
        component: CategoriesComponent
      },
      {
        path: "create",
        component: CategoriesCreateComponent
      },
      {
        path: "update/:categoryId",
        component: CategoriesUpdateComponent
      }
    ]
  },
  {
    path: "users",
    children: [
      {
        path: "",
        component: UsersComponent
      },
      {
        path: "create",
        component: UsersCreateComponent
      },
      {
        path: "update/:userId",
        component: UsersUpdateComponent
      }
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoriesComponent,
    CategoriesCreateComponent,
    CategoriesUpdateComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule, //of ngif to works
    FormsModule, //ng-model so that it works
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
