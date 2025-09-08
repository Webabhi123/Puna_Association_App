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
  selector: 'app-cctv-switch-mode-power-supply',
  imports: [CommonModule,FormsModule],
  templateUrl: './cctv-switch-mode-power-supply.html',
  styleUrl: './cctv-switch-mode-power-supply.css'
})
export class CctvSwitchModePowerSupply {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ABB',
      name: 'ABB India Ltd',
      image: 'abb.png',
      title: 'Automation & Power',
      contactName: 'Rajesh Patel',
      mobile: '9811112233',
      whatsapp: '9811112233',
      landline: '02233446655',
      email: 'info@in.abb.com',
      website: 'new.abb.com/in',
      address: 'Bengaluru, Karnataka',
      dealing: 'Robotics, Automation, Power Systems, Industrial Solutions'
    },
    {
      id: 2,
      brandname: 'Meanwell',
      name: 'Meanwell Enterprises',
      image: 'meanwell.png',
      title: 'Power Supplies',
      contactName: 'Arun Mehra',
      mobile: '9822113344',
      whatsapp: '9822113344',
      landline: '01122335544',
      email: 'support@meanwell.in',
      website: 'www.meanwell.com',
      address: 'Taiwan / India Operations',
      dealing: 'SMPS, LED Drivers, Industrial Power Solutions'
    },
    {
      id: 3,
      brandname: 'Omron',
      name: 'Omron Automation Pvt Ltd',
      image: 'omron.png',
      title: 'Automation & Healthcare',
      contactName: 'Neha Sharma',
      mobile: '9833224455',
      whatsapp: '9833224455',
      landline: '02233445566',
      email: 'support@omron.co.in',
      website: 'www.omron.co.in',
      address: 'Gurgaon, Haryana',
      dealing: 'Industrial Automation, Relays, Healthcare Devices'
    },
    {
      id: 4,
      brandname: 'Schneider',
      name: 'Schneider Electric India',
      image: 'schneider.png',
      title: 'Energy Management & Automation',
      contactName: 'Amit Verma',
      mobile: '9844335566',
      whatsapp: '9844335566',
      landline: '0120667788',
      email: 'care.in@schneider-electric.com',
      website: 'www.se.com/in',
      address: 'Gurgaon, Haryana',
      dealing: 'Switchgear, Automation, UPS, Energy Solutions'
    },
    {
      id: 5,
      brandname: 'Siemens',
      name: 'Siemens India Ltd',
      image: 'siemens.png',
      title: 'Automation & Energy',
      contactName: 'Prakash Iyer',
      mobile: '9855667788',
      whatsapp: '9855667788',
      landline: '02266677888',
      email: 'info.india@siemens.com',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation, Drives, Healthcare, Energy, Industrial Solutions'
    }    
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
