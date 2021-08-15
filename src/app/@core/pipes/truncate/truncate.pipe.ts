import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, resultLength: number): string {
    if (typeof value !== 'string') return value;

    if (value.length < resultLength) return value;

    return value.slice(0, resultLength) + '...';
  }

}
