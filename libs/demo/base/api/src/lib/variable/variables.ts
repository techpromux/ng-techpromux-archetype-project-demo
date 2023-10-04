import { InjectionToken } from '@angular/core';

import { NG_VALIDATORS } from '@angular/forms';

import { BookTitleValidator } from '@apps/demo-books-ui';

import {
  IAppConfigVarsModel,
  IAppEnvConfig,
} from '../model/app-config-vars.model';

export const APP_ENV_TOKEN = new InjectionToken<IAppEnvConfig>('APP_ENV_TOKEN');

export const APP_CONFIG_VARS_TOKEN = new InjectionToken<IAppConfigVarsModel>(
  'APP_CONFIG_VARS_TOKEN'
);

export const APP_CONFIG_FORMS_VALIDATORS = [
  {
    provide: NG_VALIDATORS,
    useValue: BookTitleValidator,
    multi: true,
  },
];
