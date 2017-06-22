import { Injectable } from '@angular/core';

@Injectable()
export class StepsService {

	contador: number = 0;

  	constructor() { }

  	avancarStep(): void {
  		this.contador++;
  	}
}