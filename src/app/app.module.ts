import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { miHttp } from './mihttp.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [miHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
