import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {
  sw: number;
  sh: number;

  // keyboardWidth: number; 
  // keyboardWidthV: number;
  keyboardHeightV: number;
  gap: number; // TO SET
  keyWidth: number; 
  keyWidthV: number;
  keyHeightV: number;
  keyRatio: number; // TO SET

  constructor() { 
    this.keyWidth = 0.17;
    this.keyRatio = 1.3;
    this.gap = 3; //px
    
    this.sh = screen.height;
    this.sw = screen.width;

    this.keyWidthV = this.keyWidth * this.sw;
    this.keyHeightV = this.keyWidthV / this.keyRatio;
    this.keyboardHeightV = this.keyHeightV * 4;

    console.log(this);
  }


  createStyle() {

  }


}
