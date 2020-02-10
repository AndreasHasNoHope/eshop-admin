import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IResponce} from "../../interfaces/IResponce";
=======
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponce} from '../../interfaces/IResponce';
>>>>>>> 84c295d43ba78b28e167b61737c11462b17a80e1

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public type = 'line';
<<<<<<< HEAD
  data = {};
  options = {
=======
  public data = {};
  public options = {
>>>>>>> 84c295d43ba78b28e167b61737c11462b17a80e1
    responsive: true,
    maintainAspectRatio: false
  };

<<<<<<< HEAD

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getStats()
  }
  public getStats() {
    this.http.get<IResponce>(environment.apiUrl + "/stats").subscribe(response => {
      if(response.success) {
        this.data = response.data
      }
    })
=======
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getStats();
  }

  public getStats() {
    this.http.get<IResponce>(environment.apiUrl + '/stats').subscribe(response => {
      if (response.success) {
        this.data = response.data;
      }
    });
>>>>>>> 84c295d43ba78b28e167b61737c11462b17a80e1
  }

}
