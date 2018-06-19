import { Injectable } from '@angular/core';
import { LayoutService } from '../layout.service'

@Injectable({
  providedIn: 'root'
})

export class MainStyle{

  ls: LayoutService;

  constructor(layout: LayoutService) {
    this.ls = layout;
  }

  keyboardCalc() {
    return {
      "height": this.ls.keyboardHeightV,
    }
  }
}
