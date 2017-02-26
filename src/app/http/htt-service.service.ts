import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttServiceService {

  constructor(
    private http: Http
  ) { }

  getData() {
    return this.http.get('https://digital-shelter-153912.firebaseio.com/compilerOptions.json')
          .map(data => data.json())
          .catch(this.handleError);
  }

  handleError(error : any) : Observable<any>{
    console.log(error);
    return Observable.throw(error);
  }
}
