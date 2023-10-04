/* eslint-disable @typescript-eslint/no-explicit-any */
export class BooksSetListDataStoreAction {
  static readonly type = '[APP-BOOKS] Set List Data';

  constructor(public data: any) {}
}
