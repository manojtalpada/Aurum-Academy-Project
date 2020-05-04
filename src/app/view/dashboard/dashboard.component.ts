import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userType:any;
  constructor() { 
    this.userType =JSON.parse(sessionStorage.getItem('user_type'));

  }

  ngOnInit() {
  }

}
