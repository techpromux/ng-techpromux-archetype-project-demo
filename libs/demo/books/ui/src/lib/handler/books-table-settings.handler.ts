/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from '@angular/core';
import { marker as _i18n } from '@biesbjerg/ngx-translate-extract-marker';
import {
  DatatableColumnsSettings,
  DatatableDataSettings,
  DatatableSettingsHandler,
  DatatableViewSettings,
} from '@ng-techpromux-archetype-project/core-ui';
import { AuthorsPipe } from '../pipe/authors.pipe';
import { PricePipe } from '../pipe/price.pipe';
import { PublishedAtPipe } from '../pipe/published-at.pipe';
import { RatingPipe } from '../pipe/rating.pipe';
import { ThumbnailPipe } from '../pipe/thumbnail.pipe';

@Injectable()
export class BooksTableSettingsHandler extends DatatableSettingsHandler {
  constructor() {
    super();
  }

  protected override getDefaultDataSettings(): DatatableDataSettings {
    const defaultDataSettings = {
      ...super.getDefaultDataSettings(),
      ...{
        rowIdentity: (row: any) => {
          return row.isbn;
        },
        displayCheck: (row: any, column: string, value: any) => {
          return row.rating < 5;
        },
        selectCheck: (row: any, column: string, value: any) => {
          return row.rating < 5;
        },
        sorts: [
          {
            prop: 'title',
            dir: 'asc',
          },
        ],
        // groupRows: true,
        // groupRowsBy: 'rating',
        // groupExpansionDefault: false,
      },
    };

    return defaultDataSettings;
  }

  protected override getDefaultColumnsSettings(): DatatableColumnsSettings {
    const defaultColumnsSettings = { ...super.getDefaultColumnsSettings() };

    defaultColumnsSettings.columns.push(
      ...[
        {
          name: _i18n('ui.datatable.attributes.#'),
          nameTranslation: true,
          prop: 'no',
          width: 50,
          resizeable: false,
          sortable: true,
          draggable: false,
          canAutoResize: false,
          headerClass: '',
          cellClass: '',
          // frozenLeft: true,
          // frozenRight: false,
        },
        {
          name: '',
          prop: 'firstThumbnailUrl',
          width: 60,
          resizeable: false,
          sortable: false,
          draggable: false,
          canAutoResize: false,
          pipe: inject<ThumbnailPipe>(ThumbnailPipe),
        },
        {
          name: _i18n('app.demo.books.ui.table.title.isbn'),
          nameTranslation: true,
          prop: 'isbn',
          width: 150,
          resizeable: false,
          sortable: true,
          draggable: false,
          canAutoResize: false,
        },
        {
          name: _i18n('app.demo.books.ui.table.title.title'),
          nameTranslation: true,
          prop: 'title',
          // width: 350,
          resizeable: true,
          sortable: true,
          draggable: false,
          canAutoResize: true,
        },
        {
          name: _i18n('app.demo.books.ui.table.title.authors'),
          nameTranslation: true,
          prop: 'authors',
          width: 100,
          resizeable: true,
          sortable: false,
          draggable: false,
          canAutoResize: true,
          pipe: inject<AuthorsPipe>(AuthorsPipe),
        },
        {
          name: _i18n('app.demo.books.ui.table.title.price'),
          nameTranslation: true,
          prop: 'price',
          width: 70,
          resizeable: false,
          sortable: true,
          draggable: false,
          canAutoResize: false,
          pipe: inject<PricePipe>(PricePipe),
        },
        {
          name: _i18n('app.demo.books.ui.table.title.rating'),
          nameTranslation: true,
          prop: 'rating',
          width: 120,
          resizeable: false,
          sortable: true,
          draggable: false,
          canAutoResize: false,
          pipe: inject<RatingPipe>(RatingPipe),
        },
        {
          name: _i18n('app.demo.books.ui.table.title.published'),
          nameTranslation: true,
          prop: 'published',
          width: 100,
          resizeable: false,
          sortable: true,
          draggable: false,
          canAutoResize: false,
          pipe: inject<PublishedAtPipe>(PublishedAtPipe),
        },
        {
          name: _i18n('app.demo.books.ui.table.title.actions'),
          nameTranslation: true,
          prop: 'actions',
          width: 80,
          resizeable: false,
          sortable: false,
          draggable: false,
          canAutoResize: false,
        },
      ]
    );

    return defaultColumnsSettings;
  }

  protected override getDefaultViewSettings(): DatatableViewSettings {
    const defaultViewSettings = {
      ...super.getDefaultViewSettings(),
      ...{
        tableClasses: 'striped bordered', // 'dark',
        wrapperStyles: {
          'min-width': '800px',
        },
        rowClass: (row: any) => {
          return {
            highRating: row.rating > 3,
            mediumRating: row.rating === 3,
            lowRating: row.rating < 3,
          };
        },
        toggleRowDetailByWindowSize: false,
        groupRowsHeaderHeight: 55,
        // footerHide: false,
        // footerShowCustomTemplate: true,
      },
    };
    return defaultViewSettings;
  }

  protected override getDefaultExtraSettings(): any {
    const defaultExtraSettings = {
      ...super.getDefaultExtraSettings(),
    };
    return defaultExtraSettings;
  }
}
