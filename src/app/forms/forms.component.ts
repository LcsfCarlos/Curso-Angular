import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public listComidas: Array<{ comida: string, preco: string }> = [
    { comida: "X-Salada", preco: "10,00 R$" },
    { comida: "X-Bacon", preco: "15,00 R$" },
    { comida: "Coxinha", preco: "20,00 R$" }
  ];

  public submitForm(form: NgForm) {
    console.log(form.value)
    if (form.valid) {
      console.log(form.value)
    }
  }

}
