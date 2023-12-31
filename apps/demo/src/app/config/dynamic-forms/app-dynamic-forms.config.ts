import { APP_CONFIG_FORMS_VALIDATORS } from '@apps/demo-base-api'

import {
  DISABLED_MATCHER_PROVIDER,
  HIDDEN_MATCHER_PROVIDER,
  REQUIRED_MATCHER_PROVIDER,
} from '@ng-dynamic-forms/core';

export const APP_DYNAMIC_FORMS_CONFIG = {
  providers: [
    DISABLED_MATCHER_PROVIDER,
    HIDDEN_MATCHER_PROVIDER,
    REQUIRED_MATCHER_PROVIDER,
    ...APP_CONFIG_FORMS_VALIDATORS,
  ],
};
