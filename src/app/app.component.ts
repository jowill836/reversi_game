import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { Board, getEmptyBoard, cToString, TileCoords, Turn, GameState } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playableposition : TileCoords[] = [];
  cToString = cToString;
  canPlayy : boolean[][] =[];


  
  constructor(public RGS: ReversiGameEngineService, private ia: IaService) {
    this.RGS.board;
    this.RGS.turn;    
    this.RGS.gameStateObs.subscribe(gs => {
      this.canPlayy = gs.board.map(l => l.map (() => false));
      RGS.whereCanPlay().forEach(([i,j]) => this.canPlayy[i][j] = true);
    })
  }
  // get obs() : Observable<GameState>{
  //   return this.RGS.gameStateObs
  // }

  // isPlayable(i: number, j:number): boolean {
  //   this.playableposition = [...this.RGS.whereCanPlay()];
  //   return !!this.playableposition.find(pos => pos[0] === i && pos[1] === j);
  // }

  getNumberPions(turn : Turn): number{
    let nb : number = 0;
    for(let i = 0; i < this.RGS.board.length; i++){
      nb += this.RGS.board[i].filter(player => player === turn).length; 
    }
    
    return nb;
  }


  


  
}
