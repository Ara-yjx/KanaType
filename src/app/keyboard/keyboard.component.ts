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
    ['あ', 'い', 'う', 'え', 'お'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['や', '', 'ゆ', '', 'よ'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['', '', '', '', ''],
    ['わ', 'を', 'ん', 'ー', ''],
    ['', '', '', '', ''],
  ];

  constructor(layout: LayoutService) {
    this.ls = layout;  
  }

  keyAreaCalc() {
    return {
      'padding': this.ls.gap + 'px',
    }
  }
  
  keyCalc() {
    return {
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px',
      'margin': this.ls.gap + 'px',
    }
  }
  
  keyfloatCalc() {
    return {};
  }

  ngOnInit() {
  }

}
