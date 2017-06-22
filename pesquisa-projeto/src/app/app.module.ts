import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StepsService } from './steps.service';
import { AppComponent } from './app.component';
import { Step0Component } from './step-0/step-0.component';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Step0Component,
    Step1Component,
    Step2Component,
    Step3Component,
    HeaderComponent
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
