import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { TypeService } from '../type.service'

@Component({
  selector: 'app-textdisplay',
  templateUrl: './textdisplay.component.html',
  styleUrls: ['./textdisplay.component.css']
})
export class TextdisplayComponent implements OnInit {
  // @Input() fullText: string;
  // @Input() typed: string;
  s: TypeService;

  constructor(service: TypeService) {
    this.s = service;
  }

  ngOnInit() {
  }

}
