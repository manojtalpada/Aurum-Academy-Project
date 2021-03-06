import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { LogoutComponent } from './view/logout/logout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { MasterService, AuthenticationService } from './services';
import { AuthGuard } from './guards';
import { RoleGuardService } from './guards/roleGuardService';
import { AunumService } from './services/aunumServices';
import { UserService } from './services/user.service';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helper';
import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
import { ModalModule, AlertModule, TabsModule } from 'ngx-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { SocialLoginModule, AuthService } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
// import { AngularMarkdownEditorModule } from 'src/lib/angular-markdown-editor';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SelectModule } from 'ng-select';
import { DataTableModule } from 'angular2-datatable'; 
import { CustomFormsModule} from 'ng2-validation';
import { SubaccountsComponent } from './view/subaccounts/subaccounts.component'
import { ViewUserFilterPipe } from './view/subaccounts/datafilterpipe';
import { StudentDashboardComponent } from './view/student-dashboard/student-dashboard.component';
 
import { ClipboardModule } from 'ngx-clipboard';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('17498439726-opbu80ciirqrgtml7tikfu5l3pudenfu.apps.googleusercontent.com')
    // provider: new GoogleLoginProvider('17498439726-k387trbd3jkrtahsrgm8r32p5a84054l.apps.googleusercontent.com')

  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2256700081100205')
  },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SubaccountsComponent,
    ViewUserFilterPipe,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    CommonModule, 
    FormsModule,   
    CustomFormsModule,
    // SocialLoginModule,
    BsDropdownModule,
    DataTableModule,   
    SelectModule, 
    ReactiveFormsModule,
    AngularEditorModule,
    ButtonsModule.forRoot(), 
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    CKEditorModule,
    ClipboardModule
 
  ],
  providers: [
    MasterService,
    AuthenticationService,
    AuthGuard,
    RoleGuardService,
    AuthService,
    AunumService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
   {
   provide: LocationStrategy,
   useClass: HashLocationStrategy
 },{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
