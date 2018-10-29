import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularModule } from "./angular/angular.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerComponent } from './learner/learner.component';
import { HeaderComponent } from './learner/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnerComponent,
    HeaderComponent
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
