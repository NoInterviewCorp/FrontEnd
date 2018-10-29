import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';
import { AddlearningplanComponent } from './addlearningplan/addlearningplan.component';
import { AddresourceComponent } from './addresource/addresource.component';

const routes: Routes = [
  {path: '', component: ContibutorhomeComponent},
  {path:'addresource', component: AddresourceComponent},
  {path:'addlearningplan', component: AddlearningplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
