import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example1'
})
export class Example1Pipe implements PipeTransform {

  transform(value: string, arg: string): string {
    value = value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });

    return value; 
  }
}
