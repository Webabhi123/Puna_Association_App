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
  selector: 'app-roti-makers',
  imports: [CommonModule,FormsModule],
  templateUrl: './roti-makers.html',
  styleUrl: './roti-makers.css'
})
export class RotiMakers {
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
      brandname: "Eagle",
      name: "Eagle Appliances",
      image: "eagle.png",
      title: "Reliable Home Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-34567890",
      email: "support@eagleappliances.com",
      website: "www.eagleappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Cookers, Mixers, Juicers"
    },
    {
      id: 3,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Home & Kitchen Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "011-24681012",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Prestige",
      name: "Prestige Appliances",
      image: "prestige.png",
      title: "Trusted Kitchen Solutions",
      contactName: "Rakesh Sharma",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-56789012",
      email: "info@prestigeappliances.com",
      website: "www.prestigeappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Cookers, Juicers"
    },
    {
      id: 5,
      brandname: "Rotimatic",
      name: "Rotimatic Appliances",
      image: "rotimatic.png",
      title: "Smart Kitchen Solutions",
      contactName: "Sonal Kapoor",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "022-76543210",
      email: "support@rotimatic.com",
      website: "www.rotimatic.com",
      address: "Mumbai, Maharashtra",
      dealing: "Automatic Roti Makers"
    },
    {
      id: 6,
      brandname: "Sunflame",
      name: "Sunflame Appliances",
      image: "sunflame.png",
      title: "Reliable Kitchen Solutions",
      contactName: "Anita Menon",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "044-34567891",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Cooktops, Juicers, Mixers"
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
