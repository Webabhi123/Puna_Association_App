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
  selector: 'app-cctv-camera-cables-wires',
  imports: [CommonModule,FormsModule],
  templateUrl: './cctv-camera-cables-wires.html',
  styleUrl: './cctv-camera-cables-wires.css'
})
export class CctvCameraCablesWires {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'D-Link',
      name: 'D-Link India Ltd',
      image: 'dlink.png',
      title: 'Networking & Connectivity',
      contactName: 'Arvind Mehta',
      mobile: '9810011122',
      whatsapp: '9810011122',
      landline: '02233445566',
      email: 'support@dlink.co.in',
      website: 'www.dlink.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Routers, Switches, CCTV Networking, WiFi Solutions'
    },
    {
      id: 2,
      brandname: 'Finolex',
      name: 'Finolex Cables Ltd',
      image: 'finolex.png',
      title: 'Wires & Cables',
      contactName: 'Rakesh Nair',
      mobile: '9822233344',
      whatsapp: '9822233344',
      landline: '02033445566',
      email: 'info@finolex.com',
      website: 'www.finolex.com',
      address: 'Pune, Maharashtra',
      dealing: 'Electrical Wires, Cables, Switches, Networking Cables'
    },
    {
      id: 3,
      brandname: 'KEI',
      name: 'KEI Industries Ltd',
      image: 'kei.png',
      title: 'Power & Control Cables',
      contactName: 'Suresh Gupta',
      mobile: '9833344455',
      whatsapp: '9833344455',
      landline: '01122334455',
      email: 'marketing@kei-ind.com',
      website: 'www.kei-ind.com',
      address: 'New Delhi, India',
      dealing: 'House Wires, Power Cables, High Tension Cables'
    },
    {
      id: 4,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Cables & Wires',
      contactName: 'Anil Sharma',
      mobile: '9844455566',
      whatsapp: '9844455566',
      landline: '02244556677',
      email: 'support@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Wires, Cables, Fans, Switches, LED Lights'
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
