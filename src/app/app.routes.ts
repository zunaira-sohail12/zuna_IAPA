import { Routes } from '@angular/router';
import { ApplicationCompComponent } from './application-comp/application-comp.component';
import { CardActivationCompComponent } from './card-activation-comp/card-activation-comp.component';
import { AppCardDispatchComponent } from './app-card-dispatch/app-card-dispatch.component';
import { AppCardIssuanceComponent } from './app-card-issuance/app-card-issuance.component';
import { AppCreditLimitComponent } from './app-credit-limit/app-credit-limit.component';
import { AppDecissionComponent } from './app-decission/app-decission.component';
import { AppInternalCheckComponent } from './app-internal-check/app-internal-check.component';
import { AppVerificationComponent } from './app-verification/app-verification.component';
import { AppCardAssesmentComponent } from './app-card-assesment/app-card-assesment.component';
import { AppTobeApplicationComponent } from './app-tobe-application/app-tobe-application.component';
export const routes:Routes=[
  {
    path:'as-is',
    component:ApplicationCompComponent
  },
  {
    path:'as-is/card-activation',
    component:CardActivationCompComponent
  }, 
  {
    path:'as-is/card-dispatch',
    component:AppCardDispatchComponent
  },
  {
    path:'as-is/card-issue',
    component:AppCardIssuanceComponent
  },
  {
    path:'as-is/credit-limit',
    component:AppCreditLimitComponent
  },
  {
    path:'as-is/decission',
    component:AppDecissionComponent
  },
  {
    path:'as-is/bank-check',
    component:AppInternalCheckComponent
  },
  {
    path:'as-is/verification',
    component:AppVerificationComponent
  },
  {
    path:'as-is/assessment',
    component:AppCardAssesmentComponent
  },
   {
     path:'to-be',
     component:AppTobeApplicationComponent
   }
  ];
