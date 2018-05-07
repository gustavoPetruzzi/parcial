import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { unHttpservice } from './un-http.service';
import { PersonasService } from './personas.service';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [unHttpservice, PersonasService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
