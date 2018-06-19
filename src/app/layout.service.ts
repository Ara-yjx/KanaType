import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sw: number;
  sh: number;

  keyWidth: number;
  keyAround: number;


  constructor() { 
    this.sh = screen.height;
    this.sw = screen.width;
    this.keyWidth = 0.25;

    this.keyAround = (1 - this.keyWidth) / 3;

  }


  createStyle() {
    
  }


}
