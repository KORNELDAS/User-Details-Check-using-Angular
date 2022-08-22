import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppserviceService } from './appservice.service';
//import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcardsComponent } from './allcards/allcards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { DeatilComponent } from './deatil/deatil.component';

@NgModule({
  declarations: [
    AppComponent,
    AllcardsComponent,
    ListComponent,
    HeaderComponent,
    DeatilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
