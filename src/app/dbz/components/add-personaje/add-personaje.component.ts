import { Component, EventEmitter, Output} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Output() // Decorador para emitir a un componente padre
  public onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();

  public personaje : Personaje = {
    id: '',
    name : '',
    power : 0
  }

  emitirPersonaje(): void{

    console.log(this.personaje)
    if( this.personaje.name.length === 0) return;

    // De esta manera, emitimos un atributo de tipo personaje.
    this.onNewPersonaje.emit(this.personaje);

    this.personaje = { id: '', name : '', power : 0};

  }

}
