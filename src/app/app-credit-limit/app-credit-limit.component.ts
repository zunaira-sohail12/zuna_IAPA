import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-credit-limit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-credit-limit.component.html',
  styleUrl: './app-credit-limit.component.css'
})
export class AppCreditLimitComponent implements OnInit{
refId:any;
responseDesc:any;
limit=500;
maxLimit:any;

constructor(private router: Router){}
ngOnInit(): void {
        this.refId = sessionStorage.getItem("referenceId");
        this.maxLimit = Number(localStorage.getItem("credit_limit"));
  }
  callingLimitSetService()
  {
    this.responseDesc = 'Credit Limit Set Successfully';
  }
}
