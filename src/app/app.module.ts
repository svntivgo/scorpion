import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { PiePaginaComponent } from '../app/modules/home/shared/pie-pagina/pie-pagina.component';
import { NavbarComponent } from './modules/home/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
