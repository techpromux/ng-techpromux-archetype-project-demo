import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddComponent,
  ApplicationDemoBooksFeatureModule,
  ListComponent,
} from '@apps/demo-books-feature';
// import { checkIsAllowed } from '@ng-techpromux-archetype-project/core-auth/guard/default';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: $localize`Books List`,
      enabled: true,
      flowData: {
        context: 'demo',
        module: 'books',
        action: 'list',
        step: '',
      },
      animation: 'BooksPage',
    },
    /*canActivate: [() => checkIsAllowed(['ROLE_USER'])],*/
  },
  {
    path: 'add/:step',
    component: AddComponent,
    data: {
      title: $localize`Book Add`,
      enabled: true,
      flowData: {
        context: 'demo',
        module: 'books',
        action: 'add',
        step: 'step1',
        steps: ['step1', 'step2', 'step3'],
      },
      animation: 'BooksAddPage',
    },
    /*canActivate: [() => checkIsAllowed(['ROLE_USER'])],*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ApplicationDemoBooksFeatureModule],
  exports: [RouterModule],
})
export class DemoBooksRoutingModule {}
