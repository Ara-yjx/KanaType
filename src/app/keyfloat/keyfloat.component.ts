import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from '../type.service'
import { LayoutService } from '../layout.service'

@Component({
  selector: 'app-keyfloat',
  templateUrl: './keyfloat.component.html',
  styleUrls: ['./keyfloat.component.css']
})

export class KeyfloatComponent implements OnInit {

  @Input() keyValue: string[];
  ts: TypeService;
  ls: LayoutService;

  constructor(typeService: TypeService, layoutService: LayoutService) { 
    this.ts = typeService;
    this.ls = layoutService;
  }

  ngOnInit() {
  }

  anchorCalc() {
    return {
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px',
      // 'margin': this.ls.gap + 'px',
    }
  }

  centerCalc() {
    return {
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px', 
    }
  }

  leftCalc() {
    return {
      'left': '-' + this.ls.keyWidthV + 'px',
      'top': '0',
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px', 
    }
  }

  upCalc() {
    return {
      'left': '0',
      'top': '-' + this.ls.keyHeightV + 'px',
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px', 
    }
  }

  rightCalc() {
    return {
      'left': this.ls.keyWidthV + 'px',
      'top': '0',
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px', 
    }
  }

  downCalc() {
    return {
      'left': '0',
      'top': this.ls.keyHeightV + 'px',  
      'width': this.ls.keyWidthV + 'px',
      'height': this.ls.keyHeightV + 'px',     
    }
  }

  keyPCalc() {
    return {
      'font-size': this.ls.fontSize + 'px',
    }
  }
}
