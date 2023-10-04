import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractFeatureComponent } from '@ng-techpromux-archetype-project/core-ddd';

@Component({
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent
  extends AbstractFeatureComponent
  implements OnInit, OnDestroy
{
  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  // PROPERTIES
  // ----------------------------------------------------------

  public dateValue: Date = new Date();

  // -----------------------------------------------------
  // OBSERVABLES
  // -----------------------------------------------------

  // -----------------------------------------------------

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  // ---------------------------------------------------------
}
