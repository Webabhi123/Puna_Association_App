import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../model/brand.model';

interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-gi-ms-pipes-fittings',
  imports: [CommonModule,FormsModule],
  templateUrl: './gi-ms-pipes-fittings.html',
  styleUrl: './gi-ms-pipes-fittings.css'
})
export class GiMsPipesFittings {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'Unik',
        name: 'Unik',
        image: 'assets/brands-logo/unik-logo.png',
        title: 'Unik',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1111111',
        email: 'info@unik.com',
        website: 'www.unik.com',
        address: 'Pune, Maharashtra',
        dealing: 'Hydraulics, automation, and drive technology'
      },
      {
        id: 2,
        brandname: 'Precision',
        name: 'Precision',
        image: 'assets/brands-logo/precision-logo.png',
        title: 'Precision',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-2222222',
        email: 'info@precision.com',
        website: 'www.precision.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Hydraulic pumps, motors, and valves'
      }
    ];
    
  
    enquiryform: EnquiryForm = {
      name: '',
      phonenumber: '',
      email: '',
      message: '',
    };
  
    constructor(private http: HttpClient) {
      // Select the first brand by default
      if (this.brands.length > 0) {
        this.selectedBrand = this.brands[0];
      }
    }
  
    // Select a brand to display its details
    selectBrand(brand: Brand): void {
      this.selectedBrand = brand;
    }
    
    // Open the enquiry modal
    openEnquiryModal(): void {
      const modal = document.getElementById('enquiryModal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }
    
    closeEnquiryModal(): void {
      const modal = document.getElementById('enquiryModal') as HTMLElement | null;
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
    
    onSubmit(form: NgForm): void {
      if (form.valid) {
        console.log('Form Data:', this.enquiryform);
        this.http.post(`${environment.apiUrl}/api/enquiry/submit`, this.enquiryform).subscribe({
          next: (res) => {
            alert('Thank you for contacting us! We will get back to you soon.');
            form.resetForm();
            this.closeEnquiryModal();
          },
          error: () => {
            alert('There was an error submitting your form. Please try again.');
          }
        });
      } else {
        alert('Please fill in all required fields.');
      }
    }
}
