import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.css']
})
export class Step1Component implements OnInit {

	step1: boolean = false;

	constructor(public service: StepsService){ }
  
	ngOnInit() {
	}
}