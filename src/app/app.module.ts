import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageLandingComponent } from './components/page-landing/page-landing.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import { HeaderComponent } from './components/page-landing/header/header.component';
import { WhoAreWeComponent } from './components/page-landing/who-are-we/who-are-we.component';
import { WhatComponent } from './components/page-landing/what/what.component';
import { GalleryComponent } from './components/page-landing/gallery/gallery.component';
import { ThisWeekComponent } from './components/page-landing/this-week/this-week.component';
import { PageCateringMenuComponent } from './components/page-catering-menu/page-catering-menu.component';
import { PageSingleTrayMenuComponent } from './components/page-single-tray-menu/page-single-tray-menu.component';
import { PageGalleryComponent } from './components/page-gallery/page-gallery.component';
import { CateringComponent } from './components/page-landing/catering/catering.component';
import { ContactInfoComponent } from './components/page-landing/contact-info/contact-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageLandingComponent,
    PageNotfoundComponent,
    PageContactUsComponent,
    HeaderComponent,
    WhoAreWeComponent,
    WhatComponent,
    GalleryComponent,
    ThisWeekComponent,
    PageCateringMenuComponent,
    PageSingleTrayMenuComponent,
    PageGalleryComponent,
    CateringComponent,
    ContactInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
