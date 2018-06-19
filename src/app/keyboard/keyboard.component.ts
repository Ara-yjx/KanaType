import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

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
  ];
  keyClass: Object;

  constructor() { 
    this.keyClass = {
      'width': '70px',
    }
  }

  ngOnInit() {
  }

}
