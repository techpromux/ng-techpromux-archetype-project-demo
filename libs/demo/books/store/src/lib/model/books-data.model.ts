/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortType } from '@swimlane/ngx-datatable';

export interface BooksStoreModel {
  list: {
    // ----------------
    page: number;
    pageSize: number;
    // ----------------
    total?: number;
    // ----------------
    filters?: any;
    // ----------------
    sorts?: any[];
    sortType?: SortType; // multi, // single
    // ----------------
    items?: any[];
    selected?: any[];
    // ----------------
    groupRows?: boolean;
    groupRowsBy?: string;
  };
  edit: any | null;
}
