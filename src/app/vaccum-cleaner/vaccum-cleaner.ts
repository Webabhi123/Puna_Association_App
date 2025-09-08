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
  selector: 'app-vaccum-cleaner',
  imports: [FormsModule,CommonModule],
  templateUrl: './vaccum-cleaner.html',
  styleUrl: './vaccum-cleaner.css'
})
export class VaccumCleaner {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
   brands: Brand[] = [
    {
      id: 1,
      brandname: "Bosch",
      name: "Bosch Appliances",
      image: "bosch.png",
      title: "Innovative Home & Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-23456789",
      email: "support@bosch.com",
      website: "www.bosch.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Ovens, Kitchen Appliances"
    },
    {
      id: 2,
      brandname: "Eureka Forbes",
      name: "Eureka Forbes",
      image: "eurekaforbes.png",
      title: "Water & Air Purification Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-34567890",
      email: "support@eurekaforbes.com",
      website: "www.eurekaforbes.com",
      address: "Mumbai, Maharashtra",
      dealing: "Water Purifiers, Vacuum Cleaners, Air Purifiers"
    },
    {
      id: 3,
      brandname: "Inalsa",
      name: "Inalsa Appliances",
      image: "inalsa.png",
      title: "Smart Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "022-45678901",
      email: "support@inalsa.in",
      website: "www.inalsa.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Kent",
      name: "Kent Appliances",
      image: "kent.png",
      title: "Trusted Water & Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-56789012",
      email: "support@kent.co.in",
      website: "www.kent.co.in",
      address: "Mumbai, Maharashtra",
      dealing: "Water Purifiers, Mixers, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "LG",
      name: "LG Appliances",
      image: "lg.png",
      title: "Premium Electronics & Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "011-24681012",
      email: "support@lg.com",
      website: "www.lg.com/in",
      address: "New Delhi, Delhi",
      dealing: "Refrigerators, Mixers, Air Conditioners"
    },
    {
      id: 6,
      brandname: "Panasonic",
      name: "Panasonic Appliances",
      image: "panasonic.png",
      title: "Innovative Home Solutions",
      contactName: "Sonal Kapoor",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "022-76543210",
      email: "care@panasonic.com",
      website: "www.panasonic.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Air Conditioners, Kitchen Appliances"
    },
    {
      id: 7,
      brandname: "Philips",
      name: "Philips Appliances",
      image: "philips.png",
      title: "Innovative Home Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "0120-3456789",
      email: "care@philips.in",
      website: "www.philips.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Juicers, Lighting, Home Appliances"
    },
    {
      id: 8,
      brandname: "Prestige",
      name: "Prestige Appliances",
      image: "prestige.png",
      title: "Trusted Kitchen Solutions",
      contactName: "Rakesh Sharma",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "022-56789012",
      email: "info@prestigeappliances.com",
      website: "www.prestigeappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Cookers, Juicers"
    },
    {
      id: 9,
      brandname: "Roots",
      name: "Roots Appliances",
      image: "roots.png",
      title: "Reliable Home Appliances",
      contactName: "Anil Verma",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "022-67890123",
      email: "support@roots.com",
      website: "www.roots.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 10,
      brandname: "Skyline",
      name: "Skyline Appliances",
      image: "skyline.png",
      title: "Reliable Home & Kitchen Solutions",
      contactName: "Suresh Kumar",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "022-34567890",
      email: "support@skyline.in",
      website: "www.skyline.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 11,
      brandname: "STIHL",
      name: "STIHL Appliances",
      image: "stihl.png",
      title: "Premium Outdoor & Garden Tools",
      contactName: "Ramesh Sharma",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "022-45678912",
      email: "info@stihl.in",
      website: "www.stihl.in",
      address: "Mumbai, Maharashtra",
      dealing: "Chainsaws, Trimmers, Garden Tools"
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
