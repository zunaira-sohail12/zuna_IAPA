import { CommonModule } from '@angular/common';
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Dexie, Table } from 'dexie';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface FileItem {
  file: File | null;
  description: string;
}
interface Customer {
  id: any;
  name: any;
  surname: any;
  profession: any;
  income: any;
  dependent: any;
  organization: any;
  rent: any;
  internalBankCheck: any;
  creditScore: any;
  eligibleType: any;
  creditLimit: any;
  status: any;
  min: number;
  max: number;
  creditLimitUpdate: any;
}
@Component({
  selector: 'app-tobe-application',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-tobe-application.component.html',
  styleUrls: ['./app-tobe-application.component.css']
})
export class AppTobeApplicationComponent extends Dexie implements OnInit{
data: any[] = [];
approvedRequests: any[] = [];



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

card_type: any;
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

oneExcelFileChange(event: any) { 
  const creditScore = 0;
  const eligibleType = '';
  const creditLimit = 0;
  let status = '';
  const target: DataTransfer = <DataTransfer>(event.target); 
  
  if (target.files.length !== 1) throw new Error('Cannot use multiple files'); 
  const reader: FileReader = new FileReader(); 
  reader.onload = (e: any) => { 
    const bstr: string = e.target.result; 
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' }); 
    // Get first sheet 
    const wsname: string = wb.SheetNames[0]; 
    const ws: XLSX.WorkSheet = wb.Sheets[wsname]; 
    // Convert to JSON 
    this.data = XLSX.utils.sheet_to_json(ws, { header: 1 }); 
 console.log(this.data); 
this.data[0].push("InternalBankCheck","CreditScore", "EligibleType", "CreditLimit","Status");
 for (let i = 0; i < this.data.length; i++) { 
  let row = this.data[i]; 
  let creditScore = this.creditScore(Number(row[4]), 
  Number(row[6]),Number(row[5]));
   let eligibleType = this.eligibleType(creditScore);
   let creditLimit = this.creditLimit(creditScore);
   if(creditLimit < 0 && eligibleType == "none" && creditScore < 0 )
   {
    status = "Failed";
   }
   else if (creditScore < 20.0 )
   {
    status = "Rejected";
   }
   else{
    status = "Approved";
    let Customer: Customer = {
      id: this.data[i][0],
      name: this.data[i][1],
      surname: this.data[i][2],
      profession: this.data[i][3],
      income: this.data[i][4],
      dependent: this.data[i][5],  
      rent: this.data[i][6],
      organization: this.data[i][7],
      internalBankCheck: "Success",
      creditScore: creditScore,
      eligibleType: eligibleType,
      creditLimit: creditLimit,
      status: status,
      min: 0,
      max: creditLimit,
      creditLimitUpdate: creditLimit
    };
    this.approvedRequests.push(Customer);
    console.log(this.data[1]);
    console.log(Customer);
   }
  this.data[i].push("Success",creditScore, eligibleType, creditLimit, status);
  console.log("XXX: "+ this.data[1][1]);


}
       
}; 
 reader.readAsBinaryString(target.files[0]); 
}

onLimitChange(item: any) { 
  //alert('Updated limit:'+ item);
 } // You can emit to parent or call a service here }


 generateCard(item: any) { 
  this.isChecked = false
  this.thirdStep();
  console.log('Button clicked:', item); 
  this.card_type = item.eligibleType;
  this.holder_name = item.name + ' ' + item.surname;
   this.cvc = this.getCVC;
   this.expiry = "12/30";
  this.card_no = this.generateCardNumber();
     this.cardHolderMsg="Card Issued Successfully";
  this.showForth = false;

}
exportFile() 
{ 
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data); 
  const wb: XLSX.WorkBook = XLSX.utils.book_new(); 
  XLSX.utils.book_append_sheet(wb, ws, "UpdatedSheet"); 
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' }); 
saveAs(new Blob([wbout], { 
  type: "application/octet-stream" 
}), "updated.xlsx"); 
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

  
      callingDecissionService(item: any)
  {
    this.id_no = item.id;
    this.names = item.name;
    this.surname = item.surname;
    this.professionr = item.profession;
    this.incomer = item.income;
    this.dependentr = item.dependent;
    this.organizationr = item.organization;
    this.rentr = item.rent;
    this.credit_limit = item.creditLimit;
    this.credit_score = item.creditScore;
    this.eligible_type = item.eligibleType;
this.showForth = true;
this.showThird=false;
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
  this.isChecked = true;
  this.pin = Math.floor(Math.random() * 10000);
  alert("Generated Pin: " + this.pin);
  this.finalMsg="Card Dispatched Successfully with Pin: ";
}
getCVC(): number { 
  return Math.floor(100 + Math.random() * 900); 
}
generateCardNumber(): string { 
  let result = "";
  for (let i = 0; i < 16; i++) 
  { 
    result += Math.floor(Math.random() * 10).toString(); 

  } 
  return result; 
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
