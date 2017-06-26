import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Step0Component } from './step-0/step-0.component';
import { HeaderComponent } from './header/header.component';

import { StepsService } from './steps.service';

@NgModule({
  declarations: [
    Step0Component,
    HeaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
