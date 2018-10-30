import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';
import { AddlearningplanComponent } from './addlearningplan/addlearningplan.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: 'contribute', component: ContibutorhomeComponent },
  { path: '', redirectTo: 'contribute', pathMatch: 'full' },
  {path: 'questions', component: QuestionsComponent},
  { path: 'addresource', component: AddresourceComponent },
  { path: 'addlearningplan', component: AddlearningplanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
