import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularModule } from "./angular/angular.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerComponent } from './learner/learner.component';
import { SearchComponent } from './learner/search/search.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LearnerComponent,
    SearchComponent,
    TestComponent
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
