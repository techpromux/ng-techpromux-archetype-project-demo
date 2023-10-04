/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { AbstractUiComponent } from '@ng-techpromux-archetype-project/core-ddd';
import { DatatableDataSettings } from '@ng-techpromux-archetype-project/core-ui';
import { BooksTableSettingsHandler } from '../../handler/books-table-settings.handler';

@Component({
  selector: 'app-demo-ui-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTableComponent extends AbstractUiComponent implements OnInit {
  // --------------------------------------------------------------------------

  @Input() pagedDataSettings!: DatatableDataSettings;

  // --------------------------------------------------------------------------

  @Output() paged: EventEmitter<any> = new EventEmitter<any>();

  @Output() sorted: EventEmitter<any> = new EventEmitter<any>();

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  // --------------------------------------------------------------------------

  @ViewChild('rowsGroupHeaderTpl', { static: true, read: TemplateRef })
  rowsGroupHeaderTpl!: TemplateRef<any>;

  @ViewChild('rowDetailsTpl', { static: true, read: TemplateRef })
  rowDetailsTpl!: TemplateRef<any>;

  @ViewChild('fieldActionsTpl', { static: true, read: TemplateRef })
  fieldActionsTpl!: TemplateRef<any>;

  // --------------------------------------------------------------------------

  public listTableSettingsHandler: BooksTableSettingsHandler =
    inject<BooksTableSettingsHandler>(BooksTableSettingsHandler);

  constructor() {
    super();
    this.listTableSettingsHandler.init();
  }

  // --------------------------------------------------------------------------

  override ngOnInit(): void {
    super.ngOnInit();

    this.listTableSettingsHandler.viewSettings.groupRowsHeaderTemplate =
      this.rowsGroupHeaderTpl;

    this.listTableSettingsHandler.viewSettings.rowDetailsTemplate =
      this.rowDetailsTpl;

    this.listTableSettingsHandler.columnsSettings?.columns?.map(
      (config: any) => {
        if (config.prop === 'actions' && this.fieldActionsTpl) {
          config.cellTemplate = this.fieldActionsTpl;
        }
        return config;
      }
    );
  }

  // --------------------------------------------------------------------------

  onPaged($event: any): void {
    this.paged.emit($event);
  }

  onSorted($event: any): void {
    this.sorted.emit($event);
  }

  onSelected($event: any): void {
    this.selected.emit($event);
  }

  // --------------------------------------------------------------------------
}
