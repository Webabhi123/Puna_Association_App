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
  selector: 'app-vaccum-pumps',
  imports: [CommonModule, FormsModule],
  templateUrl: './vaccum-pumps.html',
  styleUrl: './vaccum-pumps.css'
})
export class VaccumPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Busch',
      name: 'Busch',
      image: 'assets/brands-logo/busch-logo.png',
      title: 'Busch',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@busch.com',
      website: 'www.busch.com',
      address: 'India',
      dealing: 'Vacuum pumps and systems'
    },
    {
      id: 2,
      brandname: 'Busch',
      name: 'Busch',
      image: 'assets/brands-logo/busch-logo.png',
      title: 'Busch',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@busch.com',
      website: 'www.busch.com',
      address: 'India',
      dealing: 'Vacuum pumps and systems'
    },
    {
      id: 3,
      brandname: 'Everest',
      name: 'Everest',
      image: 'assets/brands-logo/everest-logo.png',
      title: 'Everest',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@everest.com',
      website: 'www.everest.com',
      address: 'India',
      dealing: 'Vacuum and blowers'
    },
    {
      id: 4,
      brandname: 'Kirloskar',
      name: 'Kirloskar',
      image: 'assets/brands-logo/kirloskar-logo.png',
      title: 'Kirloskar',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@kirloskar.com',
      website: 'www.kirloskar.com',
      address: 'India',
      dealing: 'Pumps and compressors'
    },
    {
      id: 5,
      brandname: 'Rothenberger',
      name: 'Rothenberger',
      image: 'assets/brands-logo/rothenberger-logo.png',
      title: 'Rothenberger',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@rothenberger.com',
      website: 'www.rothenberger.com',
      address: 'India',
      dealing: 'Tools and equipment'
    },
    {
      id: 6,
      brandname: 'Value',
      name: 'Value',
      image: 'assets/brands-logo/value-logo.png',
      title: 'Value',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@value.com',
      website: 'www.value.com',
      address: 'India',
      dealing: 'Vacuum pumps and refrigeration tools'
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
