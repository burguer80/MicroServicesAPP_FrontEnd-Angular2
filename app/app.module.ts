import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import {DocumentsComponent } from './documents/documents.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    HomepageComponent,
    AppComponent,
    DocumentsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
