import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-app-decission',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-decission.component.html',
  styleUrl: './app-decission.component.css'
})
export class AppDecissionComponent implements OnInit {
  refId:any;
id_no:any;
name:any;
surname: any;   
profession:any;
income:any;
dependent:any;
organization:any;
rent:any;
credit_limit:any;
credit_score:any;
eligible_type:any;
  
  isVisible: boolean = false;

ngOnInit(): void {
 this.refId = localStorage.getItem("referenceId");
 this.id_no = localStorage.getItem("ids");
 this.name = localStorage.getItem("name");
 this.surname = localStorage.getItem("surname");
 this.profession = localStorage.getItem("profession");
 this.income = localStorage.getItem("income");
 this.dependent = localStorage.getItem("dependent");
 this.organization = localStorage.getItem("organization");
 this.rent = localStorage.getItem("rent");
this.credit_limit = localStorage.getItem("credit_limit");
  this.credit_score = localStorage.getItem("credit_score"); 
  this.eligible_type = localStorage.getItem("eligible_type");  
}

  showReport() {
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
}
