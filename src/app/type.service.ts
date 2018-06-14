import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  fullText: string;
  typed: string;

  texts: string[];


  constructor() { 
    // this.fullText = this.texts[0];
    this.texts = [
      '日本のたこは、八世紀ごろ中国から伝わったといわれている。十七世紀になると、子供の正月遊びとして流行するようになった'
    ];
  }

  init(textIndex: number) {
    this.fullText = this.texts[textIndex];
    this.typed = '';
    this.typed = '日本のたこは、八世紀'; // DEV
  }

  type(char: string) {
    this.typed += char;
  } 

}
