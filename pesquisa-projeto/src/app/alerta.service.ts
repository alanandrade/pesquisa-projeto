import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }

  msgAlerta(): void{
    alert("Suas respostas foram enviadas com sucesso");
  }

}
