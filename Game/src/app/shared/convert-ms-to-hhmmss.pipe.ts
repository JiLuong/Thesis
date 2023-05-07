import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMsToHhmmss',
})
export class ConvertMsToHhmmssPipe implements PipeTransform {
  transform(time: number): string {
    const hours = Math.floor(Math.abs(time) / (60 * 60 * 1000))
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((Math.abs(time) / (60 * 1000)) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((Math.abs(time) / 1000) % 60)
      .toString()
      .padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}
