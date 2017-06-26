import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-0',
  templateUrl: './step-0.component.html',
  styleUrls: ['./step-0.component.css']
})
export class Step0Component implements OnInit {
	
  step0: boolean = true;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;

  prox0: boolean = false;
  prox1: boolean = true;
  prox2: boolean = true;
  prox3: boolean = true;

  constructor(public service: StepsService){
  }
  
  ngOnInit() {
  }

  avancarStep1(): void {
    this.step1 = this.prox1; //Ativa proximo Step
    this.step0 = false; //Desativa Step Atual
  }

   avancarStep2(): void {
    this.step2 = this.prox2; //Ativa proximo Step
    this.step1 = false; //Desativa Step Atual
  }

  avancarStep3(): void {
    this.step3 = this.prox3; //Ativa proximo Step
    this.step2 = false; //Desativa Step Atual
  }
  
}
