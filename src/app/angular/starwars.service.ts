import { Injectable } from '@angular/core';
import { Character } from './types';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  list: Character[] = [
    {
      id: 1,
      name: 'Luke Skywalker',
    },
    {
      id: 2,
      name: 'C-3PO',
    },
    {
      id: 3,
      name: 'R2-D2',
    },
    {
      id: 4,
      name: 'Darth Vader',
    },
    {
      id: 5,
      name: 'Leia Organa',
    },
    {
      id: 6,
      name: 'Owen Lars',
    },
    {
      id: 7,
      name: 'Beru Whitesun lars',
    },
    {
      id: 8,
      name: 'R5-D4',
    },
    {
      id: 9,
      name: 'Biggs Darklighter',
    },
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
    },
  ];

  getList(): Character[] {
    return this.list;
  }
}
