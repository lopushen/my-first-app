import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent
  ],
  imports: [ // allows to add other modules, custom or from Angular, like http
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // lists all the components
})
export class AppModule { }
