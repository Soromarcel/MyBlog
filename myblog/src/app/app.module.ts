import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeDesAmisComponent } from './liste-des-amis/liste-des-amis.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeDesAmisComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
