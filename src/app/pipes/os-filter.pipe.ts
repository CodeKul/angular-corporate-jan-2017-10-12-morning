import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'osFilter',
  pure : true
})
export class OsFilterPipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    let resArr = [];
    if(value.length === 0 ) return resArr;

    for(let o of value){
      if(o.charAt(0) === 'A') resArr.push(o);
    }
    return resArr;
  }
}
