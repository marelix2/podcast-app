import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return '';
    }
    let i = 0;
     while (true) {
       i++;
       if( value.charAt(i) !== '@'){
         continue;
       }
       else{
         return value.substring(0, i);
       }


     }
  }

}
