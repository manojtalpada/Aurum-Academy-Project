import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType;
  constructor( private _router: Router) { 
    this.userType =JSON.parse(sessionStorage.getItem('user_type'));
  }

  ngOnInit() {
  }

  switchuser(){
    // alert("hi")
    if(this.userType =="t" && this.userType!="")
    {
      this.userType='s';
      sessionStorage.setItem('user_type', JSON.stringify(this.userType));
      this._router.navigate(["dashboard"]);
    }      
    else{
      this.userType='t';
      sessionStorage.setItem('user_type', JSON.stringify(this.userType));
    }

  }

}
