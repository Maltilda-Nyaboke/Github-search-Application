import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if (value){
      const intervals:any = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
    };
    }
  }

}
