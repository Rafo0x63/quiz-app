import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unslugify'
})
export class UnslugifyPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

}
