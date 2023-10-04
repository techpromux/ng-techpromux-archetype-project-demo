import { AbstractControl, ValidationErrors } from '@angular/forms';

export function BookTitleValidator(
  control: AbstractControl
): ValidationErrors | null {
  const hasError = control.value
    ? (control.value as string).startsWith('abc')
    : false;

  return hasError
    ? {
        errorTitleStartsWithAbc: {
          customError: true,
          customMessage: 'app.demo.books.ui.errors.titleStartsWithAbc',
        },
      }
    : null;
}
