import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {
  name!: string;
  description!: string;
  games!: Game[];
  id:number = 0;
  constructor(private gameService: GameService, private router: Router,
    private route: ActivatedRoute, private inMemory: InMemoryDataService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
      this.generarId(this.games)
    });
  }
  generarId(games:Game[]) {
    this.id= this.inMemory.genId(games);
  }
  agregarNuevoJuego() {
    console.log(this.name, this.description);
    let game: Game = {
      id:this.id,
      name: "",
      description: ""
    };
    game.name = this.name;
    game.description = this.description;
    this.gameService.createGame(game);
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
