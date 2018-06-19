import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  ls: LayoutService;
  
  keys = [
    ['あ'],
    ['か'],
    ['さ'],
    ['た'],
    ['な'],
    ['は'],
    ['ま'],
    ['や'],
    ['ら'],
    [''],
    ['わ'],
    [''],    
  ];

  constructor(layout: LayoutService) {
    this.ls = layout;  
  }

  keyCalc() {
    return {
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px',
      'margin': this.ls.gap + 'px',
    }
  }
  keyAreaCalc() {
    return {
      'padding': this.ls.gap + 'px',
    }
  }
  
  ngOnInit() {
  }

}
