import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';

const routes: Routes = [
  {path: '', component: ContibutorhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
