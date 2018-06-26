import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsPipe'
})
export class SecondsPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + Math.floor(value - minutes * 60);
  }

}
