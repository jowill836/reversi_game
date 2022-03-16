import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReversiGameEngineService } from '../reversi-game-engine.service';
import { BoardtoString, Board_RO, GameState, getEmptyBoard, Turn } from '../ReversiDefinitions';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlateauComponent implements OnInit {

  @Input() board: Board_RO = getEmptyBoard();
  @Input() turn: Turn = 'Player1';
  @Input()  playable: boolean[][] = new Array(8).map(l=>new Array(8).fill(false));
  @Output() play = new EventEmitter<[number, number]>() ;


  constructor() { }



  ngOnInit(): void {
  }

  PLAY(d:[number, number]): void {
    this.play.emit(d);
    
  }

}
