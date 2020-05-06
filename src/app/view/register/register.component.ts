import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AunumService } from 'src/app/services/aunumServices'; 
import { AuthenticationService } from 'src/app/services';
import { SocialUser, GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  usersocial: SocialUser;
  sData:any = {};
  tooglepool:boolean=true;

  constructor(private aunumservices : AunumService,private _route: ActivatedRoute,private userService: UserService,
    private _router: Router,private authService: AuthService,public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.isLogout();
    this.authService.authState.subscribe((usersocial) => {
      this.usersocial = usersocial;
      // this.loggedIn = (usersocial != null);
   
  
    });
  }
  changeEvent(event){
    if(event.target.checked){

      this.tooglepool = false;
    }else{
      this.tooglepool = true;

    }
  }

  register() {
    var data={
      first_name:this.model.first_name,
      last_name:this.model.last_name,
      user_name:this.model.user_name,
      birthdate:this.model.birthdate,
      email:this.model.email,
      password:this.model.password,
      google_id:"",
      facebook_id:"",
      current_package_id:"",
      current_package_name:"",
      current_package_type:"",
      current_package_pay_by_user_id:"",
      master_id:"",
      user_type:"",
      url_slug:"",
      action:"register"

    }
    this.aunumservices.registerInsert(data)
      .subscribe(
        data => { 
          var custdetails = data; 
          console.log(custdetails)
          if(custdetails.status == 1){
            alert(custdetails.message);
            this._router.navigate(['login']);

          }else{
            alert(custdetails.message);


          }
         
        },
        error => {
          console.log(error);
        });
  }

   //Social Login

 signInWithFB(): void {
  // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  this.authService
    .signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((userData) => {
      //this will return user data from facebook. What you need is a user token which you will send it to the server
      this.Savesresponse(userData);
      // this._router.navigate(['dashboard']);
    });
}
Savesresponse(usersocial: SocialUser) {
  this.sData = {
    action: "register",
    first_name: usersocial.firstName,
    last_name: usersocial.lastName,
    user_name: "",
    email: usersocial.email,
    birthdat: "",
    password: "",
    google_id: "",
    facebook_id: usersocial.id,
    current_package_id: "",
    current_package_name: "",
    current_package_type: "",
    current_package_pay_by_user_id: "",
    master_id: "",
    user_type: "",
    url_slug: "",
  };

  this.userService.register_social(this.sData).subscribe((res: any) => {
    // debugger;
    this.usersocial = res.data[0];
    // console.log(this.usersocial)
    // this.response = res.userDetail;
    // localStorage.setItem('socialusers', JSON.stringify( this.usersocial));
    // console.log(localStorage.setItem('socialusers', JSON.stringify(this.usersocial)));
    this.socialLogin1(usersocial.id);
    // this._router.navigate(['dashboard']);
  });
}
socialLogin1(userid) {
  var userSet = {
    action: "social_login",
    facebook_id: userid,
  };
  this.userService.social_login(userSet).subscribe((res: any) => {
    
      this._router.navigate(["dashboard"]);
    // this.response = res.userDetail;
    // localStorage.setItem('socialusers', JSON.stringify( this.usersocial));
    // console.log(localStorage.setItem('socialusers', JSON.stringify(this.usersocial)));
    //  this._router.navigate(['dashboard']);
  });
}

signInWithGoogle(): void {
  // alert()
  // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));

  let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  this.authService
    .signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((userData) => {
      //this will return user data from facebook. What you need is a user token which you will send it to the server
      this.SavesresponseGoogle(userData);
      // this._router.navigate(['dashboard']);
    });
}
SavesresponseGoogle(userInfo: SocialUser) {
  this.sData = {
    action: "register",
    first_name: userInfo.firstName,
    last_name: userInfo.lastName,
    user_name: "",
    email: userInfo.email,
    birthdate: "",
    password: "",
    google_id: userInfo.id,
    facebook_id: "",
    current_package_id: "",
    current_package_name: "",
    current_package_type: "",
    current_package_pay_by_user_id: "",
    master_id: "",
    user_type: "",
    url_slug: "",
  };

  this.userService.register_social(this.sData).subscribe((res: any) => {
    // debugger;
    this.usersocial = res.data[0];
    // console.log(res);
    // console.log(userInfo.id)
    // console.log(this.usersocial)
    // this.response = res.userDetail;
    // localStorage.setItem('socialusers', JSON.stringify( this.usersocial));
    // console.log(localStorage.setItem('socialusers', JSON.stringify(this.usersocial)));
    this.socialLoginGoogle1(userInfo.id);
  });
}
socialLoginGoogle1(userid) {
  var userSet = {
    action: "social_login",
    google_id: userid,
  };
  // console.log(userSet);
  this.userService.social_login(userSet).subscribe((res: any) => {
    // debugger;

    // this._router.navigate(['dashboard']);  

      this._router.navigate(["dashboard"]);
     

    // this.response = res.userDetail;
    // localStorage.setItem('socialusers', JSON.stringify( this.usersocial));
    // console.log(localStorage.setItem('socialusers', JSON.stringify(this.usersocial)));
  });
}
}
