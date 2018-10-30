import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularModule} from './angular/angular.module';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';
import { AddlearningplanComponent } from './addlearningplan/addlearningplan.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { ResourceformComponent } from './resourceform/resourceform.component';
import { QuestionformComponent } from './questionform/questionform.component';
import { QuestionsComponent } from './questions/questions.component'


@NgModule({
  declarations: [
    AppComponent,
    ContibutorhomeComponent,
    AddlearningplanComponent,
    AddresourceComponent,
    ResourceformComponent,
    QuestionformComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
