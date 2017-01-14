import { Component } from '@angular/core';

@Component({
  selector: 'app-other-one',
  template:`
    <h1> Other One</h1>
    <hr>
  `,
  styles :[`h1 {
    border : 1px solid red;
  }`]
})
export class OtherOneComponent  {

  constructor() { }
}
