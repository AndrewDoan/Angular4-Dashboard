import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header.component';
import { DashboardComponent } from './dashboard.component';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports:      [ 
	  BrowserModule,
	  AppRoutingModule
   ],
  declarations: [ AppComponent, NavigationComponent, HeaderComponent, DashboardComponent, UserProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
