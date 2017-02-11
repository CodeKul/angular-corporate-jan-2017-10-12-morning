import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  user = {
    firstName : '', email : '', password : '', country : ''
  };

  countries = [
    'India', 'Japan', 'Chiana'
  ];

  ngOnInit() {
  }
  onSub(myForm : NgForm) {
   console.log(myForm);
    //console.log(this.user);
  }
}
