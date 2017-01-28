import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mobiles = [];
  constructor() {
    this.mobiles.push('Android');
    this.mobiles.push('Nokia');
    this.mobiles.push('Samsung');
    this.mobiles.push('Apple');
    this.mobiles.push('Windows');
  }

  ngOnInit() {
  }

}
