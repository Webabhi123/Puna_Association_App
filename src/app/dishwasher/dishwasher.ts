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
  selector: 'app-dishwasher',
  imports: [CommonModule,FormsModule],
  templateUrl: './dishwasher.html',
  styleUrl: './dishwasher.css'
})
export class Dishwasher {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bosch",
      name: "Bosch Home Appliances",
      image: "bosch.png",
      title: "German Engineering for Your Home",
      contactName: "Mr. Arvind Mehta",
      mobile: "9876501234",
      whatsapp: "9876501234",
      landline: "022-12345678",
      email: "care.in@bosch-home.com",
      website: "www.bosch-home.in",
      address: "Mumbai, Maharashtra, India",
      dealing: "Washing machines, refrigerators, ovens, and kitchen appliances"
    },
    {
      id: 2,
      brandname: "Elica",
      name: "Elica India",
      image: "elica.png",
      title: "Leader in Kitchen Chimneys",
      contactName: "Ms. Neha Sharma",
      mobile: "9812345678",
      whatsapp: "9812345678",
      landline: "020-22334455",
      email: "care@elicaindia.com",
      website: "www.elicaindia.com",
      address: "Pune, Maharashtra, India",
      dealing: "Kitchen chimneys, hobs, built-in ovens, and kitchen solutions"
    },
    {
      id: 3,
      brandname: "Electrolux",
      name: "Electrolux India",
      image: "electrolux.png",
      title: "Shape Living for the Better",
      contactName: "Mr. Ramesh Iyer",
      mobile: "9823123456",
      whatsapp: "9823123456",
      landline: "011-33445566",
      email: "support@electrolux.in",
      website: "www.electrolux.in",
      address: "New Delhi, India",
      dealing: "Refrigerators, washing machines, microwaves, and home appliances"
    },
    {
      id: 4,
      brandname: "Hindware",
      name: "Hindware Appliances",
      image: "hindware.png",
      title: "Inspired Living",
      contactName: "Mr. Sameer Malhotra",
      mobile: "9832123456",
      whatsapp: "9832123456",
      landline: "0124-44556677",
      email: "care@hindwareappliances.com",
      website: "www.hindwareappliances.com",
      address: "Gurgaon, Haryana, India",
      dealing: "Chimneys, water heaters, purifiers, and kitchen appliances"
    },
    {
      id: 5,
      brandname: "IFB",
      name: "IFB Appliances",
      image: "ifb.png",
      title: "Set Yourself Free",
      contactName: "Ms. Priya Nair",
      mobile: "9845012345",
      whatsapp: "9845012345",
      landline: "080-33445566",
      email: "support@ifbglobal.com",
      website: "www.ifbappliances.com",
      address: "Bengaluru, Karnataka, India",
      dealing: "Washing machines, microwaves, dishwashers, and kitchen appliances"
    },
    {
      id: 6,
      brandname: "KAFF",
      name: "KAFF Appliances",
      image: "kaff.png",
      title: "The New Age Kitchen",
      contactName: "Mr. Deepak Verma",
      mobile: "9867012345",
      whatsapp: "9867012345",
      landline: "011-44556677",
      email: "info@kaff.in",
      website: "www.kaff.in",
      address: "New Delhi, India",
      dealing: "Chimneys, hobs, built-in ovens, and modular kitchen appliances"
    },
    {
      id: 7,
      brandname: "Kutchina",
      name: "Kutchina Appliances",
      image: "kutchina.png",
      title: "Intelligent Kitchen Solutions",
      contactName: "Ms. Rina Das",
      mobile: "9876012345",
      whatsapp: "9876012345",
      landline: "033-22334455",
      email: "support@kutchina.com",
      website: "www.kutchina.com",
      address: "Kolkata, West Bengal, India",
      dealing: "Kitchen chimneys, hobs, modular kitchens, and appliances"
    },
    {
      id: 8,
      brandname: "Pigeon",
      name: "Pigeon by Stovekraft",
      image: "pigeon.png",
      title: "Affordable Kitchen Solutions",
      contactName: "Mr. Sunil Rao",
      mobile: "9887012345",
      whatsapp: "9887012345",
      landline: "080-22334455",
      email: "care@pigeonappliances.com",
      website: "www.pigeonappliances.com",
      address: "Bengaluru, Karnataka, India",
      dealing: "Gas stoves, cookware, pressure cookers, and kitchen appliances"
    },
    {
      id: 9,
      brandname: "Voltas",
      name: "Voltas Appliances",
      image: "voltas.png",
      title: "India’s Cooling Expert",
      contactName: "Mr. Manish Gupta",
      mobile: "9897012345",
      whatsapp: "9897012345",
      landline: "022-33445566",
      email: "support@voltas.com",
      website: "www.voltas.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "Air conditioners, air coolers, refrigerators, and appliances"
    },
    {
      id: 10,
      brandname: "Whirlpool",
      name: "Whirlpool India",
      image: "whirlpool.png",
      title: "Every Day, Care",
      contactName: "Ms. Anjali Sharma",
      mobile: "9908012345",
      whatsapp: "9908012345",
      landline: "020-44556677",
      email: "care@whirlpool.com",
      website: "www.whirlpoolindia.com",
      address: "Pune, Maharashtra, India",
      dealing: "Refrigerators, washing machines, microwaves, and kitchen appliances"
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
