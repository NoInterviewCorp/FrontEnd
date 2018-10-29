import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularModule } from "./angular/angular.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
