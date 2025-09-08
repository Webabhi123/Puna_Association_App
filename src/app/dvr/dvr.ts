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
  selector: 'app-dvr',
  imports: [CommonModule,FormsModule],
  templateUrl: './dvr.html',
  styleUrl: './dvr.css'
})
export class Dvr {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Avtron',
      name: 'Avtron Security Systems',
      image: 'avtron.png',
      title: 'Surveillance & Security Solutions',
      contactName: 'Sanjay Patel',
      mobile: '9811111122',
      whatsapp: '9811111122',
      landline: '02211112233',
      email: 'info@avtronsecurity.com',
      website: 'www.avtronsecurity.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, DVR, IP Cameras, Security Solutions'
    },
    {
      id: 2,
      brandname: 'CP Plus',
      name: 'CP Plus India Pvt Ltd',
      image: 'cpplus.png',
      title: 'CCTV & Surveillance',
      contactName: 'Ravi Kumar',
      mobile: '9822233344',
      whatsapp: '9822233344',
      landline: '01133445566',
      email: 'support@cpplusworld.com',
      website: 'www.cpplusworld.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'CCTV, DVR, NVR, IP Cameras'
    },
    {
      id: 3,
      brandname: 'Dahua',
      name: 'Dahua Technology India',
      image: 'dahua.png',
      title: 'Video Surveillance',
      contactName: 'Sandeep Sharma',
      mobile: '9833344455',
      whatsapp: '9833344455',
      landline: '02222334455',
      email: 'info@dahuasecurity.com',
      website: 'www.dahuasecurity.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, IP Cameras, NVR, Access Control'
    },
    {
      id: 4,
      brandname: 'Godrej',
      name: 'Godrej Security Solutions',
      image: 'godrej.png',
      title: 'Trusted Security Systems',
      contactName: 'Arun Nair',
      mobile: '9844455566',
      whatsapp: '9844455566',
      landline: '02244556677',
      email: 'support@godrej.com',
      website: 'www.godrejsecure.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, Home Security, Access Control, Safes'
    },
    {
      id: 5,
      brandname: 'Hikvision',
      name: 'Hikvision India Pvt Ltd',
      image: 'hikvision.png',
      title: 'Surveillance Systems',
      contactName: 'Vikas Gupta',
      mobile: '9855566677',
      whatsapp: '9855566677',
      landline: '01155667788',
      email: 'support@hikvisionindia.com',
      website: 'www.hikvisionindia.com',
      address: 'Delhi, India',
      dealing: 'CCTV, DVR, IP Solutions, Video Security'
    },
    {
      id: 6,
      brandname: 'Honeywell',
      name: 'Honeywell Security',
      image: 'honeywell.png',
      title: 'Security & Automation',
      contactName: 'Rajesh Singh',
      mobile: '9866677788',
      whatsapp: '9866677788',
      landline: '02233445566',
      email: 'security@honeywell.com',
      website: 'www.honeywellbuildings.in',
      address: 'Bangalore, Karnataka',
      dealing: 'CCTV, Home Automation, Security Solutions'
    },
    {
      id: 7,
      brandname: 'Panasonic',
      name: 'Panasonic Security Systems',
      image: 'panasonic.png',
      title: 'Video & Security Solutions',
      contactName: 'Pooja Sharma',
      mobile: '9877788899',
      whatsapp: '9877788899',
      landline: '01166778899',
      email: 'support@in.panasonic.com',
      website: 'www.panasonic.com/in',
      address: 'Gurgaon, Haryana',
      dealing: 'CCTV, IP Cameras, Video Door Phones'
    },
    {
      id: 8,
      brandname: 'Samsung',
      name: 'Samsung Security Systems',
      image: 'samsung.png',
      title: 'Smart Security Solutions',
      contactName: 'Manish Arora',
      mobile: '9888899900',
      whatsapp: '9888899900',
      landline: '02277889900',
      email: 'security@samsung.com',
      website: 'www.samsung.com/in/security',
      address: 'Noida, Uttar Pradesh',
      dealing: 'CCTV, Smart Security, IP Solutions'
    },
    {
      id: 9,
      brandname: 'TVT',
      name: 'TVT Digital Technology',
      image: 'tvt.png',
      title: 'CCTV & Video Surveillance',
      contactName: 'Prakash Yadav',
      mobile: '9899900011',
      whatsapp: '9899900011',
      landline: '01122335577',
      email: 'support@tvt.net.in',
      website: 'www.tvt.net.in',
      address: 'Delhi, India',
      dealing: 'CCTV, DVR, NVR, Video Surveillance Solutions'
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
