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

  containerClass() {
    return {
      "height": this.ls.keyHeightV * 4 + "px",
    }
  }
}
