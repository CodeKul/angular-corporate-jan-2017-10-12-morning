import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  i = 0;
  private subFor : Subscription;
  constructor() { }

  ngOnInit() {
    console.log(`Before observable`);
    this.subFor = this.forOb().subscribe(i => console.log(`${i}`), err => { }, () => { });
    console.log(`After observable`);
  }

  ngOnDestroy() {
    this.subFor.unsubscribe();
  }

  forOb() {
    return Observable.create(sub => {
      setTimeout(tt => {
        for (let i = 1; i < 100; i++) sub.next(i);
        sub.complete();
      }, 1000);
    });
  }
}
