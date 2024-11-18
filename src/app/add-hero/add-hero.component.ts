import { Component, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { AgGridComponent } from '../ag-grid/ag-grid.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private agGridComponent: AgGridComponent) {}

  add(name: string, heroLevel: string, heroBirthday: string): void {
    name = name.trim();
    if (!name || !heroLevel || !heroBirthday) {
      return;
    }
    // 將 level 轉換為數字
    const level = Number(heroLevel); // 轉換為數字

    // 將 birthday 轉換為 Date 物件
    const birthday = new Date(heroBirthday); // 轉換為 Date

    this.heroService.addHero({ name, level, birthday } as Hero).subscribe(
      (hero) => {
        // this.heroAdded.emit(hero);
        this.agGridComponent.onHeroAdded(hero);
        // this.heroes.push(hero);
      },
      (error) => {
        console.error('新增英雄失敗', error);
      }
    );
  }
}
