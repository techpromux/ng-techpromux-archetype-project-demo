import { StateToken } from '@ngxs/store';
import { BooksStoreModel } from '../model/books-data.model';

export const BOOKS_STATE_TOKEN = new StateToken<BooksStoreModel>('books');
