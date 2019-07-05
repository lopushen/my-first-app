import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'ONLINE';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'ONLINE' ? 'green' : 'red';
  }
}
