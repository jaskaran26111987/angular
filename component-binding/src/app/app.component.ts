import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name : "testserver", content: 'just a test'}]
  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData: { serverContent: string,  serverName: string }) {
    this.serverElements.push({
       type:'server',
       name: serverData.serverName,
       content: serverData.serverContent
    });
  }

  onAddBlueAdded(buldData: { bulePrintName: string, bulePrintContent: string}) {
    this.serverElements.push({
      type: 'blueprints',
      name: buldData.bulePrintName,
      content: buldData.bulePrintContent
    });
  }
}
