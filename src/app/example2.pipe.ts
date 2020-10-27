import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example2'
})
export class Example2Pipe implements PipeTransform {

  transform(value: string, arg: string): string {
    let newValue = "";
    let indexTemp = 0;

    for (let index = 0; index < value.length; index++) {
      if (indexTemp %2 == 0) {
        newValue += value[index].toUpperCase();
      }else{
        newValue += value[index].toLowerCase();
      }
      if (value[index] != " "){
        indexTemp +=1;
      }
    }
    return newValue;
  }
}
