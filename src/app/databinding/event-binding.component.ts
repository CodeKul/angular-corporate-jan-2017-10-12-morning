import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Input() thirdTextData : string;

  @Output('inEv') myClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked(color : string){
    console.log(`Called Button`);
    this.myClick.emit(this.thirdTextData);
  }

  onMouseIn(){
    console.log(`mouse entered`);
  }
}
