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
  selector: 'app-house-wire',
  imports: [CommonModule,FormsModule],
  templateUrl: './house-wire.html',
  styleUrl: './house-wire.css'
})
export class HouseWire {

  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Kundan',
      name:'Kundan ',
      image: 'assets/brands-logo/kundan-logo.png',
      title: 'Kundan',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@schneider-electric.in',
      website: 'www.se.com/in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    {
      id: 2,
      brandname:'Great White',
      name: 'Great White',
      image: 'assets/brands-logo/greatwhite-logo.png',
      title: 'Great White',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 3,
      brandname:'Kalinga Gold',
      name: 'Kalinga Gold',
      image: 'assets/brands-logo/kalingagold-logo.png',
      title: 'Kalinga Gold',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 4,
      brandname:'Paramount',
      name: 'Paramount',
      image: 'assets/brands-logo/paramount-logo.png',
      title: 'Paramount',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    // Add more brands as needed
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
