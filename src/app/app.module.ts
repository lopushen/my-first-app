import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent
  ],
  imports: [ // allows to add other modules, custom or from Angular, like http
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // lists all the components
})
export class AppModule { }
