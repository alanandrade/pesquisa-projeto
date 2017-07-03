import { Component, OnInit } from '@angular/core';

import { AlertaService } from '../alerta.service';

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

  proximo: boolean = true;

  constructor(private service: AlertaService){
  }
  
  ngOnInit() {
  }

  avancarStep1(): void {
    this.step1 = this.proximo; //Ativa proximo Step
    this.step0 = false; //Desativa Step Atual
  }

   avancarStep2(): void {
    this.step2 = this.proximo; //Ativa proximo Step
    this.step1 = false; //Desativa Step Atual
  }

  avancarStep3(): void {
    this.step3 = this.proximo; //Ativa proximo Step
    this.step2 = false; //Desativa Step Atual
  }

   enviarMsg(): void {
    this.service.msgAlerta();
  }
}
