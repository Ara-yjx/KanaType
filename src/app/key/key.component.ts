import { Component, OnInit, Input } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from '../type.service'
import { LayoutService } from '../layout.service'
import { KeyStyle } from './key.component.style'

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() keyValue: string[];
  @Input() swipe:string;
  ts: TypeService;
  ls: LayoutService;
  ks: KeyStyle;


  constructor(type: TypeService, layout: LayoutService, key:KeyStyle) { 
    this.ts = type;
    this.ls = layout;
    this.ks = key;

  }

  ngOnInit() {
  }

  onClick() {
    this.ts.type(this.keyValue[0]);
  }

  onMouseEnter() {
    // console.log("onMouseEnter");
  }

  onMouseDown() {
    // console.log("onMouseDown");
  }
  onMouseUp() {
    // console.log("onMouseUp");
  }
  
  onTouchStart(ev) {
    console.log("onTouchStart");
    console.log(ev.changedTouches[0].pageX);
    console.log(ev.changedTouches[0].pageY);
    let p0x: number = ev.changedTouches[0].pageX;
    var p0y: number = ev.changedTouches[0].pageY;
    this.ts.type(p0x.toString());
    this.ts.type(p0y.toString());
    

    ev.preventDefault();
    ev.stopPropagation();
  }

  onTouchMove(ev) {
    // console.log("onTouchMove");
    // console.log(ev.changedTouches[0].pageX);
    // console.log(ev.changedTouches[0].pageY); 
    ev.preventDefault();
    ev.stopPropagation();
  }
  
  onTouchEnd(ev) {
    console.log("onTouchEnd");
    console.log(ev.changedTouches[0].pageX);
    console.log(ev.changedTouches[0].pageY); 
    ev.preventDefault();
    ev.stopPropagation();
  }
}
