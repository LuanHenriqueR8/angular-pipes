import {Pipe, PipeTransform} from '@angular/core';

/** It's an example of a default pipe
 * The idea of FileSizePipe is to convert the size of a file in some date unit. */

@Pipe({ name: 'filesize'})
export class FileSizePipe implements PipeTransform {

  transform(file: any = null, extension: string = 'MB'): string {
    return  file !== null ? (file[0].size / (1024 * 1024)).toFixed(2) + extension : '0.00' + extension;
  }

}
