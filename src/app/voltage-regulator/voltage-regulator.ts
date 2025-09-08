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
  selector: 'app-voltage-regulator',
  imports: [CommonModule, FormsModule],
  templateUrl: './voltage-regulator.html',
  styleUrl: './voltage-regulator.css'
})
export class VoltageRegulator {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bluebird",
      name: "Bluebird Stabilizers",
      image: "bluebird.jpg",
      title: "Reliable Power Protection",
      contactName: "Rohit Mehra",
      mobile: "9876543201",
      whatsapp: "9876543201",
      landline: "01123451234",
      email: "info@bluebird.com",
      website: "www.bluebird.com",
      address: "New Delhi, India",
      dealing: "Voltage Stabilizers and Power Solutions"
    },
    {
      id: 2,
      brandname: "Crompton",
      name: "Crompton Greaves",
      image: "crompton.jpg",
      title: "Power and Efficiency",
      contactName: "Anita Sharma",
      mobile: "9876543202",
      whatsapp: "9876543202",
      landline: "02234561234",
      email: "support@crompton.com",
      website: "www.crompton.co.in",
      address: "Mumbai, India",
      dealing: "Stabilizers, Motors, and Electrical Appliances"
    },
    {
      id: 3,
      brandname: "Everest",
      name: "Everest Stabilizers",
      image: "everest.jpg",
      title: "Trusted Stabilizer Solutions",
      contactName: "Karan Patel",
      mobile: "9876543203",
      whatsapp: "9876543203",
      landline: "03345671234",
      email: "sales@evereststabilizer.com",
      website: "www.evereststabilizer.com",
      address: "Kolkata, India",
      dealing: "Voltage Stabilizers"
    },
    {
      id: 4,
      brandname: "Livguard",
      name: "Livguard Energy",
      image: "livguard.jpg",
      title: "Energy for the Future",
      contactName: "Manoj Gupta",
      mobile: "9876543204",
      whatsapp: "9876543204",
      landline: "01145678901",
      email: "care@livguard.com",
      website: "www.livguard.com",
      address: "Gurgaon, India",
      dealing: "Inverters, Batteries, and Stabilizers"
    },
    {
      id: 5,
      brandname: "Luminous",
      name: "Luminous Power Technologies",
      image: "luminous.jpg",
      title: "Empowering Your Home",
      contactName: "Ritika Verma",
      mobile: "9876543205",
      whatsapp: "9876543205",
      landline: "01234567890",
      email: "info@luminousindia.com",
      website: "www.luminousindia.com",
      address: "Noida, India",
      dealing: "Stabilizers, Inverters, and Power Solutions"
    },
    {
      id: 6,
      brandname: "Microtek",
      name: "Microtek International",
      image: "microtek.jpg",
      title: "Innovation in Power",
      contactName: "Arun Joshi",
      mobile: "9876543206",
      whatsapp: "9876543206",
      landline: "01126781234",
      email: "support@microtekdirect.com",
      website: "www.microtekdirect.com",
      address: "New Delhi, India",
      dealing: "Voltage Stabilizers, UPS, and Inverters"
    },
    {
      id: 7,
      brandname: "Servokon",
      name: "Servokon Systems",
      image: "servokon.jpg",
      title: "Excellence in Power Control",
      contactName: "Nisha Yadav",
      mobile: "9876543207",
      whatsapp: "9876543207",
      landline: "01244567890",
      email: "info@servokon.com",
      website: "www.servokon.com",
      address: "Haridwar, India",
      dealing: "Voltage Stabilizers and Transformers"
    },
    {
      id: 8,
      brandname: "V-Guard",
      name: "V-Guard Industries",
      image: "vguard.jpg",
      title: "Bring Home a Better Tomorrow",
      contactName: "Sanjay Kumar",
      mobile: "9876543208",
      whatsapp: "9876543208",
      landline: "04842345678",
      email: "care@vguard.in",
      website: "www.vguard.in",
      address: "Kochi, India",
      dealing: "Stabilizers, Inverters, and Electrical Products"
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
