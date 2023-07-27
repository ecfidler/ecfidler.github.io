import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './documentation/header/header.component';
import { Project1Component } from './documentation/project1/project1.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollToTopComponent } from './documentation/scroll-to-top/scroll-to-top.component';
import { Project2Component } from './documentation/project2/project2.component';
import { Project3Component } from './documentation/project3/project3.component';
import { PictureFrameComponent } from './documentation/picture-frame/picture-frame.component';
import { UiHomeComponent } from './documentation/ui-home/ui-home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ColorLabelComponent } from './home/color-label/color-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Project1Component,
    HomeComponent,
    PageNotFoundComponent,
    ScrollToTopComponent,
    Project2Component,
    Project3Component,
    PictureFrameComponent,
    UiHomeComponent,
    DocumentationComponent,
    ColorLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
