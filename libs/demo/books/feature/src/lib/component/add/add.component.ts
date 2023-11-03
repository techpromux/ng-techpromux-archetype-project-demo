/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { BooksDomainFacadeService } from '@apps/demo-books-domain';
import {
  AbstractDomainFacadeService,
  AbstractWizardFormFeatureComponent,
} from '@ng-techpromux-archetype-project/core-ddd';
import { ElementsResizeObserverService } from '@ng-techpromux-archetype-project/core-ui';
import { Observable, of, take } from 'rxjs';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent
  extends AbstractWizardFormFeatureComponent
  implements OnInit, OnDestroy
{
  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------

  private facade: BooksDomainFacadeService = inject<BooksDomainFacadeService>(
    BooksDomainFacadeService
  );

  // ----------------------------------------------------------

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  // ----------------------------------------------------------

  protected getDomainFacade(): AbstractDomainFacadeService {
    return this.facade;
  }

  // ----------------------------------------------------------

  protected override getCurrentFlowContextName(): string {
    return 'demo';
  }

  protected override getCurrentFlowModuleName(): string {
    return 'books';
  }

  protected override getCurrentFlowActionName(): string {
    return 'add';
  }

  // ----------------------------------------------------------

  protected override initFormGroup(): void {
    this.formGroup = this.fb.group({
      project: this.fb.group({}),
      spaces: this.fb.array([]),
    });
  }

  // ----------------------------------------------------------

  protected override initAction(): void {
    if (
      this.currentStep !== 'step1' ||
      this.currentStepIsFirstAccess !== true
    ) {
      return;
    }
  }

  // ----------------------------------------------------------

  protected override onFormGroupCreated(form: FormGroup): void {
    super.onFormGroupCreated(form);

    this.formGroup = form;
    if (this.formGroup) {
      switch (this.currentStep) {
        case 'step1':
          this.formGroup.enable();
          break;
        case 'step2':
          this.formGroup.disable();
          break;
        default:
      }
    }
  }

  // ---------------------------------------------------------------

  protected override isFormGroupValid(): boolean {
    let formValid = super.isFormGroupValid();
    if (!formValid) return false;

    (this.formGroup.get('myFormArray1') as FormArray).controls.forEach(
      (formItem, index) => {
        formValid = formValid && formItem.valid;
      }
    );

    (this.formGroup.get('myFormArray2') as FormArray).controls.forEach(
      (formItem, index) => {
        formValid = formValid && formItem.valid;
      }
    );

    return formValid;
  }

  protected updateFormDataBeforeSave(): Observable<any> {
    return of(true);
  }

  protected onClickFormEnabledDisabled(enabled: boolean): void {
    if (this.formGroup) {
      if (enabled) {
        this.formGroup.enable();
      } else {
        this.formGroup.disable();
      }
    }
  }

  // ----------------------------------------------------------

  protected override executeAction_Start(): void {
    this.flow.closeCurrentAction().then(() => {
      this.flow
        .startAction(
          this.getCurrentFlowContextName(),
          this.getCurrentFlowModuleName(),
          this.getCurrentFlowActionName(),
          'step1',
          {},
          true
        )
        .then();
    });
  }

  protected override executeAction_Previous(): void {
    this.startLoader('Add-Execute-Backward');
    setTimeout(() => {
      this.flow.stepBackward().then(() => {
        this.endLoader('Add-Execute-Backward');
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 100);
      });
    }, 100);
  }

  protected override executeAction_Next(): void {
    if (this.formIsEditable && !this.isFormGroupValid()) {
      window.scrollTo(0, 0);
      this.formGroup.markAsDirty();
      this.formGroup.markAllAsTouched();

      (this.formGroup.get('myFormArray1') as FormArray).controls.forEach(
        (formItem, index) => {
          formItem.markAsDirty();
          formItem.markAllAsTouched();
        }
      );

      (this.formGroup.get('myFormArray2') as FormArray).controls.forEach(
        (formItem, index) => {
          formItem.markAsDirty();
          formItem.markAllAsTouched();
        }
      );

      this.formService.detectChanges();
      return;
    }

    this.startLoader('Add-Execute-Next');

    setTimeout(() => {
      this.flow
        .startStep(
          this.getCurrentFlowContextName(),
          this.getCurrentFlowModuleName(),
          this.getCurrentFlowActionName(),
          'step2'
        )
        .then(() => {
          this.endLoader('Add-Execute-Next');

          this.startLoader('Add-Execute-Next-Update-Before-Save');

          this.addSubscription(
            this.updateFormDataBeforeSave()
              .pipe(take(1))
              .subscribe((result) => {
                this.endLoader('Add-Execute-Next-Update-Before-Save');

                setTimeout(() => {
                  this.cdr.detectChanges();
                }, 100);
              })
          );
        });
    }, 100);
  }

  protected override executeAction_End(): void {
    this.startLoader('Add-Execute-End');

    setTimeout(() => {
      this.flow
        .startStep(
          this.getCurrentFlowContextName(),
          this.getCurrentFlowModuleName(),
          this.getCurrentFlowActionName(),
          'step3'
        )
        .then(() => {
          this.endLoader('Add-Execute-End');

          setTimeout(() => {
            this.cdr.detectChanges();
          }, 100);
        });
    }, 100);
  }

  protected override executeAction_Exit(): void {
    setTimeout(() => {
      this.flow.closeCurrentAction().then(() => {
        this.flow
          .startAction(
            this.getCurrentFlowContextName(),
            this.getCurrentFlowModuleName(),
            'list',
            '',
            null,
            true
          )
          .then();
      });
    }, 100);
  }

  // ---------------------------------------------------------------

  protected override isVisibleBtn_Exit(): boolean {
    return true;
  }

  // ---------------------------------------------------------------

  protected hasMobileSize(): boolean {
    return ElementsResizeObserverService.hasMobileSize();
  }

  // ---------------------------------------------------------------

  @HostListener('window:dev-button-clicked', ['$event'])
  protected onDevBtnClickedEvent($event: any): void {
    if (!this.__isDevMode) {
      return;
    }

    this.logger.console.log(this.__classname, 'formGroup', this.formGroup);

    this.logger.console.log(
      this.__classname,
      'getRawValue',
      this.formGroup.getRawValue()
    );

    this.logger.console.log(
      this.__classname,
      'formGroup -> valid',
      this.formGroup.valid
    );
  }

  protected printThis() {
    window.print();
  }
}
