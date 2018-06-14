import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from '../type.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TypeService],
})
export class MainComponent implements OnInit {

  @Input() textIndex: number;
  s: TypeService;

  constructor(service: TypeService) {
    this.s = service;
  }

  ngOnInit() {
    this.textIndex = 0; // DEV
    this.s.init(this.textIndex);
  }

  type() {
  }
}
