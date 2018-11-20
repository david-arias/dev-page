import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Pages
import { HomeComponent } from './pages/home/home.component';


// components
import { MainHomeBannerOneComponent } from './components/mainHomeBanner/main-home-banner-one/main-home-banner-one.component';

import { LeadsFormOneComponent } from './components/leadsForm/leads-form-one/leads-form-one.component';

import { CareersHomeOneComponent } from './components/careersHome/careers-home-one/careers-home-one.component';

import { StatsHomeOneComponent } from './components/statsHome/stats-home-one/stats-home-one.component';

import { NewsHomeOneComponent } from './components/newsHome/news-home-one/news-home-one.component';

import { MapHomeOneComponent } from './components/mapHome/map-home-one/map-home-one.component';

import { RegularBannerOneComponent } from './components/regularBanner/regular-banner-one/regular-banner-one.component';

import { SocialFeedOneComponent } from './components/socialFeed/social-feed-one/social-feed-one.component';

import { TestimonialOneComponent } from './components/testimonial/testimonial-one/testimonial-one.component';

import { AlliancesOneComponent } from './components/alliances/alliances-one/alliances-one.component';

// shared
import { TopNavOneComponent } from './shared/topNav/top-nav-one/top-nav-one.component';
import { FooterOneComponent } from './shared/footer/footer-one/footer-one.component';
import { LeadFormOneComponent } from './shared/leadForm/lead-form-one/lead-form-one.component';


// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';

// masonry
import { NgxMasonryModule } from 'ngx-masonry';

// leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// angular maps
import { AgmCoreModule } from '@agm/core';
import { TopNavTwoComponent } from './shared/topNav/top-nav-two/top-nav-two.component';
import { LoaderOneComponent } from './shared/loader/loader-one/loader-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHomeBannerOneComponent,
    LeadsFormOneComponent,
    CareersHomeOneComponent,
    StatsHomeOneComponent,
    NewsHomeOneComponent,
    MapHomeOneComponent,
    RegularBannerOneComponent,
    SocialFeedOneComponent,
    TestimonialOneComponent,
    AlliancesOneComponent,
    TopNavOneComponent,
    FooterOneComponent,
    LeadFormOneComponent,
    TopNavTwoComponent,
    LoaderOneComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,

    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule,

    NgxMasonryModule,

    LeafletModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwk55I036JjTDglOx-u7nh6aU9CziPwxU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
