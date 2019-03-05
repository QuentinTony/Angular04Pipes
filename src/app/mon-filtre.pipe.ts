import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monFiltre2'
})
export class MonFiltrePipe implements PipeTransform {

  transform(value: string, repetition: number): string {

    return value.repeat(repetition);
  }

}
