import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejemplo1'
})
export class Ejemplo1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
