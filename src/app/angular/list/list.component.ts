import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Character } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list?:Character[];
  constructor(private starwarsServices:StarwarsService) { }

  ngOnInit(): void {
    this.list = this.starwarsServices.getList();
    console.log(this.list);

  }

}
