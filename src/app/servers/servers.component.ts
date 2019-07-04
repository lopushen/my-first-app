import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'The server has been created';
  }

  onUpdateServer(event: Event) {
    // console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
