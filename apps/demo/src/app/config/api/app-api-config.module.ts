import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { LoggerService } from '@ng-techpromux-archetype-project/core-util';

import {
  BASE_PATH,
  BookMonkeyV4ApiClientModule,
} from '@apps/demo-base-domain';
import { APP_API_CONFIG } from './app-api.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    // ----------------
    // App Api Modules
    // ----------------
    BookMonkeyV4ApiClientModule,
  ],
  providers: [
    // ----------------
    // App Api Providers
    // ----------------
    {
      provide: BASE_PATH,
      useValue: APP_API_CONFIG.book_monkey_v4_api_base_path,
    },
    // ----------------
  ],
  exports: [],
})
export class AppApiConfigModule {
  logger: LoggerService = inject<LoggerService>(LoggerService);

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppApiConfigModule
  ) {
    if (parentModule) {
      throw new Error(
        'AppApiConfigModule is already loaded. Import it in the main config module only.'
      );
    }
    this.init();
  }

  private init(): void {
    this.logger.console.debug('AppApiConfigModule', 'init');
  }
}
