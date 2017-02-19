import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripple'
})
export class TripplePipe implements PipeTransform {
  transform(value: any, times: number, fac : number ): any {
    return (value * times) + fac;
  }
}
