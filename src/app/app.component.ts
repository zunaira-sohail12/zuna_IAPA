import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApplicationCompComponent } from './application-comp/application-comp.component';
import { CardActivationCompComponent } from './card-activation-comp/card-activation-comp.component';
import { AppCardDispatchComponent } from './app-card-dispatch/app-card-dispatch.component';
import { AppCardIssuanceComponent } from './app-card-issuance/app-card-issuance.component';
import { AppCreditLimitComponent } from './app-credit-limit/app-credit-limit.component';
import { AppDecissionComponent } from './app-decission/app-decission.component';
import { AppVerificationComponent } from './app-verification/app-verification.component';
import { AppCardAssesmentComponent } from './app-card-assesment/app-card-assesment.component';
import { AppTobeApplicationComponent } from './app-tobe-application/app-tobe-application.component';
import { AppInternalCheckComponent } from './app-internal-check/app-internal-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ApplicationCompComponent,
    CardActivationCompComponent,
AppDecissionComponent,
AppCardAssesmentComponent,
AppTobeApplicationComponent,
AppVerificationComponent,
AppCardDispatchComponent,
AppCardIssuanceComponent,
AppCreditLimitComponent,
AppInternalCheckComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'credit-card-application-system-1';
    route: string;

  constructor(private router: Router) { 
    this.route = router.url; 
  }
}
