import { approutes } from './app.router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AgmCoreModule } from '@agm/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {GooglePlaceModule} from "angular2-google-place"
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyridesComponent } from './myrides/myrides.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MyridesComponent
  ],
  imports: [
    BrowserModule,GooglePlaceModule, FlexLayoutModule, FormsModule,ReactiveFormsModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtJiZNyJKMI62UOuu2ucMKr7Vrd5y2-Tg'
    }),BrowserAnimationsModule,approutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
