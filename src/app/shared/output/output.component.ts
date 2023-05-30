import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Luiz Carlos", idade: 29 },
    { nome: "Bob", idade: 45 },
    { nome: "Dean", idade: 36 },

  ]

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
