import { Injectable } from '@angular/core';

@Injectable()
export class StepsService {

	step0: boolean;
	step1: boolean;
	step2: boolean;
	step3: boolean;

  prox0: boolean = false;
  prox1: boolean = true;
  prox2: boolean = true;
  prox3: boolean = true;

  	constructor() { }

  proxStep1(): any {
    console.log(this.step1);
  }

  proxStep2(): any {
    console.log(this.step1);
  }

  proxStep3(): any {
    console.log(this.step1);
  }
}