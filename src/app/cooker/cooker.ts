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
  selector: 'app-cooker',
  imports: [CommonModule, FormsModule],
  templateUrl: './cooker.html',
  styleUrl: './cooker.css'
})
export class Cooker {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Kitchen & Home Solutions",
      contactName: "Mr. Rajesh Kumar",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "020-12345678",
      email: "info@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Pune, Maharashtra, India",
      dealing: "Kitchen appliances, home essentials, and lighting solutions"
    },
    {
      id: 2,
      brandname: "Glen",
      name: "Glen Appliances",
      image: "glen.png",
      title: "Modern Kitchen Innovations",
      contactName: "Ms. Pooja Mehta",
      mobile: "9812345678",
      whatsapp: "9812345678",
      landline: "011-23456789",
      email: "support@glenindia.com",
      website: "www.glenindia.com",
      address: "Gurgaon, Haryana, India",
      dealing: "Chimneys, cooktops, hobs, and small kitchen appliances"
    },
    {
      id: 3,
      brandname: "Havells",
      name: "Havells India",
      image: "havells.png",
      title: "Trusted Name in Appliances",
      contactName: "Mr. Suresh Sharma",
      mobile: "9823456789",
      whatsapp: "9823456789",
      landline: "0120-6789000",
      email: "care@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Kitchen appliances, fans, lighting, and electrical solutions"
    },
    {
      id: 4,
      brandname: "Panasonic",
      name: "Panasonic India",
      image: "panasonic.png",
      title: "A Better Life, A Better World",
      contactName: "Mr. Manish Gupta",
      mobile: "9834567890",
      whatsapp: "9834567890",
      landline: "022-34567890",
      email: "support@in.panasonic.com",
      website: "www.panasonic.com/in",
      address: "Mumbai, Maharashtra, India",
      dealing: "Microwave ovens, mixer grinders, refrigerators, and home solutions"
    },
    {
      id: 5,
      brandname: "Pigeon",
      name: "Pigeon Appliances",
      image: "pigeon.png",
      title: "Everyday Kitchen Companion",
      contactName: "Ms. Neha Verma",
      mobile: "9845678901",
      whatsapp: "9845678901",
      landline: "080-12345678",
      email: "care@stovekraft.com",
      website: "www.pigeonappliances.com",
      address: "Bengaluru, Karnataka, India",
      dealing: "Pressure cookers, gas stoves, non-stick cookware, and kitchen tools"
    },
    {
      id: 6,
      brandname: "Prestige",
      name: "TTK Prestige",
      image: "prestige.png",
      title: "Innovating Kitchens Since 1955",
      contactName: "Mr. Ajay Iyer",
      mobile: "9856789012",
      whatsapp: "9856789012",
      landline: "080-23456789",
      email: "care@ttkprestige.com",
      website: "www.ttkprestige.com",
      address: "Bengaluru, Karnataka, India",
      dealing: "Cookware, kitchen appliances, chimneys, and gas stoves"
    },
    {
      id: 7,
      brandname: "Usha",
      name: "Usha International",
      image: "usha.png",
      title: "For the Love of Cooking",
      contactName: "Mr. Sanjay Nair",
      mobile: "9867890123",
      whatsapp: "9867890123",
      landline: "011-23450000",
      email: "care@usha.com",
      website: "www.usha.com",
      address: "New Delhi, India",
      dealing: "Kitchen appliances, fans, sewing machines, and household solutions"
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
