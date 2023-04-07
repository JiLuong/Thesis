import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convertToDoubleSpace',
})
export class ConvertToDoubleSpacePipe implements PipeTransform {
  transform(value: any, character: string) {
    return value.replace(character, '\u00A0\u00A0');
  }
}
