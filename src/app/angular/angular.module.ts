import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgMatSearchBarModule } from 'ng-mat-search-bar'; 


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    NgMatSearchBarModule
    
  ],
  exports : [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    NgMatSearchBarModule
  ],
  declarations: []
})
export class AngularModule { }
