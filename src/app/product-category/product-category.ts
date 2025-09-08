import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-category',
  imports: [CommonModule,RouterModule
  ],
  templateUrl: './product-category.html',
  styleUrl: './product-category.css'
})
export class ProductCategory {
  openCategory: string | null = null;

  setOpenCategory(category: string) {
    this.openCategory = this.openCategory === category ? null : category;
  }
}

