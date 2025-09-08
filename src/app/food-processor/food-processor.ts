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
  selector: 'app-food-processor',
  imports: [CommonModule, FormsModule],
  templateUrl: './food-processor.html',
  styleUrl: './food-processor.css'
})
export class FoodProcessor {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances Ltd.",
      image: "bajaj.png",
      title: "Innovative Home & Kitchen Appliances",
      contactName: "Rohit Sharma",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "0221234567",
      email: "info@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Bajaj Bhavan, Mumbai, India",
      dealing: "Mixer Grinders, Cooktops, Juicers, Irons"
    },
    {
      id: 2,
      brandname: "Inalsa",
      name: "Inalsa Home Appliances",
      image: "inalsa.png",
      title: "Smart & Modern Home Solutions",
      contactName: "Neha Verma",
      mobile: "9811122233",
      whatsapp: "9811122233",
      landline: "0112345678",
      email: "support@inalsa.com",
      website: "www.inalsa.com",
      address: "New Delhi, India",
      dealing: "Food Processors, Mixer Grinders, Air Fryers, Cooktops"
    },
    {
      id: 3,
      brandname: "Morphy Richards",
      name: "Morphy Richards India",
      image: "morphyrichards.png",
      title: "Global Brand for Kitchen & Home",
      contactName: "Amit Kapoor",
      mobile: "9823456789",
      whatsapp: "9823456789",
      landline: "0207654321",
      email: "care@morphyrichardsindia.com",
      website: "www.morphyrichardsindia.com",
      address: "Pune, Maharashtra, India",
      dealing: "Toasters, Coffee Makers, Microwave Ovens, Irons"
    },
    {
      id: 4,
      brandname: "Philips",
      name: "Philips India Ltd.",
      image: "philips.png",
      title: "Innovative Lifestyle & Kitchen Appliances",
      contactName: "Sonia Mehra",
      mobile: "9830012345",
      whatsapp: "9830012345",
      landline: "03322334455",
      email: "customercare@philips.com",
      website: "www.philips.co.in",
      address: "Kolkata, West Bengal, India",
      dealing: "Blenders, Air Fryers, Coffee Makers, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Singer",
      name: "Singer India Ltd.",
      image: "singer.png",
      title: "Trusted Home & Sewing Appliances",
      contactName: "Rajesh Kumar",
      mobile: "9845123456",
      whatsapp: "9845123456",
      landline: "0809876543",
      email: "info@singerindia.net",
      website: "www.singerindia.net",
      address: "Bangalore, Karnataka, India",
      dealing: "Sewing Machines, Irons, Mixer Grinders, Kitchen Appliances"
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
