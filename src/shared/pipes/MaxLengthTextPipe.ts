import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maxlenthtext'})
export class MaxLengthTextPipe implements PipeTransform {

  transform(text: any): any {
  }

}
