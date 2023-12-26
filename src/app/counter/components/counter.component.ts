import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{contador}}</h3>
    <button (click)="incrementarPor(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementarPor(-1)">-1</button>
  `
})
export class CounterComponent {

  public contador: number = 10;

  incrementarPor( value: number ) : void{
    this.contador += value;
  }

  reset() : void {
    this.contador = 10;
  }

}
