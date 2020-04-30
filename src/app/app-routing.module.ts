import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { AuthGuard } from './guards';
import { MainPageComponent } from './view/main-page/main-page.component';
import { LogoutComponent } from './view/logout/logout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeaderComponent } from './view/header/header.component';

var userType = sessionStorage.getItem('user_type');
// console.log(userType)

const routes: Routes = [

  {path:"login",component: LoginComponent},
  {path:"login/:slug_url",component: LoginComponent},

  {path :"header",component:HeaderComponent,canActivate: [AuthGuard],},  
  {path:"register",component: RegisterComponent},
  {path:"logout",component:LogoutComponent,canActivate: [AuthGuard],},
  {path :"main-page",component:MainPageComponent},
  {path :"dashboard",component:DashboardComponent,canActivate: [AuthGuard]},
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  // { path: '**', redirectTo: ''}
  {path:':url_slug/dashboard',component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
