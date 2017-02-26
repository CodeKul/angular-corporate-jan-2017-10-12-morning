import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface User {
  userName: string;
  password: string;
}

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

  postData(user: User) {
    let headers: Headers = new Headers;
    return this.http.post('https://digital-shelter-153912.firebaseio.com/user.json', user, headers)
      .map(data => data.json())
      .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    console.log(error);
    return Observable.throw(error);
  }
}