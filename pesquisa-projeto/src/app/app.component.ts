import { Component } from '@angular/core';

import { StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public service: StepsService){ }

  avancarStep1(): void {
  	this.service.proxStep1();
  }

  avancarStep2(): void {
    this.service.proxStep2();
  }

  avancarStep3(): void {
    this.service.proxStep3();
  }
}