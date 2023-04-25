import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Game } from './types';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'api/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string | null): Observable<Game> {
    return this.http.get<Game>(this.gamesUrl + `/${gameId}`);
  }

  createGame(game: Game) {
    console.log(game);

    this.http.post(this.gamesUrl, game).pipe(
      tap(response => { return response }),
      catchError(error=>{
        console.error(error)
        return throwError(() => new Error(error));;
      })
    ).subscribe()
  }

  updateGame(game: Game, gameId:string):Observable<any> {
    console.log(game);
    return this.http.put(this.gamesUrl + `/${gameId}`, game);
  }

  deleteGame(gameId: string):Observable<any> {
    console.log(gameId);
    return this.http.delete(this.gamesUrl + `/${gameId}`);
  }
}
