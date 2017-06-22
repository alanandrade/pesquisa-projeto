import { Component, OnInit } from '@angular/core';

import { StepsService } from '../steps.service';

@Component({
  selector: 'app-step-0',
  templateUrl: './step-0.component.html',
  styleUrls: ['./step-0.component.css']
})
export class Step0Component implements OnInit {
	
  contador: number = 0;

  constructor(public service: StepsService){ }
  
  ngOnInit() {
  }

  //Function do botao de ação de mostrar Alert, declarada dentro de sua class AppComponent
  avancarStep() {
  	this.service.avancarStep();
    this.contador ++;
  }
}
