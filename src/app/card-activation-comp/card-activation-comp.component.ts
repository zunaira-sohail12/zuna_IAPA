import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCardAssesmentComponent } from "../app-card-assesment/app-card-assesment.component";

@Component({
  selector: 'app-card-activation-comp',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AppCardAssesmentComponent],
  templateUrl: './card-activation-comp.component.html',
  styleUrl: './card-activation-comp.component.css'
})
export class CardActivationCompComponent implements OnInit{
holder_name:any;
cvc:any;
expiry_date:any;
card_no:any;
isEnabled = true;
  ngOnInit(): void {
    this.holder_name = sessionStorage.getItem("holder_name");
    this.cvc = sessionStorage.getItem("cvc");
    this.expiry_date = sessionStorage.getItem("expiry");
    this.card_no = sessionStorage.getItem("card_no");
  }
isChecked = false;
message = '';

 toggleCard() {
    this.isEnabled = !this.isEnabled;
  }
// onToggle(event: Event) {
//   const checked = (event.target as HTMLInputElement).checked;
//   this.isChecked = checked;
//   this.message = checked ? 'Checkbox is ON' : 'Checkbox is OFF';
// }
}
