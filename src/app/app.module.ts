import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
	  BrowserModule,
   ],
  declarations: [ AppComponent, NavigationComponent, HeaderComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
