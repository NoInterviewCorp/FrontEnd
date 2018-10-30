import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: []
})
export class AngularModule { }
