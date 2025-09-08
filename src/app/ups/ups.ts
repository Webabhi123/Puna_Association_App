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
  selector: 'app-ups',
  imports: [CommonModule, FormsModule],
  templateUrl: './ups.html',
  styleUrl: './ups.css'
})
export class Ups {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Amaze",
      name: "Amaze UPS Systems",
      image: "amaze.png",
      title: "Amaze Power Backup Solutions",
      contactName: "Rahul Mehta",
      mobile: "+91-9876543210",
      whatsapp: "+91-9876543210",
      landline: "022-23456789",
      email: "support@amazeups.com",
      website: "www.amazeups.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "UPS Systems, Power Backup Solutions"
    },
    {
      id: 2,
      brandname: "Champion",
      name: "Champion Power Solutions",
      image: "champion.png",
      title: "Champion UPS & Inverters",
      contactName: "Sandeep Rao",
      mobile: "+91-9988776655",
      whatsapp: "+91-9988776655",
      landline: "011-23451234",
      email: "info@championups.com",
      website: "www.championups.com",
      address: "New Delhi, India",
      dealing: "UPS, Inverters, Power Backup"
    },
    {
      id: 3,
      brandname: "Crompton",
      name: "Crompton Power",
      image: "crompton.png",
      title: "Crompton Backup & Power",
      contactName: "Vikram Singh",
      mobile: "+91-9876001234",
      whatsapp: "+91-9876001234",
      landline: "080-23456789",
      email: "service@cromptonups.com",
      website: "www.cromptonups.com",
      address: "Bangalore, Karnataka, India",
      dealing: "Power Backup Systems, UPS"
    },
    {
      id: 4,
      brandname: "CyberPower",
      name: "CyberPower Systems",
      image: "cyberpower.png",
      title: "CyberPower UPS Systems",
      contactName: "Priya Nair",
      mobile: "+91-8899776655",
      whatsapp: "+91-8899776655",
      landline: "044-23451234",
      email: "contact@cyberpower.com",
      website: "www.cyberpower.com",
      address: "Chennai, Tamil Nadu, India",
      dealing: "UPS Systems, Energy Solutions"
    },
    {
      id: 5,
      brandname: "Eaton",
      name: "Eaton Power Solutions",
      image: "eaton.png",
      title: "Eaton UPS & Backup",
      contactName: "Anil Sharma",
      mobile: "+91-9911223344",
      whatsapp: "+91-9911223344",
      landline: "011-22334455",
      email: "support@eaton.com",
      website: "www.eaton.com",
      address: "Gurgaon, Haryana, India",
      dealing: "UPS, Backup Solutions, Energy"
    },
    {
      id: 6,
      brandname: "Foxin",
      name: "Foxin Power",
      image: "foxin.png",
      title: "Foxin UPS & Inverters",
      contactName: "Rajesh Patel",
      mobile: "+91-9898989898",
      whatsapp: "+91-9898989898",
      landline: "079-23450000",
      email: "info@foxinups.com",
      website: "www.foxinups.com",
      address: "Ahmedabad, Gujarat, India",
      dealing: "UPS, Inverters, Power Backup"
    },
    {
      id: 7,
      brandname: "Frontech",
      name: "Frontech Power Systems",
      image: "frontech.png",
      title: "Frontech Backup Systems",
      contactName: "Neha Verma",
      mobile: "+91-7777888999",
      whatsapp: "+91-7777888999",
      landline: "033-23456789",
      email: "sales@frontechups.com",
      website: "www.frontechups.com",
      address: "Kolkata, West Bengal, India",
      dealing: "UPS, Backup Power, Energy"
    },
    {
      id: 8,
      brandname: "Hitachi",
      name: "Hitachi Power Systems",
      image: "hitachi.png",
      title: "Hitachi UPS & Energy",
      contactName: "Ravi Kumar",
      mobile: "+91-9000001234",
      whatsapp: "+91-9000001234",
      landline: "022-22334455",
      email: "support@hitachipower.com",
      website: "www.hitachipower.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "UPS, Energy Solutions"
    },
    {
      id: 9,
      brandname: "iBall",
      name: "iBall Power Systems",
      image: "iball.png",
      title: "iBall UPS & Backup",
      contactName: "Arjun Desai",
      mobile: "+91-8888001122",
      whatsapp: "+91-8888001122",
      landline: "079-22334455",
      email: "care@iballups.com",
      website: "www.iballups.com",
      address: "Ahmedabad, Gujarat, India",
      dealing: "UPS, Inverters, Backup Power"
    },
    {
      id: 10,
      brandname: "Intex",
      name: "Intex Power Systems",
      image: "intex.png",
      title: "Intex UPS Solutions",
      contactName: "Manoj Reddy",
      mobile: "+91-9777766666",
      whatsapp: "+91-9777766666",
      landline: "040-22334455",
      email: "info@intexups.com",
      website: "www.intexups.com",
      address: "Hyderabad, Telangana, India",
      dealing: "UPS, Inverters, Power Backup"
    },
    {
      id: 11,
      brandname: "Numeric",
      name: "Numeric Power Systems",
      image: "numeric.png",
      title: "Numeric UPS Systems",
      contactName: "Suresh Nair",
      mobile: "+91-9111223344",
      whatsapp: "+91-9111223344",
      landline: "044-23452222",
      email: "service@numericups.com",
      website: "www.numericups.com",
      address: "Chennai, Tamil Nadu, India",
      dealing: "UPS, Power Backup, Energy"
    },
    {
      id: 12,
      brandname: "Riello",
      name: "Riello Power Systems",
      image: "riello.png",
      title: "Riello UPS & Backup",
      contactName: "Deepak Yadav",
      mobile: "+91-9222334455",
      whatsapp: "+91-9222334455",
      landline: "011-23459999",
      email: "contact@rielloups.com",
      website: "www.rielloups.com",
      address: "New Delhi, India",
      dealing: "UPS Systems, Backup Power"
    },
    {
      id: 13,
      brandname: "Socomec",
      name: "Socomec Power Systems",
      image: "socomec.png",
      title: "Socomec UPS & Energy",
      contactName: "Mahesh Gupta",
      mobile: "+91-9555667788",
      whatsapp: "+91-9555667788",
      landline: "022-23458888",
      email: "support@socomecups.com",
      website: "www.socomecups.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "UPS, Power Backup, Energy"
    },
    {
      id: 14,
      brandname: "Uniline",
      name: "Uniline Power Systems",
      image: "uniline.png",
      title: "Uniline UPS & Inverters",
      contactName: "Alok Mishra",
      mobile: "+91-9333445566",
      whatsapp: "+91-9333445566",
      landline: "011-22556677",
      email: "info@unilineups.com",
      website: "www.unilineups.com",
      address: "New Delhi, India",
      dealing: "UPS, Inverters, Backup Solutions"
    },
    {
      id: 15,
      brandname: "Zebronics",
      name: "Zebronics Power Systems",
      image: "zebronics.png",
      title: "Zebronics UPS & Backup",
      contactName: "Rohit Kapoor",
      mobile: "+91-9777554433",
      whatsapp: "+91-9777554433",
      landline: "044-22339988",
      email: "sales@zebronicsups.com",
      website: "www.zebronicsups.com",
      address: "Chennai, Tamil Nadu, India",
      dealing: "UPS, Inverters, Backup Solutions"
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
