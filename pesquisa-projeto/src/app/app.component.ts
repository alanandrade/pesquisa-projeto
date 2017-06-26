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


}