import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.pow(value, args)
  }

}
