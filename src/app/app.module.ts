import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularModule} from './angular/angular.module';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';
import { AddlearningplanComponent } from './addlearningplan/addlearningplan.component';
import { AddresourceComponent } from './addresource/addresource.component'


@NgModule({
  declarations: [
    AppComponent,
    ContibutorhomeComponent,
    AddlearningplanComponent,
    AddresourceComponent
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
