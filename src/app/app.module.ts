import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import {AngularModule} from './angular/angular.module';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component'


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ContibutorhomeComponent
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
