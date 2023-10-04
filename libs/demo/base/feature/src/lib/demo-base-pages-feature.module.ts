import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoBaseUiSharedModule } from '@apps/demo-base-ui';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { Page404Component } from './component/page404/page404.component';
import { Page500Component } from './component/page500/page500.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [CommonModule, RouterModule, DemoBaseUiSharedModule],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
  ],
})
export class DemoBasePagesFeatureModule {}
