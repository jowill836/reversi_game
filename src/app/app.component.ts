import { Component } from '@angular/core';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { Board, getEmptyBoard } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor(public RGS: ReversiGameEngineService, private ia: IaService) {
    this.RGS.board;
    
  }

  
}
