import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoBaseUiSharedModule } from '@apps/demo-base-ui';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DocsCalloutComponent } from './component/dashboard/docs/docs-callout/docs-callout.component';
import { DocsExampleComponent } from './component/dashboard/docs/docs-example/docs-example.component';
import { DocsLinkComponent } from './component/dashboard/docs/docs-link/docs-link.component';
import { WidgetsBrandComponent } from './component/dashboard/widgets/widgets-brand/widgets-brand.component';
import {
  ChartSample,
  WidgetsDropdownComponent,
} from './component/dashboard/widgets/widgets-dropdown/widgets-dropdown.component';
import { WidgetsEComponent } from './component/dashboard/widgets/widgets-e/widgets-e.component';
import { WidgetsComponent } from './component/dashboard/widgets/widgets/widgets.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //----------------------------
    DemoBaseUiSharedModule,
    //----------------------------
  ],
  declarations: [
    DashboardComponent,
    // ----------------------------

    WidgetsComponent,
    WidgetsBrandComponent,
    WidgetsDropdownComponent,

    ChartSample,
    WidgetsEComponent,
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
  ],
  exports: [DashboardComponent],
})
export class DemoBaseDashboardFeatureModule {}
