import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxUsefulSwiperModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
