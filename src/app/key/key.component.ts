import { Component, OnInit, Input } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from '../type.service'

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() keyValue: string[];
  s: TypeService;

  constructor(service: TypeService) { 
    this.s = service;
  }

  ngOnInit() {
  }

  onClick() {
    this.s.type(this.keyValue[0]);
  }

  onMouseEnter() {
    console.log("onMouseEnter");
  }

  onMouseDown() {
      console.log("onMouseDown");
    }
  onMouseUp() {
    console.log("onMouseUp");
  }
  
  onTouchStart() {
    console.log("onTouchStart");
  }
}
