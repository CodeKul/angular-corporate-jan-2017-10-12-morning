import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  thirdData  : string;
  @Output() newData  = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onBlur(act : string) {
    this.thirdData = act;
    this.newData.emit(this.thirdData);
  }
}
