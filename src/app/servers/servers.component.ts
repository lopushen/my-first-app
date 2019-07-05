import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server Created';
  serverName = 'testServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'The server has been created' + 'Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServer(event: Event) {
    // console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
