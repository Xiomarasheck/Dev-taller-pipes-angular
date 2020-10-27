import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example4'
})
export class Example4Pipe implements PipeTransform {

  transform(value: number,string, args: unknown): unknown {
    let dateSent  = new Date(value);
    let currentDate  = new Date();
    let response = "";
    let diffHours = Math.abs(dateSent.getTime() - currentDate.getTime()) / 3600000;

    if (dateSent.getFullYear() == currentDate.getFullYear()){
      if (dateSent.getMonth() == currentDate.getMonth()) {
        if (dateSent.getDay() == currentDate.getDay() && dateSent.getMinutes() == currentDate.getMinutes() && dateSent.getSeconds() == currentDate.getSeconds() && currentDate.getUTCHours() == dateSent.getUTCHours()){
          response = "Conectado hace pocos minutos";
        }else if (diffHours <= 24){
          response = "Conectado hace menos de " +  Math.round(diffHours)  + " Horas";
        }else{
          response = "Conectado este mes";
        }
      }else if((dateSent.getMonth() - currentDate.getMonth()) == 1){
        response = "Conectado el mes pasado";
      }else{
        response = "Conectado este año";
      }
    }
    return response;
  }
}
