import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...arg: string[]): unknown {
    if (!value) {
      return '';
    }

    const words = value
      .toLocaleLowerCase('tr-TR')
      .split(' ')
      .map((word: string) => {
        if (!arg?.includes(word))
          return word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1);
        return word;
      });

    return words.join(' ');
  }

}
