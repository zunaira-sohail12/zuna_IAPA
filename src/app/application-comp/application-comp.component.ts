import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-comp',
  standalone: true,
  imports: [],
  templateUrl: './application-comp.component.html',
  styleUrl: './application-comp.component.css'
})
export class ApplicationCompComponent implements OnInit{
    ngOnInit(): void {
    localStorage.clear();
  }

  constructor(private router: Router){}


    callingService(
    ids: any,
    name:any,
    surname:any,
    profession:any,
    income:any,
    dependent:any,
    rent:any,
    organization:any
    )
  {
      localStorage.setItem("referenceId", this.generateRandomId(8));
      localStorage.setItem("ids", ids);
      localStorage.setItem("name", name);
      localStorage.setItem("surname", surname);
      localStorage.setItem("profession", profession);
      localStorage.setItem("income", income);
      localStorage.setItem("dependent", dependent);
      localStorage.setItem("organization", organization);
      localStorage.setItem("rent", rent);
  this.router.navigateByUrl('/as-is/verification');
  }


  generateRandomId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}
}
