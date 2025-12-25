import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Dexie, Table } from 'dexie';

interface FileItem {
  file: File | null;
  description: string;
}
@Component({
  selector: 'app-app-verification',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './app-verification.component.html',
  styleUrl: './app-verification.component.css'
})
export class AppVerificationComponent extends Dexie implements OnInit {
   fileItems: FileItem[] = [{ file: null, description: '' }];
  uploadProgress: number[] = [];
refId:any;
  files!: Dexie.Table<{ id?: number; name: string; data: Blob }>;
fileMsg:any;

  ngOnInit(): void {
    this.refId = localStorage.getItem("referenceId");
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
    this.fileMsg = 'Files Uploaded Successfully';
  }
  
}
