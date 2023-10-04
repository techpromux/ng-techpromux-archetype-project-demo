/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors',
})
export class AuthorsPipe implements PipeTransform {
  constructor() {
    //
  }

  transform(value: string[], ...args: any[]): any {
    let display = '';
    display += '<div>';
    value?.forEach((author) => {
      display += '<li>' + author + '</li>';
    });
    display += '</div>';
    return display;
  }
}
