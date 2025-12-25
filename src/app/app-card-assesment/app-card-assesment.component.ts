import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-card-assesment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app-card-assesment.component.html',
  styleUrl: './app-card-assesment.component.css'
})
export class AppCardAssesmentComponent implements OnInit{

refId:any;
id_no:any;
name:any;
surname: any;   
credit_limit:any;
credit_score:any;
eligible_type:any;

ngOnInit(): void {
 this.refId = localStorage.getItem("referenceId");
}

callingAssessmentService()
  {
console.log("Reference ID: "+this.refId);
console.log("Income: "+localStorage.getItem("income"));
console.log("Rent: "+localStorage.getItem("rent"));
console.log("Dependent: "+localStorage.getItem("dependent"));  

const creditScore = this.creditScore(Number(localStorage.getItem("income")), 
Number(localStorage.getItem("rent")),Number(localStorage.getItem("dependent")));
const eligibleType = this.eligibleType(creditScore);
const creditLimit = this.creditLimit(creditScore);

 

    //const obj = JSON.parse(JSON.stringify(data));
    this.id_no = localStorage.getItem("ids");
    this.name = localStorage.getItem("name");
    this.surname = localStorage.getItem("surname");
    this.credit_limit = creditLimit;
    this.credit_score = creditScore;
    this.eligible_type = eligibleType;
    localStorage.setItem("credit_limit", creditLimit.toString());
    localStorage.setItem("credit_score", creditScore.toString());
    localStorage.setItem("eligible_type", eligibleType);
  }

  creditScore(income: number, rent: number, dependent: number): number {
    switch (dependent) {
        case 0:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income);
        case 1:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 1;
        case 2:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 2;
        case 3:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 3;
        case 4:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 4;
        case 5:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 5;
        case 6:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 6;
        case 7:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 7;
        case 8:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 8;
        case 9:
            return (this.calculateRent(rent) * 10) + this.calculateIncome(income) - 9;
        default:
            return 0.0;
    }
}

calculateRent(rent: number): number {
    if (rent > 500 && rent <= 1500) {
        return 9;
    } else if (rent > 1500 && rent <= 3000) {
        return 8;
    } else if (rent > 3000 && rent <= 4500) {
        return 7;
    } else if (rent > 4500 && rent <= 6000) {
        return 6;
    } else if (rent > 6000 && rent <= 7500) {
        return 5;
    } else if (rent > 7500 && rent <= 9000) {
        return 4;
    } else if (rent > 9000 && rent <= 12000) {
        return 3;
    } else if (rent > 12000 && rent <= 15000) {
        return 2;
    } else if (rent > 15000) {
        return 1;
    } else {
        return 0;
    }
}

calculateIncome(income: number): number {
    if (income > 3000 && income <= 20000) {
        return 1;
    } else if (income > 20000 && income <= 40000) {
        return 2;
    } else if (income > 40000 && income <= 60000) {
        return 3;
    } else if (income > 60000 && income <= 80000) {
        return 4;
    } else if (income > 80000 && income <= 100000) {
        return 5;
    } else if (income > 100000 && income <= 150000) {
        return 6;
    } else if (income > 150000 && income <= 200000) {
        return 7;
    } else if (income > 200000 && income <= 300000) {
        return 8;
    } else if (income > 300000) {
        return 9;
    } else {
        return 0;
    }
}


eligibleType(creditScore: number): string {
    if (creditScore > 1.0 && creditScore <= 20.0) {
        return "bronze";
    } else if (creditScore > 20.0 && creditScore <= 40.0) {
        return "silver";
    } else if (creditScore > 40.0 && creditScore <= 60.0) {
        return "gold";
    } else if (creditScore > 60.0 && creditScore <= 80.0) {
        return "diamond";
    } else if (creditScore > 80.0 && creditScore <= 100.0) {
        return "platinum";
    } else {
        return "none";
    }
}

creditLimit(creditScore: number): number {
    if (creditScore > 1.0 && creditScore <= 10.0) {
        return 5000.00;
    } else if (creditScore > 10.0 && creditScore <= 20.0) {
        return 7500.00;
    } else if (creditScore > 20.0 && creditScore <= 30.0) {
        return 1000.00;   
    } else if (creditScore > 30.0 && creditScore <= 40.0) {
        return 15000.00;
    } else if (creditScore > 40.0 && creditScore <= 50.0) {
        return 20000.00;
    } else if (creditScore > 50.0 && creditScore <= 60.0) {
        return 25000.00;
    } else if (creditScore > 60.0 && creditScore <= 70.0) {
        return 30000.00;
    } else if (creditScore > 70.0 && creditScore <= 80.0) {
        return 35000.00;
    } else if (creditScore > 80.0 && creditScore <= 90.0) {
        return 40000.00;
    } else if (creditScore > 90.0 && creditScore <= 100.0) {
        return 45000.00;
    } else {
        return 0.00;
    }
}
}
