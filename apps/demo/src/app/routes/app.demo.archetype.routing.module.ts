import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AlertsComponent,
  DatesComponent,
  DemoArchetypeFeatureModule,
} from '@apps/demo-archetype-feature';
// import { checkIsAllowed } from '@ng-techpromux-archetype-project/core-auth/guard/default';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alerts',
    pathMatch: 'full',
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: {
      title: $localize`Alerts`,
      enabled: true,
      flowData: {
        context: 'demo',
        module: 'archetype',
        action: 'alerts',
        step: '',
      },
      animation: 'DemoAlertsPage',
    },
    /*canActivate: [() => checkIsAllowed(['ROLE_USER'])],*/
  },
  {
    path: 'dates',
    component: DatesComponent,
    data: {
      title: $localize`Dates`,
      enabled: true,
      flowData: {
        context: 'demo',
        module: 'archetype',
        action: 'dates',
        step: '',
      },
      animation: 'DemoDatesPage',
    },
    /*canActivate: [() => checkIsAllowed(['ROLE_USER'])],*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DemoArchetypeFeatureModule],
  exports: [RouterModule],
})
export class DemoArchetypeRoutingModule {}
