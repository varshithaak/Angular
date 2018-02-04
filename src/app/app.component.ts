import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddN: number[] = [];
  evenN: number[] = [];


  OnIntervalFired(firedNumber: number){
    if (firedNumber % 2 === 0){
      this.evenN.push(firedNumber);
    }
      else{
        this.oddN.push(firedNumber);
      }
    }
  }
