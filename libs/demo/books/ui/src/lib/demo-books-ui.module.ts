import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, CardModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { AddEditFormComponent } from './component/book-form/book-form.component';
import { ListTableComponent } from './component/books-table/books-table.component';
import { BooksTableSettingsHandler } from './handler/books-table-settings.handler';
import { AuthorsPipe } from './pipe/authors.pipe';
import { PricePipe } from './pipe/price.pipe';
import { PublishedAtPipe } from './pipe/published-at.pipe';
import { RatingPipe } from './pipe/rating.pipe';
import { ThumbnailPipe } from './pipe/thumbnail.pipe';

import {
  CoreUiDatatableModule,
  CoreUiDynamicFormsModule,
} from '@ng-techpromux-archetype-project/core-ui';
import { DemoBaseUiSharedModule } from '@apps/demo-base-ui';

@NgModule({
  imports: [
    CommonModule,
    DemoBaseUiSharedModule,
    CoreUiDatatableModule,
    CoreUiDynamicFormsModule,
    CardModule,
    IconModule,
    ButtonModule,
  ],
  declarations: [
    // ----------------------------------------------
    ListTableComponent,
    AddEditFormComponent,
    // ----------------------------------------------
    ThumbnailPipe,
    AuthorsPipe,
    RatingPipe,
    PricePipe,
    PublishedAtPipe,
    // ----------------------------------------------
  ],
  providers: [
    BooksTableSettingsHandler,
    // ----------------------------------------------
    ThumbnailPipe,
    AuthorsPipe,
    AuthorsPipe,
    RatingPipe,
    PricePipe,
    PublishedAtPipe,
    // ----------------------------------------------
    DatePipe,
    // I18nDatePipe,
    CurrencyPipe,
    // ----------------------------------------------
  ],
  exports: [ListTableComponent, AddEditFormComponent],
})
export class DemoBooksUiModule {}
