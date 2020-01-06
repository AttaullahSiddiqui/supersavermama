import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { P404Component } from './error/404.component';
import { AppRoutingModule } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from "ngx-bootstrap/modal";
import { MenuComponent } from './menu/menu.component';
import { OwlModule } from 'ngx-owl-carousel';
import {
  AppHeaderModule,
  AppSidebarModule,
} from '@coreui/angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    OwlModule,
    AppHeaderModule,
    // AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    P404Component,
    MenuComponent
  ],
  providers: [
    Title
    // useClass: HashLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
