import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output('inEv') myClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked(){
    console.log(`Called Button`);
    this.myClick.emit(new Date().toString());
  }

  onMouseIn(){
    console.log(`mouse entered`);
  }
}
