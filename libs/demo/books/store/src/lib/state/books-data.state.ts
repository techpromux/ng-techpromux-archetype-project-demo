/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { AbstractStoreState } from '@ng-techpromux-archetype-project/core-api';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BooksResetDataStoreAction } from '../action/books-reset-data-store.action';
import { BooksSetListDataStoreAction } from '../action/books-set-list-data-store.action';
import { BooksStoreModel } from '../model/books-data.model';
import { BOOKS_STATE_TOKEN } from '../variable/variables';

@State<BooksStoreModel>({
  name: BOOKS_STATE_TOKEN,
  defaults: BooksStoreState.getStoredDefaultsValue(),
})
@Injectable()
export class BooksStoreState extends AbstractStoreState {
  static override getStoredDefaultsValue(): any {
    return {
      list: BooksStoreState.getListDataDefaultValue(),
      edit: null,
    };
  }

  static override getStoredKeys(prefix: string = ''): string[] {
    return [];
  }

  // ----------------------------------------------------------

  static getListDataDefaultValue(): any {
    return {
      items: [],
      total: 0,
      page: 0,
      pageSize: 20,
      sorts: [],
      selected: [],
    };
  }

  // ----------------------------------------------------------

  @Selector()
  static getListData(state: BooksStoreModel): any {
    return state.list;
  }

  // ----------------------------------------------------------

  @Action(BooksSetListDataStoreAction)
  setListData(
    ctx: StateContext<BooksStoreModel>,
    action: BooksSetListDataStoreAction
  ): void {
    const state = ctx.getState();
    ctx.patchState({
      list: {
        ...action.data,
      },
    });
  }

  // ----------------------------------------------------------

  @Action(BooksResetDataStoreAction)
  ResetDataStoreAction(
    ctx: StateContext<BooksStoreModel>,
    action: BooksResetDataStoreAction
  ): void {
    const state = ctx.getState();
    ctx.patchState({
      ...BooksStoreState.getStoredDefaultsValue(),
    });
  }

  // ----------------------------------------------------------
}
