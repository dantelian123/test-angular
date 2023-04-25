import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements OnInit {
  games?: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.listarJuegos()
  }
  eliminar(id: number) {
    this.gameService.deleteGame(id.toString()).subscribe(
    );
    this.listarJuegos();
  }
  listarJuegos() {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
}
