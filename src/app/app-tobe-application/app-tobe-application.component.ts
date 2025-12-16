import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Dexie, Table } from 'dexie';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
interface FileItem {
  file: File | null;
  description: string;
}
@Component({
  selector: 'app-app-tobe-application',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-tobe-application.component.html',
  styleUrl: './app-tobe-application.component.css'
})
export class AppTobeApplicationComponent extends Dexie implements OnInit{

  fileItems: FileItem[] = [{ file: null, description: '' }];
  uploadProgress: number[] = [];
  files!: Dexie.Table<{ id?: number; name: string; data: Blob }>;

showSecond = false;
showThird = false;
showForth = false;
showFifth = false;
showSixth = false;
showSeventh = false;

referenceId:any;
id_no:any;
names:any;
surname: any;   
professionr:any;
incomer:any;
dependentr:any;
organizationr:any;
rentr:any;
credit_limit:any;
credit_score:any;
eligible_type:any;

responseDesc:any;
limit:any;

holder_name:any;
cvc:any;
expiry:any;
card_no:any;
pin:any;
/////
  isVisible: boolean = false;
saveMsg:any;
uploadAllMsg:any;
cardHolderMsg:any;
isChecked = false;
isEnabled = true;

finalMsg:any;

  ngOnInit(): void {
            this.referenceId = sessionStorage.getItem("referenceId");
  }
 toggleCard() {
    this.isEnabled = !this.isEnabled;
  }
  callingService(
    ids:any,
    name:any,
    surnames:any,
    profession:any,
    income:any,
    dependent:any,
    organization:any,
    rent:any)
  {
    localStorage.setItem("referenceId", this.generateRandomId(8));
    localStorage.setItem("id_no", ids);
    localStorage.setItem("name", name);
      localStorage.setItem("surname", surnames);
      localStorage.setItem("profession", profession);
      localStorage.setItem("income", income);
      localStorage.setItem("dependent", dependent);
      localStorage.setItem("organization", organization);
      localStorage.setItem("rent", rent);
      this.saveMsg="Data Saved Successfully";
  }
  
  
  
  addFile(): void {
    this.fileItems.push({ file: null, description: '' });
  
  }

  removeFile(index: number): void {
    this.fileItems.splice(index, 1);
        this.uploadProgress.splice(index, 1);
  }

  onFileChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileItems[index].file = input.files[0];
    }
  }

  uploadAll(): void {
    const formData = new FormData();

    this.fileItems.forEach(async (item, index) => {
      if (item.file) {
        await this.files.add({ name: item.description, data: item.file });

        //formData.append(item.description, item.file);
        //formData.append('descriptions', item.description);
      }
    });
    this.uploadAllMsg="All Files Uploaded Successfully";
  }
  
  
  
  
callingAssessmentService()
  {
     const creditScore = this.creditScore(Number(localStorage.getItem("income")), 
Number(localStorage.getItem("rent")),Number(localStorage.getItem("dependent")));
const eligibleType = this.eligibleType(creditScore);
const creditLimit = this.creditLimit(creditScore);

    //const obj = JSON.parse(JSON.stringify(data));
    this.id_no = localStorage.getItem("id_no");
    this.referenceId = localStorage.getItem("referenceId");
    this.names = localStorage.getItem("name");
    this.surname = localStorage.getItem("surname");
    this.professionr = localStorage.getItem("profession");
    this.incomer = localStorage.getItem("income");
    this.dependentr = localStorage.getItem("dependent");
    this.organizationr = localStorage.getItem("organization");
    this.rentr = localStorage.getItem("rent");
    this.credit_limit = creditLimit;
    this.credit_score = creditScore;
    this.eligible_type = eligibleType;
  }
  
  
    callingDecissionService()
  {
//     const creditScore = this.creditScore(Number(localStorage.getItem("income")), 
// Number(localStorage.getItem("rent")),Number(localStorage.getItem("dependent")));
// const eligibleType = this.eligibleType(creditScore);
// const creditLimit = this.creditLimit(creditScore);
//     this.id_no = localStorage.getItem("id_no");
//     this.referenceId = localStorage.getItem("referenceId");
//     this.names = localStorage.getItem("name");
//     this.surname = localStorage.getItem("surname");
//     this.profession = localStorage.getItem("profession");
//     this.income = localStorage.getItem("income");
//     this.dependent = localStorage.getItem("dependent");
//     this.organization = localStorage.getItem("organization");
//     this.rent = localStorage.getItem("rent");
//     this.credit_limit = creditLimit;
//     this.credit_score = creditScore;
//     this.eligible_type = eligibleType;
    this.isVisible = !this.isVisible;
  }
   generatePDF() {
    const element = document.getElementById('pdfContent');
    if (!element) return;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('credit-assesment-report.pdf');
    });
  }
  
    callingDownloadReportService()
  {
    const element = document.getElementById('pdfContent');
    if (!element) return;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('document.pdf');
    });
  }
  
  
    callingCardIssuanceService(holder_name:any, cvc:any,expiry_date:any,card_no: any)
  {

     this.holder_name = holder_name;
   this.cvc = cvc;
   this.expiry = expiry_date;
  this.card_no = card_no;
     this.cardHolderMsg="Card Issued Successfully";
  }
  
  
    callingLimitSetService()
  {
    this.responseDesc='Credit Limit Set Successfully';
  }
  
  printDetails()
{  this.holder_name = localStorage.getItem("holder_name");
   this.cvc = localStorage.getItem("cvc");
   this.expiry = localStorage.getItem("expiry");
  this.card_no = localStorage.getItem("card_no");
}

generatePin()
{
  this.pin = Math.floor(Math.random() * 10000);
  alert("Generated Pin: " + this.pin);
  this.finalMsg="Card Dispatched Successfully with Pin: ";
}
secondStep()
{
  this.showSecond = true;
}

thirdStep()
{
  this.showThird = true;
}
forthStep()
{
  this.showForth = true;
}
fifthStep()
{
  this.showFifth = true;
}
sixthStep()
{
  this.showSixth = true;
}
seventhStep()
{
  this.showSeventh = true;
}

//////////////////////////////////////////////
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
