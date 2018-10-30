import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from './angular/angular.module';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { TabsComponent } from './landing/tabs/tabs.component';
import { ScrollingContainerComponent } from './scrolling-container/scrolling-container.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { LearnComponent } from './learn/learn.component';
import { ContributeComponent } from './contribute/contribute.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    TabsComponent,
    ScrollingContainerComponent,
    LearningPlanComponent,
    LearnComponent,
    ContributeComponent
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
