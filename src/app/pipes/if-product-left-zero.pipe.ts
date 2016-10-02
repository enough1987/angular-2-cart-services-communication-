import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifProductLeftZero'
})
export class IfProductLeftZeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = value.filter(el => {
        if( typeof el === 'object' && typeof el.id === 'number' && typeof el.left ==='number' && el.left > 0 ) {
          return true;
        }
    });
    return res;
  }

}
