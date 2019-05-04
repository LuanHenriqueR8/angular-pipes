import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filesize'})
export class FileSizePipe implements PipeTransform {

  transform(fileSize: number = 0): string {
    return (fileSize / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
