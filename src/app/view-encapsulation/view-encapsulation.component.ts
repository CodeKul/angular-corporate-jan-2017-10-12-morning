import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template:`
    <h1> codekul.com</h1>
    <div>
    <app-view-in>
      <input type="text"/> 
      <input type="button" value="first"/> 
    </app-view-in>
    </div>

    <div>
    <app-view-in>
      <input type="button" value="second"/> 
    </app-view-in>
    </div>
  `,
  styles: [`
    h1 {
      border : 1px solid red;
    }
  `],
  encapsulation : ViewEncapsulation.Emulated
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
