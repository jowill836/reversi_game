import { Component } from '@angular/core';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { Board, getEmptyBoard, cToString, TileCoords, Turn } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playableposition : TileCoords[] = [];
  cToString = cToString;
  nombreP1 : number = this.getNumberPions('Player1');
  nombreP2 : number = this.getNumberPions('Player2');


  
  constructor(public RGS: ReversiGameEngineService, private ia: IaService) {
    this.RGS.board;
    this.RGS.turn;
    this.playableposition = [...this.RGS.whereCanPlay()];
    
    
    
  }

  isPlayable(i: number, j:number): boolean {
    return !!this.playableposition.find(pos => pos[0] === i && pos[1] === j);
  }

  getNumberPions(turn : Turn): number{
    let nb : number = 0;
    for(let i = 0; i < this.RGS.board.length; i++){
      const r = this.RGS.board[i].filter(player => player === turn)
      nb += r.length; 
    }
    
    return nb;
  }


  


  
}
