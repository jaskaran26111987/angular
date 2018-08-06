import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  
  @Output() serverCreated = new EventEmitter<{ serverContent: string,  serverName: string }>();
  @Output('bpCreated') bulePrintCreated = new EventEmitter<{ bulePrintName: string, bulePrintContent: string}>();

  constructor() { }

  ngOnInit() {
  }
  
  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent:this.newServerContent
      }
    );
  }

  onAddBlueprint() {
    this.bulePrintCreated.emit(
      {
        bulePrintName:this.newServerName, 
        bulePrintContent: this.newServerContent
      }
    );
  }
}
