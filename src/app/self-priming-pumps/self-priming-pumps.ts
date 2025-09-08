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
  selector: 'app-self-priming-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './self-priming-pumps.html',
  styleUrl: './self-priming-pumps.css'
})
export class SelfPrimingPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Crompton',
      name: 'Crompton',
      image: 'assets/brands-logo/crompton-logo.png',
      title: 'Crompton',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@crompton.com',
      website: 'www.crompton.com',
      address: 'India',
      dealing: 'Electricals and pumps'
    },
    {
      id: 2,
      brandname: 'CRI',
      name: 'CRI',
      image: 'assets/brands-logo/cri-logo.png',
      title: 'CRI',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@cri.com',
      website: 'www.cri.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 3,
      brandname: 'Honda',
      name: 'Honda',
      image: 'assets/brands-logo/honda-logo.png',
      title: 'Honda',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@honda.com',
      website: 'www.honda.com',
      address: 'India',
      dealing: 'Engines and pumps'
    },
    {
      id: 4,
      brandname: 'KSB',
      name: 'KSB',
      image: 'assets/brands-logo/ksb-logo.png',
      title: 'KSB',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@ksb.com',
      website: 'www.ksb.com',
      address: 'India',
      dealing: 'Pumps and valves'
    },
    {
      id: 5,
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
      dealing: 'Pumps and motors'
    },
    {
      id: 6,
      brandname: 'KisanKraft',
      name: 'KisanKraft',
      image: 'assets/brands-logo/kisankraft-logo.png',
      title: 'KisanKraft',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@kisankraft.com',
      website: 'www.kisankraft.com',
      address: 'India',
      dealing: 'Agricultural pumps and equipment'
    },
    {
      id: 7,
      brandname: 'Lubi',
      name: 'Lubi',
      image: 'assets/brands-logo/lubi-logo.png',
      title: 'Lubi',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@lubi.com',
      website: 'www.lubi.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 8,
      brandname: 'Shakti',
      name: 'Shakti',
      image: 'assets/brands-logo/shakti-logo.png',
      title: 'Shakti',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@shakti.com',
      website: 'www.shakti.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 9,
      brandname: 'Texmo',
      name: 'Texmo',
      image: 'assets/brands-logo/texmo-logo.png',
      title: 'Texmo',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@texmo.com',
      website: 'www.texmo.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 10,
      brandname: 'Wilo',
      name: 'Wilo',
      image: 'assets/brands-logo/wilo-logo.png',
      title: 'Wilo',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@wilo.com',
      website: 'www.wilo.com',
      address: 'India',
      dealing: 'Pumps and water solutions'
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
