/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  name: 'publishedAt'
})
export class PublishedAtPipe implements PipeTransform {
  private date: DatePipe = inject<DatePipe>(DatePipe);

  constructor() {
    //
  }

  transform(value: string, ...args: unknown[]): string | null {
    return this.date.transform(value, 'dd/MM/yyyy');
  }
}
