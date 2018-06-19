import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    var overflowHidden = document.createElement( "style" );
    overflowHidden.type = "text/css";
    // overflowHidden.setAttribute( "data-debug", "Injected by WindowScrolling service." );
    overflowHidden.textContent = 
      `
      body {
          margin: 0;
          top: 0;
          bottom: 0;
      }
      `;
      // overflow: hidden !important;
      

    document.body.appendChild(overflowHidden);


    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.body.appendChild(meta) 
    
    // document.body.setAttribute("scroll", "no");
  }
}
