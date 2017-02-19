import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  myOs = 'Android';
  date = new Date();
  money = 100;

  constructor() { }

  ngOnInit() {
  }

}
