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
  selector: 'app-toaster',
  imports: [CommonModule,FormsModule],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css'
})
export class Toaster {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
   brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-23456789",
      email: "support@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 2,
      brandname: "Eveready",
      name: "Eveready Appliances",
      image: "eveready.png",
      title: "Reliable Home Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-34567890",
      email: "support@eveready.in",
      website: "www.eveready.in",
      address: "Mumbai, Maharashtra",
      dealing: "Batteries, Lighting, Mixers"
    },
    {
      id: 3,
      brandname: "Havells",
      name: "Havells Appliances",
      image: "havells.png",
      title: "Premium Electrical Appliances",
      contactName: "Nikhil Jain",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "0120-4771000",
      email: "info@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Fans, Mixers, Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Inalsa",
      name: "Inalsa Appliances",
      image: "inalsa.png",
      title: "Smart Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-45678901",
      email: "support@inalsa.in",
      website: "www.inalsa.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Home & Kitchen Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "011-24681012",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 6,
      brandname: "Morphy Richards",
      name: "Morphy Richards",
      image: "morphyrichards.png",
      title: "Premium Kitchen Appliances",
      contactName: "Sonal Kapoor",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "022-76543210",
      email: "care@morphyrichards.in",
      website: "www.morphyrichards.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Ovens, Cooktops, Juicers"
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
      brandname: "Skyline",
      name: "Skyline Appliances",
      image: "skyline.png",
      title: "Reliable Home & Kitchen Solutions",
      contactName: "Anil Verma",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "022-67890123",
      email: "support@skyline.in",
      website: "www.skyline.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 10,
      brandname: "Sunflame",
      name: "Sunflame Appliances",
      image: "sunflame.png",
      title: "Reliable Kitchen Solutions",
      contactName: "Anita Menon",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "044-34567891",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Cooktops, Juicers, Mixers"
    },
    {
      id: 11,
      brandname: "Surya",
      name: "Surya Appliances",
      image: "surya.png",
      title: "Home & Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "022-45678912",
      email: "info@suryaappliances.com",
      website: "www.suryaappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Home Appliances"
    },
    {
      id: 12,
      brandname: "Usha",
      name: "Usha Appliances",
      image: "usha.png",
      title: "Reliable Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543221",
      whatsapp: "9876543221",
      landline: "022-34567890",
      email: "info@usha.in",
      website: "www.usha.in",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Mixers, Juicers, Kitchen Appliances"
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
