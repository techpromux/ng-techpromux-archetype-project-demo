/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { inject, Injectable } from '@angular/core';
import {
  AbstractDomainFacadeService,
  SearchParamsModel,
} from '@ng-techpromux-archetype-project/core-ddd';
import { TranslationService } from '@ng-techpromux-archetype-project/core-service';
import { BookService } from '@apps/demo-base-domain';
import {
  BooksResetDataStoreAction,
  BooksSetListDataStoreAction,
  BooksStoreState,
} from '@apps/demo-books-store';

import { Store } from '@ngxs/store';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';

@Injectable()
export class BooksDomainFacadeService extends AbstractDomainFacadeService {
  // ----------------------------------------------------
  protected store: Store = inject<Store>(Store);

  protected translate: TranslationService =
    inject<TranslationService>(TranslationService);

  protected bookService: BookService = inject<BookService>(BookService);

  // ----------------------------------------------------

  constructor() {
    super();
  }

  // ----------------------------------------------------

  public reset(): void {
    this.store.dispatch(new BooksResetDataStoreAction({}));
  }

  public clearListData(): Observable<any> {
    return this.store.dispatch(
      new BooksSetListDataStoreAction(BooksStoreState.getListDataDefaultValue())
    );
  }

  // -----------------------------------------------------------------------------------------

  public override dispatchClearListData(): Observable<any> {
    return this.store.dispatch(
      new BooksSetListDataStoreAction(BooksStoreState.getListDataDefaultValue())
    );
  }

  protected override dispatchSetListData(pagedData: any): Observable<any> {
    return this.store.dispatch(new BooksSetListDataStoreAction(pagedData));
  }

  // -----------------------------------------------------------------------------------------

  protected override executeListItemsRequest(
    paginationParams: SearchParamsModel
  ): Observable<any> {
    return this.bookService.booksGet();
    /*
        null, // q,
        paginationParams.page + 1,
        paginationParams.pageSize,
        paginationParams.sorts && paginationParams.sorts[0]
          ? paginationParams.sorts[0]?.prop
          : null,
        paginationParams.sorts && paginationParams.sorts[0]
          ? paginationParams.sorts[0]?.dir
          : null,
    */
  }

  protected override createListDataFromListResponse(
    response: any,
    paginationParams: SearchParamsModel
  ): Observable<any> {
    // this.logger.console.debug(this.__classname, 'createListDataFromListResponse ', response, paginationParams);

    return of(response).pipe(
      switchMap((response: any) => {
        const observables: Observable<any>[] = [];
        response.forEach((item: any, i: number) => {
          observables.push(
            this.createItemDataFromSaveResponseData({
              ...item,
              no: i + 1,
              price: 12.34 * (i + 1),
            })
          );
        });
        return observables.length === 0 ? of([]) : forkJoin(observables);
      }),
      map((updatedItems: any[]) => {
        // custom sorting

        const sortedItems = [...updatedItems];

        if (paginationParams.sorts && paginationParams.sorts.length > 0) {
          const sort: any = paginationParams.sorts[0];

          sortedItems.sort((a: any, b: any) => {
            if ((a as any)[sort.prop] < (b as any)[sort.prop]) {
              return sort.dir === 'asc' ? -1 : 1;
            }
            if ((a as any)[sort.prop] > (b as any)[sort.prop]) {
              return sort.dir === 'asc' ? 1 : -1;
            }
            return 0;
          });
        }

        // custom filtering

        const filteredItems = sortedItems
          ? sortedItems.filter(
              (item, i, array) =>
                paginationParams.page * paginationParams.pageSize <= i &&
                i < (paginationParams.page + 1) * paginationParams.pageSize
            )
          : [];

        return filteredItems;
      }),
      map((filteredItems: any[]) => {
        // Create Paged Data

        const pagedData: SearchParamsModel = {
          page: paginationParams.page,
          pageSize: paginationParams.pageSize,
          total: response.length,

          filters: paginationParams.filters,
          sorts: paginationParams.sorts,

          items: [...filteredItems],
          selected: [],
        };

        return pagedData;
      })
    );
  }

  // -----------------------------------------------------------------------------------------

  protected override getBodyDataForSaveItem(
    id: string | null,
    itemData: any
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }

  protected override executeSaveItemRequest(
    id: string | null,
    itemData: any,
    bodyData: any
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }

  protected override createItemDataFromSaveResponseData(
    itemData: any
  ): Observable<any> {
    const thumbnailUrl: string = itemData.thumbnails
      ? (itemData?.thumbnails as any[])[0].url
      : null;
    return of({
      ...itemData,
      firstThumbnailUrl:
        thumbnailUrl.startsWith('https://') ||
        thumbnailUrl.startsWith('http://')
          ? thumbnailUrl
          : './assets/img/application/books/no-cover.png',
    });
  }

  // -----------------------------------------------------------------------------------------

  protected override getBodyDataForRemoveItem(
    id: string | null,
    extraData: any
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }

  protected override executeRemoveItemRequest(
    id: string | null,
    extraData: any,
    bodyData: any
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }
  protected override createItemDataFromRemoveResponseData(
    response: any
  ): Observable<any> {
    throw new Error('Method not implemented.');
  }

  // -----------------------------------------------------------------------------------------
}
