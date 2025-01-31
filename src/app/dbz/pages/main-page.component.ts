import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },{
      name: 'Goku',
      power: 9000
    },{
      name: 'Vegeta',
      power: 7500
    }
  ];

  AddCharacter(character: Character): void {
    this.characters.push(character);
  };

  RemoveCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
