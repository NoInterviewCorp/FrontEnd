import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'profile', component: LandingComponent
  },
  {
    path: '', redirectTo: 'profile', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
