import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h1>
      Interpolation
    </h1>
    <hr>
    <p>Speed : {{speed * 10 }}</p>
    <p>Name : {{name}}</p>
  `,
  styles: []
})
export class InterpolationComponent implements OnInit {

  speed = 10;
  name = 'Android';

  constructor() { }

  ngOnInit() {
  }

}
