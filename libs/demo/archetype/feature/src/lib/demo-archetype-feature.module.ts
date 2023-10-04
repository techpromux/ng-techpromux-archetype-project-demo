import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoBaseUiSharedModule } from '@apps/demo-base-ui';
import { AlertsComponent } from './component/alerts/alerts.component';
import { DatesComponent } from './component/dates/dates.component';

@NgModule({
  imports: [CommonModule, DemoBaseUiSharedModule],
  declarations: [AlertsComponent, DatesComponent],
  exports: [AlertsComponent, DatesComponent],
})
export class DemoArchetypeFeatureModule {}
