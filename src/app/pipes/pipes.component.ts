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

  os = ['Mango', 'Android', 'Symbian', 'Bada', 'Rim', 'Windows','Palm','Apple'];

  asyncValue = new Promise((res, rej) =>{
    setTimeout( data =>{
      data = 'hello';
      res('Okay');
    }, 1000);
  });

  constructor() { }

  ngOnInit() {
  }

  addOs(o : string) {
    this.os.push(o);
  }
}
