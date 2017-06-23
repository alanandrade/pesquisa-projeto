import { Injectable } from '@angular/core';

@Injectable()
export class StepsService {

	teste: string = 'texto de exemplo';
	step0: boolean;
	step1: boolean;

  	constructor() { }

  proxStep1(): void {
    this.step0 = false;
    alert(this.step0);
    console.log("status step 0 - " + this.step0);
  }

  msgAlerta(): void {
  	alert('Livro Angular 2 - Google - ' + this.teste);
  }
}