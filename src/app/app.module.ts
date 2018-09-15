import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routingConfiguration } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home';
import { MenuComponent } from '../app/menu/menu';
import { HttpService } from '../app/shared/http.service';



@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      MenuComponent      
  ],
  imports: [
      BrowserModule,
      routingConfiguration   

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
