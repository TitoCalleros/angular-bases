import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:        string = 'ironman';
  public age:         number = 45;
  public nameChanged: boolean = false;
  public ageChanged:  boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(newName: string): void {
    this.name = newName;
    this.nameChanged = true;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
    this.ageChanged = true;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    this.ageChanged = false;
    this.nameChanged = false;
  }
}
