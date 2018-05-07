import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { miHttp } from './mihttp.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [miHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
