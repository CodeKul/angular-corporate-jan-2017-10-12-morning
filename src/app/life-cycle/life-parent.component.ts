import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-parent',
  template: `
    <app-life-child [inBinding]="inData" *ngIf="shouldShow">
      <input type="text" value="from Parent" #parentName/>
    </app-life-child>

    <app-life-child [inBinding]="inData" *ngIf="shouldShow">
     <p> This is para</p>
    </app-life-child>

    <input type="button" (click)="shouldShow = true" value="show"/>
    <input type="button" (click)="shouldShow = false" value="hide"/>
    <input type="button" (click)="changeInBinding()" value="Okay"/>
  `,
  styles: []
})
export class LifeParentComponent implements OnInit {

  inData = 100;
  constructor() { }

  ngOnInit() {
  }

  changeInBinding(){
    this.inData = 800;
  }
}
