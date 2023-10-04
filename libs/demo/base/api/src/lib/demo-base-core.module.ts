import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf, inject } from '@angular/core';
import { LoggerService } from '@ng-techpromux-archetype-project/core-util';
import { DemoBaseDomainModule } from '@apps/demo-base-domain';
import { DemoBaseUiCoreModule } from '@apps/demo-base-ui';

@NgModule({
  imports: [
    // ---------------------------------
    CommonModule,
    HttpClientModule,
    // --------------------------------
    DemoBaseDomainModule,
    DemoBaseUiCoreModule,
    // --------------------------------
  ],
  providers: [],
  exports: [DemoBaseUiCoreModule],
})
export class DemoBaseCoreModule {
  private logger: LoggerService = inject<LoggerService>(LoggerService);

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DemoBaseCoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'DemoBaseCoreModule is already loaded. Import it in the AppModule only.'
      );
    }
    this.init();
  }

  private init(): void {
    this.logger.console.debug('DemoBaseCoreModule', 'init');
  }
}
