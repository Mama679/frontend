import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const appRoutes:Routes =[
  {path:'login',component:LoginComponent},
  {path:'singup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'request-reset-password',component:RequestResetComponent},
  {path:'response-reset-password',component:ResponseResetComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule { }
