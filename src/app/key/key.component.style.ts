import { Injectable } from '@angular/core';
import { LayoutService } from '../layout.service'

@Injectable({
  providedIn: 'root'
})

export class KeyStyle{
  keyClass() {
    return {
      "display": "flex",
      "width": "100px",
      "height": "100px",
      "background-color": "#CCCCCC",
      "border-color": "grey",
      "align-items": "center",
      "justify-content": "space-around",
      "margin": "5px",      
    }
  };

  keyPClass() {
    return {
      "font-size": "40px",
    }
  };
}