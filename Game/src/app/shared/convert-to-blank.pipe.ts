import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convertToBlank',
})
export class ConvertToBlankPipe implements PipeTransform {
  transform(value: any, character: string) {
    return value.replace(character, '');
  }
}
