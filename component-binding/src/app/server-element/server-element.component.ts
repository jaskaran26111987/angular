import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Native,
})
export class ServerElementComponent implements OnInit {
  // @Input need to import from @angualar/core
  // @input is decorator
  // start with '@' is decorator
  @Input('a') element: { type:string, name:string, content:string };

  constructor() { }

  ngOnInit() {
  }

}
