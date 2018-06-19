import { Injectable } from '@angular/core';
import { LayoutService } from '../layout.service'

@Injectable({
  providedIn: 'root'
})

export class KeyStyle{

  ls: LayoutService;

  constructor(layout: LayoutService) {
    this.ls = layout;
  }

  keyClass() {
    return {
      // 'display': 'flex',
      'width': this.ls.keyWidthV.toString() + 'px',
      'height': this.ls.keyHeightV.toString() + 'px',
      'background-color': '#EEEEEE',
      'border-color': 'black',
      'border-width': '3px',
      'margin': '0',      
    }
  };

  keyPClass() {
    return {
      'font-size': '30px',
      'margin': '0',
    }
  };
}