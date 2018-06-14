import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
