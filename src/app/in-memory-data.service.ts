import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', level: 0, birthday: new Date(2020, 10, 15) },
      { id: 13, name: 'Bombasto', level: 2, birthday: new Date(2023, 10, 15) },
      { id: 14, name: 'Celeritas', level: 0, birthday: new Date(2023, 10, 15) },
      { id: 15, name: 'Magneta', level: 6, birthday: new Date(2023, 10, 15) },
      { id: 16, name: 'RubberMan', level: 4, birthday: new Date(2023, 10, 15) },
      { id: 17, name: 'Dynama', level: 3, birthday: new Date(2023, 10, 15) },
      { id: 18, name: 'Dr. IQ', level: 4, birthday: new Date(2023, 10, 15) },
      { id: 19, name: 'Magma', level: 1, birthday: new Date(2023, 10, 15) },
      { id: 20, name: 'Tornado', level: 2, birthday: new Date(2023, 10, 15) },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
