import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-internal-check',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app-internal-check.component.html',
  styleUrl: './app-internal-check.component.css'
})
export class AppInternalCheckComponent {
 isLoading = false;
  showText = false;

  startLoading() {
    this.isLoading = true;
    this.showText = false;

    setTimeout(() => {
      this.isLoading = false;
      this.showText = true;
    }, 30000); // 30 seconds
  }
}
