import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {

  constructor(private dbzService: DbzService) {}


  public get characters() : Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }


}
