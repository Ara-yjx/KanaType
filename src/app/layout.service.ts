import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {
  sw: number;
  sh: number;

  keyWidth: number; // SET
  keyWidthV: number;
  keyHeightV: number;
  keyRatio: number;
  keyAround: number;
  keyAroundV: number;

  constructor() { 
    this.keyWidth = 0.2;
    this.keyRatio = 1.2 ;

    this.sh = screen.height;
    this.sw = screen.width;
    this.keyWidthV = this.keyWidth * this.sw;
    this.keyHeightV = this.keyWidthV / this.keyRatio;
    this.keyAround = (1 - this.keyWidth) / 3;
    this.keyAroundV = this.keyAround * this.sw;
  }


  createStyle() {

  }


}
