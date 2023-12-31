import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public personajeList: Personaje[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];


  @Output() // Decorador para emitir a un componente padre
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id: string):void {
    this.onDeleteId.emit(id);
  }

}
