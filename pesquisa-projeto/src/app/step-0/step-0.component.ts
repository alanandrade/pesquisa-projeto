import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-0',
  templateUrl: './step-0.component.html',
  styleUrls: ['./step-0.component.css']
})
export class Step0Component implements OnInit {
	
  step0: boolean = true;

  constructor(public service: StepsService){
  }
  
  ngOnInit() {
  }

  avancarStep1(): void {
    this.service.proxStep1();
  }

  enviarMsg(): void {
    this.service.msgAlerta();
  }
}
