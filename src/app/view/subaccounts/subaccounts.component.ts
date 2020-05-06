import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { AunumService } from 'src/app/services/aunumServices';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-subaccounts',
  templateUrl: './subaccounts.component.html',
  styleUrls: ['./subaccounts.component.css']
})
export class SubaccountsComponent implements OnInit {
  public userlist;
  users:any = {};
  model: any = {};
  public editModel;
  url:any={};
  userid = sessionStorage.getItem('userid');
  contact: any;
  addsub = false;
  userdata: any = {};
  contacts: any[] = [];
  userType:any={};
  userTypes:any={};
  currentUser:any={};
  public type: Array<IOption> = [
      
    { value: 't', label: 'teacher' },
    { value: 's', label: 'student' }

];
  constructor(private aunumservices: AunumService,private _route: ActivatedRoute,private contactService: ContactService) {    
    this.userTypes =JSON.parse(sessionStorage.getItem('user_type'));
    this.getAllUser();

   }

  ngOnInit() {
    // this.contactService.getContacts().subscribe((data : any[])=>{
    //   console.log(data);
    //   this.contacts = data;
    //   console.log(this.contacts)
    //   })
    this.currentUser = JSON.parse( sessionStorage.getItem('currentUser')) 
       this.url = 'localhost:4200/#/login/'+this.currentUser.url_slug

       console.log(this.url)
  }


  
  openRegisterModel(user) {

    this.users = user;
  }
  addmodal(){

    this.currentUser = JSON.parse( sessionStorage.getItem('currentUser'))
    var url;
       url = 'localhost:4200/#/login/'+this.currentUser.url_slug
       console.log(url)
    console.log(this.currentUser.url_slug)
    if(this.currentUser.url_slug != null && this.currentUser.url_slug != ""){
      // document.getElementById("openModalUserButton").click();
      this.addsub = true;


    }else{
      document.getElementById("openTypeModal").click();

    }
  }
  // addmodal(){
  //   this.addsub = true;
  // }
  updateSlug() {

    var data = {
     user_id: this.currentUser.id,

     my_id: this.currentUser.id,
     first_name: this.currentUser.first_name,
     last_name: this.currentUser.last_name,
     user_name: this.currentUser.user_name,
     birthdate: this.currentUser.birthdate,
     email: this.currentUser.email,
     password: this.currentUser.password,
     google_id: this.currentUser.google_id,
     facebook_id: this.currentUser.facebook_id,
     current_package_id: "",
     current_package_name: "",
     current_package_type: "",
     current_package_pay_by_user_id: "",
     master_id: this.currentUser.master_id,
     // user_type:"",
     url_slug: this.currentUser.url_slug,
     action: "update",
   }; 
   
   this.aunumservices.registerUpdate(data)
   .subscribe(
     data => {
       var custdetails = data;
       // console.log(data.data.result)
       sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        this.url = 'localhost:4200/#/login/'+this.currentUser.url_slug
       console.log(this.url)
      alert('Slug_Added Successfully')
       // this._router.navigate(['login']);
      //  sessionStorage.setItem("user_type",JSON.stringify(this.userType.user_type)); 

     },
     error => {
       console.log(error);
     });
   console.log(data);
 }

 /* To copy Text from Textbox */
 copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

  getAllUser() {
     var dataget = {
      my_id: this.userid,
      action:"getlist"

    }
    this.aunumservices.getAllUsers(dataget)
      .subscribe(
        response => {
          this.userlist = response.data;
          console.log(response.data)
          var data = response.data;
          var list = [];
          data.forEach(element => {
            if(element.master_id == JSON.parse(sessionStorage.getItem('userid'))){
              list.push(element)
            }
          });
          console.log(list)
          this.userlist = list;
          console.log("sub",this.userlist)
 
  },
  error => {
       console.log(error);
          }
          )
    }

    updateUser(){
      var dataget = {

        user_id : this.users.id,
        my_id: this.userid,       
        action:"update",
        first_name : this.model.first_name,
        last_name : this.model.last_name,
        user_name:this.model.user_name,
        email:this.model.email,
        // this.model.password = data[0].password;
        google_id : "",
        facebook_id:"",
        current_package_id:"",
        current_package_name:"",
        current_package_type :"",
        current_package_pay_by_user_id :"",
        master_id:JSON.parse(sessionStorage.getItem('userid')),
        // user_type : "s",
        url_slug :this.model.url_slug,
        birthdate :this.model.birthdate,
        // created_at : this.model.created_at,
        // updated_at :this.model.upadteddate, 
  
      }
      // console.log(dataget.my_id);
      // console.log(dataget.user_id);
      this.aunumservices.updateuser(dataget)
      .subscribe(
        response => {
       this.getAllUser();
        
        },
        err => {
          console.log(err);
        }
      )
    }

    updateUserdata() {
      var datagetget = {
        user_id : this.users.id,      
        my_id: this.userid,
        action:"getbyid"
       }     
      
      this.aunumservices.updateuserdata(datagetget)
        .subscribe(
          response => {
          this.editcliendataResponse(response.data)
          
          },
          err => {
            console.log(err);
          }
        )
    }

    
    editcliendataResponse(data) {
      // console.log(data);
      this.model.first_name = data[0].first_name;
      this.model.last_name = data[0].last_name;
      this.model.user_name = data[0].user_name;
      this.model.email = data[0].email;
      // this.model.password = data[0].password;
      this.model.google_id = data[0].google_id;
      this.model.facebook_id = data[0].facebook_id;
      this.model.current_package_id = data[0].current_package_id;
      this.model.current_package_name = data[0].current_package_name;
      this.model.current_package_type = data[0].current_package_type;
      this.model.current_package_pay_by_user_id = data[0].current_package_pay_by_user_id;
      this.model.master_id = data[0].master_id;
      this.model.user_type = data[0].user_type;
      this.model.url_slug = data[0].url_slug;
      // this.model.birthdate = data[0].birthdate;
      this.model.birthdate =  new Date(data[0].birthdate).toISOString().split('T')[0];;   

      this.model.created_at = data[0].created_at;
      this.model.upadteddate = data[0].updated_at;
   
      
    }

    deleteuser(){
      var datagetget = {
        user_id : this.users.id,      
        my_id: this.userid,
        action:"delete"
       } 

       console.log(datagetget)
    this.aunumservices.DeleteUser(datagetget)
    .subscribe(response =>{
      this.getAllUser();
      alert("Recode is Deleted")
    },
    err =>{
      alert("not delete")
    }
    )

    }

  
    addAccount() {
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
        master_id:JSON.parse(sessionStorage.getItem('userid')),
        user_type:"s",
        url_slug:this.currentUser.url_slug,
        action:"register"
  
      }
      console.log(data)
      this.aunumservices.registerInsert(data)
        .subscribe(
          data => { 
            var custdetails = data; 
            if(data.status == 0){

              alert('User Not Created')
            }else{

              alert('User Created Successfully')
              this.getAllUser();

            }
            // this._router.navigate(['login']);
           
          },
          error => {
            console.log(error);
          });
    }
}
