/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  AbstractDomainFacadeService,
  AbstractListFeatureComponent,
  SearchParamsModel,
} from '@ng-techpromux-archetype-project/core-ddd';
import { FlowService } from '@ng-techpromux-archetype-project/core-service';
import { DatatableDataSettings } from '@ng-techpromux-archetype-project/core-ui';
import { BooksDomainFacadeService } from '@apps/demo-books-domain';
import { BooksStoreState } from '@apps/demo-books-store';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent
  extends AbstractListFeatureComponent
  implements OnInit, OnDestroy
{
  // ----------------------------------------------------------
  // PROPERTIES
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------

  private facade: BooksDomainFacadeService = inject<BooksDomainFacadeService>(
    BooksDomainFacadeService
  );

  private flow: FlowService = inject<FlowService>(FlowService);

  // ----------------------------------------------------------
  // OBSERVABLES
  // ----------------------------------------------------------

  @Select(BooksStoreState.getListData)
  private pagedDataSettings$!: Observable<DatatableDataSettings>;

  // ----------------------------------------------------------

  constructor() {
    super();
  }

  // ----------------------------------------------------------

  protected override getSearchParamsDefaultValue(): SearchParamsModel {
    return {
      page: 0,
      pageSize: 5,
      filters: {},
      sorts: [],
    };
  }

  protected override getPagedDataDefaultValue(): DatatableDataSettings {
    return BooksStoreState.getListDataDefaultValue();
  }

  protected override getDomainFacade(): AbstractDomainFacadeService {
    return this.facade;
  }
  protected override getPagedDataSettings$(): Observable<DatatableDataSettings> {
    return this.pagedDataSettings$;
  }

  // ----------------------------------------------------------

  goToAdd(): void {
    this.flow.startAction('demo', 'books', 'add', 'step1').then();
  }

  // ----------------------------------------------------------
}
