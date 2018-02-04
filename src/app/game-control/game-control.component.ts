import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
 @Output() IntervalFired = new EventEmitter<number>();
 interval;
 lastNum = 0;

 OnStartGame(){
	 this.interval = 	setInterval(() => {
	 		this.IntervalFired.emit(this.lastNum +1);
	 		this.lastNum++;
	 	}, 1000);
 	}

OnStopGame(){
	clearInterval(this.interval);
}
 	NoEven(){

 	}

}
