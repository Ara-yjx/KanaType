import { Component, OnInit, Input } from '@angular/core';
import { TypeService } from '../type.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TypeService],
})
export class MainComponent implements OnInit {

  @Input() fullText: string;

  typed = '';
  constructor() { }

  ngOnInit() {
    this.fullText = '日本のたこは、八世紀ごろ中国から伝わったといわれている。十七世紀になると、子供の正月遊びとして流行するようになった';
    this.typed = '日本のたこは、八世紀ごろ中国から';
    return;
  }

  type() {
    console.log('type');
  }
}
