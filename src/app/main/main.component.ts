import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from '../type.service'
import { MainStyle } from './main.component.style'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TypeService],
})
export class MainComponent implements OnInit {

  @Input() textIndex: number;
  ls: TypeService;
  style: MainStyle;

  constructor(type: TypeService, style: MainStyle) {
    this.ls = type;
    this.style = style;
  }

  ngOnInit() {
    this.textIndex = 0; // DEV
    this.ls.init(this.textIndex);
  }
  
  type() {
  }
}
