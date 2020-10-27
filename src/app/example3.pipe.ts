import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example3'
})
export class Example3Pipe implements PipeTransform {

  transform(value: number, args: number): unknown {
    return value * value;
  }

}
