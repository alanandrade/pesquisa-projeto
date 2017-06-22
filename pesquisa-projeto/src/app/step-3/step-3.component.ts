import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.css']
})
export class Step3Component implements OnInit {
	
  	contador: number = 3;

  	constructor(public service: StepsService){ }

  	ngOnInit() {
  	}

}
