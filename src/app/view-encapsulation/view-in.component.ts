import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-in',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class ViewInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
