import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { TextdisplayComponent } from './textdisplay/textdisplay.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyComponent } from './key/key.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TextdisplayComponent,
    KeyboardComponent,
    KeyComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // NgZorroAntdModule.forRoot()
    // NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
