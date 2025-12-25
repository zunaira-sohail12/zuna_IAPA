import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-card-issuance',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-card-issuance.component.html',
  styleUrl: './app-card-issuance.component.css'
})
export class AppCardIssuanceComponent implements OnInit{
refId:any;
respMsg:any;
constructor(private router: Router){}
ngOnInit(): void {
        this.refId = sessionStorage.getItem("referenceId");
  }
  callingCardIssuanceService(holder_name:any, cvc:any,expiry_date:any,card_no: any)
  {
sessionStorage.setItem("holder_name", holder_name);
     sessionStorage.setItem("cvc", cvc);
     sessionStorage.setItem("expiry", expiry_date);
     sessionStorage.setItem("card_no", card_no);
     this.respMsg = 'Card Issuance Successful';
  }
}
