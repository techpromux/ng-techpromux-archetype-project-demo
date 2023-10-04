import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoBaseUiSharedModule } from '@apps/demo-base-ui';
import { DemoBooksDomainModule } from '@apps/demo-books-domain';
import { DemoBooksUiModule } from '@apps/demo-books-ui';
import { ButtonModule, CardModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    DemoBaseUiSharedModule,
    // ---------------------------------------
    DemoBooksDomainModule,
    DemoBooksUiModule,
    // ---------------------------------------
    CardModule,
    IconModule,
    ButtonModule,
  ],
  declarations: [AddComponent, ListComponent],
  exports: [AddComponent, ListComponent],
})
export class ApplicationDemoBooksFeatureModule {}
