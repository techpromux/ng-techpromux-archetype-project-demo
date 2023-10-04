/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

import { AuthStoreState } from '@ng-techpromux-archetype-project/core-auth';

import { LayoutStoreState } from '@ng-techpromux-archetype-project/core-layout';

import {
  FlowStoreState,
  OptionsListsStoreState,
  TranslationStoreState,
} from '@ng-techpromux-archetype-project/core-service';

import {
  LoaderIndicatorStoreState,
  MenuStoreState,
} from '@ng-techpromux-archetype-project/core-ui';

import { BooksStoreState } from '@apps/demo-books-store';

import { State } from '@ngxs/store';

@State<any>({
  name: 'app',
  defaults: {},
  children: [
    BooksStoreState
  ],
})
@Injectable()
export class AppStoreState {}

export const APP_STATE_ALL_CONFIG = [
  // ---------------------
  // App
  // ---------------------
  AppStoreState,
  // ---------------------
  // App States
  // ---------------------
  BooksStoreState,
  // ---------------------
  // Auth
  // ---------------------
  AuthStoreState,
  // ---------------------
  // Flow
  // ---------------------
  FlowStoreState,
  // ---------------------
  // Loading Indicator
  // ---------------------
  LoaderIndicatorStoreState,
  // ---------------------
  // Translation
  // ---------------------
  TranslationStoreState,
  // ---------------------
  // Layout
  // ---------------------
  LayoutStoreState,
  // ---------------------
  // Menu
  // ---------------------
  MenuStoreState,
  // ---------------------
  // Options
  // ---------------------
  OptionsListsStoreState,
  // ---------------------
].reverse();

export const APP_STATE_KEYS_TO_STORAGE_CONFIG = [
  // ---------------------
  ...AuthStoreState.getStoredKeys(''),
  // ---------------------
  ...TranslationStoreState.getStoredKeys(''),
  // ---------------------
  ...LayoutStoreState.getStoredKeys(''),
  // ---------------------
];
