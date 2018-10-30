import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'profile', component: LandingComponent},
  // {path:'home',component:HomeComponent},
  // {path: '', redirectTo: 'profile', pathMatch:'full'},
  // {path:'sign-in', component:SignInComponent},
  // {path:'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
