import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

	valorClassBinding: boolean = false;
	alerta: boolean = false;

  	constructor() { }

  	msgAlerta(): void{
    	this.valorClassBinding = true;
    	this.alerta = true;
  	}

}
