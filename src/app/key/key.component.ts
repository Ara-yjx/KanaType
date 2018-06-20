import { Component, OnInit, Input } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from '../type.service'
import { LayoutService } from '../layout.service'

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
  showFloat: boolean;
  keyCalcObj: object;

  constructor(type: TypeService, layout: LayoutService) { 
    this.ts = type;
    this.ls = layout;
    this.showFloat = false;
    this.keyCalcObj = this.keyCalc();    
    
    // console.log(this.style);
  }

  ngOnInit() {
  }

  keyCalc() {
    return {
      // 'display': 'flex',
      'width': this.ls.keyWidthV.toString() + 'px',
      'height': this.ls.keyHeightV.toString() + 'px',
      'background-color': 'white',
      'border-color': 'black',
      'border-width': '3px',
      'margin': '0',      
    }
  };

  keyPCalc() {
    return {
      'font-size': this.ls.fontSize + 'px',
      'margin': '0',
    }
  };

  onClick() {
    this.ts.type(this.keyValue[0]);
  }

  onTouchStart(ev) {
    console.log('onTouchStart');
    console.log(ev.changedTouches[0].pageX);
    console.log(ev.changedTouches[0].pageY);
    let p0x: number = ev.changedTouches[0].pageX;
    var p0y: number = ev.changedTouches[0].pageY;
    this.ts.type(p0x.toString());
    this.ts.type(p0y.toString());
    this.showFloat = true;  
    this.keyCalcObj['background-color'] = 'grey';

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
    this.showFloat = false;  
    this.keyCalcObj['background-color'] = 'white';
    
    
    ev.preventDefault();
    ev.stopPropagation();
  }
}
