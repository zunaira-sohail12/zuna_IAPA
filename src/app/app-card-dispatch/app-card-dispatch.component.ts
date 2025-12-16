import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-card-dispatch',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-card-dispatch.component.html',
  styleUrl: './app-card-dispatch.component.css'
})
export class AppCardDispatchComponent {
 holder_name:any;
  cvc:any;
  expiry:any;
  card_no:any;
  
printDetails()
{  this.holder_name = sessionStorage.getItem("holder_name");
   this.cvc = sessionStorage.getItem("cvc");
   this.expiry = sessionStorage.getItem("expiry");
  this.card_no = sessionStorage.getItem("card_no");
}

generatePin()
{
  const pin = Math.floor(1000 + Math.random() * 9000);
  alert("Card Dispatched Successfully! Your PIN is: " + pin);
}
}
