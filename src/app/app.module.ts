import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule}from '@angular/material/toolbar'

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component'
import{MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    DialogComponent
  ],
  imports: [
 
  BrowserModule,
  CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    
  
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
