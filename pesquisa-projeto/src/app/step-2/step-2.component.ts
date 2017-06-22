import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.css']
})
export class Step2Component implements OnInit {

    contador: number = 2;

  	constructor(public service: StepsService){ }

  	ngOnInit() {
  	}

  	//Function do botao de ação de mostrar Alert, declarada dentro de sua class AppComponent
  	avancarStep(): any {
  		this.service.avancarStep();
      this.contador++;
  	}
}