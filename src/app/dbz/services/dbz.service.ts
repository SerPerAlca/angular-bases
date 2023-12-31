
import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid);
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] =  [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },{
    id: uuid(),
    name: 'Songoanda',
    power: 1200
  }];

  addPersonaje(personaje: Personaje): void {

    //Con "...personaje" cogemos todas las propiedades que recibimos y creamos el objeto nuevo.
    const newPersonaje : Personaje = { ...personaje, id: uuid() }
    console.log('Nuevo personaje: ' + newPersonaje.id + ' ' + personaje.name);

    this.personajes.unshift(personaje);
  }


  onDeletePersonajeById( index: string):void {
    this.personajes = this.personajes.filter( personaje => personaje.id !== index);
  }

}
