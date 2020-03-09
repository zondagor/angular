import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isValid'
})
export class DefaultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) return value
    return 'default';
  }

}
