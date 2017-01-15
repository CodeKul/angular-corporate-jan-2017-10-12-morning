import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  backColorParent : string = '#ff0000';
  incomingThirdData : string;
  thirdInData : string = 'red';

  constructor() { }

  ngOnInit() {
  }

  onInComingBtnEvent(color : string){
    this.backColorParent = color;
    console.log(`Incoming Event Parent ${color}`);
  }

}
