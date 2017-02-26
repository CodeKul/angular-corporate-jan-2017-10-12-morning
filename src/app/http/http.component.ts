import { HttServiceService } from './htt-service.service';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  public my = 0;
  private subFor: Subscription;
  private forObservable: Observable<number>;

  constructor(
    private httpService : HttServiceService
  ) {
  }

  ngOnInit() {
    console.log(`Before observable`);
    //this.subFor = this.forOb().subscribe(i => console.log(`${i}`), err => { }, () => { });

    this.forObservable = this.forOb();
    this.subFor = this.forObservable.subscribe(this.onNext, this.onError, this.onComplete);
    console.log(`After observable`);
  }

  ngOnDestroy() {
    this.subFor.unsubscribe();
  }

  onNext = (i : number) : void => {
    this.my = i;
  }

  onError = (error: any) : void => { // interfaces

  }

  onComplete = function() {  

  };

  forOb(): Observable<number> {
    return Observable.create((sub: Subscriber<number>) => {
      // setTimeout(tt => {
      for (let i = 1; i < 100; i++) sub.next(i);
      sub.complete();
      // }, 1000);
    });
  }

  fetchData() {
    this.httpService.getData().subscribe(this.httpData)
    // this.subFor.add();
  }

  postData() {
    this.httpService.postData({userName: 'android', password : 'java'}).subscribe(this.httpData);
  }

  httpData = (data) =>{
    console.log(data.mapRoot);
  }
}
