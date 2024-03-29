import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convertToSpace',
})
export class ConvertToSpacePipe implements PipeTransform {
  transform(value: any, character: string) {
    return value.replace(character, '\u00A0');
  }
}
