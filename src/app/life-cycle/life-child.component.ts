import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-life-child',
  template: `
   <div *ngIf="mobiles">
     <ul *ngFor="let mob of ['Android','Ios', 'Symbian']">
      <li>{{mob}}</li>
     </ul>
   </div>

   <input type="text" #myName/>
   <input type="button" value="Show mobiles"  (click)="mobiles = true"/>
  `,
  styles: []
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  inBinding = 100;

  @ViewChild('myName')
  myName: HTMLElement;

  @ContentChild('parentName')
  parentName: HTMLElement;

  constructor() { }

  ngOnChanges() {
    this.lg('ngOnChanges');
  }

  ngOnInit() {
    //this.lg(this.myName);
    console.log(this.myName);
  }

  ngDoCheck() {
    this.lg('ngDoCheck');
  }

  ngAfterContentInit() {
    this.lg('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.lg('ngAfterContentChecked');
    this.myName['value'] = 'android';
  }

  ngAfterViewInit() {
    this.lg('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.lg('ngAfterViewChecked' + this.myName);
  }

  ngOnDestroy() {
    this.lg('ngOnDestroy');
  }

  private lg(msg) {
    console.log(`${msg}`);
  }
}
