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
  selector: 'app-servo-motor',
  imports: [CommonModule, FormsModule],
  templateUrl: './servo-motor.html',
  styleUrl: './servo-motor.css'
})
export class ServoMotor {
showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ABB',
      name: 'ABB',
      image: 'assets/brands-logo/abb-logo.png',
      title: 'ABB',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@abb.com',
      website: 'www.abb.com',
      address: 'India',
      dealing: 'Automation and drives'
    },
    {
      id: 2,
      brandname: 'Baldor',
      name: 'Baldor',
      image: 'assets/brands-logo/baldor-logo.png',
      title: 'Baldor',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@baldor.com',
      website: 'www.baldor.com',
      address: 'India',
      dealing: 'Motors and drives'
    },
    {
      id: 3,
      brandname: 'Delta',
      name: 'Delta',
      image: 'assets/brands-logo/delta-logo.png',
      title: 'Delta',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@delta.com',
      website: 'www.delta.com',
      address: 'India',
      dealing: 'Automation and power solutions'
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
      dealing: 'Pumps and motors'
    },
    {
      id: 5,
      brandname: 'Kollmorgen',
      name: 'KOLLMORGEN',
      image: 'assets/brands-logo/kollmorgen-logo.png',
      title: 'Kollmorgen',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@kollmorgen.com',
      website: 'www.kollmorgen.com',
      address: 'India',
      dealing: 'Motion control solutions'
    },
    {
      id: 6,
      brandname: 'Lenze',
      name: 'Lenze',
      image: 'assets/brands-logo/lenze-logo.png',
      title: 'Lenze',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@lenze.com',
      website: 'www.lenze.com',
      address: 'India',
      dealing: 'Drives and automation'
    },
    {
      id: 7,
      brandname: 'Mitsubishi',
      name: 'Mitsubishi',
      image: 'assets/brands-logo/mitsubishi-logo.png',
      title: 'Mitsubishi',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@mitsubishi.com',
      website: 'www.mitsubishi.com',
      address: 'India',
      dealing: 'Automation and industrial products'
    },
    {
      id: 8,
      brandname: 'Panasonic',
      name: 'Panasonic',
      image: 'assets/brands-logo/panasonic-logo.png',
      title: 'Panasonic',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@panasonic.com',
      website: 'www.panasonic.com',
      address: 'India',
      dealing: 'Electronics and automation'
    },
    {
      id: 9,
      brandname: 'Siemens',
      name: 'Siemens',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Siemens',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@siemens.com',
      website: 'www.siemens.com',
      address: 'India',
      dealing: 'Automation and drives'
    },
    {
      id: 10,
      brandname: 'Yaskawa',
      name: 'Yaskawa',
      image: 'assets/brands-logo/yaskawa-logo.png',
      title: 'Yaskawa',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@yaskawa.com',
      website: 'www.yaskawa.com',
      address: 'India',
      dealing: 'Motors and drives'
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
