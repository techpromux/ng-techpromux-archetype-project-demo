/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IAppConfigVarsModel } from '@apps/demo-base-api';
import { DotEnvVarsParserService } from '@ng-techpromux-archetype-project/core-util';
import { environment } from '../../../environments/environment';

import * as dotEnvVarsToken from '!val-loader!./dotenv-loader';

export const APP_CONFIG_VARS: IAppConfigVarsModel =
  DotEnvVarsParserService.getVars<IAppConfigVarsModel>(
    dotEnvVarsToken,
    'demo',
    environment.name === '' ? 'dev' : environment.name
  );
