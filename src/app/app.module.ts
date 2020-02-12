import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {AuthGuard} from './guards/auth.guard';
import {NgxWebstorageModule} from 'ngx-webstorage';

import {ChartModule} from 'angular2-chartjs';



const routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },

      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductsComponent
          },
          {
            path: 'create',
            component: ProductCreateComponent
          },
          {
            path: 'update/:productId',
            component: ProductUpdateComponent
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoriesComponent
          },
          {
            path: 'create',
            component: CategoriesCreateComponent
          },
          {
            path: 'update/:categoryId',
            component: CategoriesUpdateComponent
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UsersComponent
          },
          {
            path: 'create',
            component: UsersCreateComponent
          },
          {
            path: 'update/:userId',
            component: UsersUpdateComponent
          }
        ]
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
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
    CategoriesUpdateComponent,
    CategoriesCreateComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    LoginComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    EditorModule,
    NgxWebstorageModule.forRoot(),
    ChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
