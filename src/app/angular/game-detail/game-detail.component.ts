import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute,
    private router:Router) { }
  game: Game={
    id: 0 ,
    name :"",
    description : ""
  };
  idGame!: String;
  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.route.paramMap.subscribe(params => {
      var id = params.get("gameId");
      console.log(id);
      this.getGame(id);
    })
  }
  getGame(gameId: string | null) {
    this.gameService.getGameById(gameId).subscribe(
      game => {
        this.setGame(game);
        console.log(game);
      }
    )
  }
  setGame(game: Game) {
    this.game = game;
  }
  actualizar(id:number){

    this.gameService.updateGame(this.game, id.toString()).subscribe();
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
