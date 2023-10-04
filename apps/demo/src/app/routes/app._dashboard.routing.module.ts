import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DemoBaseDashboardFeatureModule,
  DashboardComponent,
} from '@apps/demo-base-feature';
// import { checkIsAllowed } from '@ng-techpromux-archetype-project/core-auth';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`,
      enabled: true,
      flowData: {
        context: '',
        module: 'dashboard',
        action: '',
        step: '',
      },
      animation: 'DashboardPage',
    },
    // canActivate: [() => checkIsAllowed(['ROLE_USER'])],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DemoBaseDashboardFeatureModule],
  exports: [RouterModule],
})
export class AppDashboardRoutingModule {}
