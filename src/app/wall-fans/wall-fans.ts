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
  selector: 'app-wall-fans',
  imports: [CommonModule, FormsModule],
  templateUrl: './wall-fans.html',
  styleUrl: './wall-fans.css'
})
export class WallFans {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Almonard',
      name: 'Almonard Fans Pvt Ltd',
      image: 'almonard.png',
      title: 'Fans & Appliances',
      contactName: 'Ravi Kumar',
      mobile: '9811000001',
      whatsapp: '9811000001',
      landline: '0111000001',
      email: 'support@almonard.in',
      website: 'www.almonard.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Ceiling Fans, Exhaust Fans'
    },
    {
      id: 2,
      brandname: 'Atomberg',
      name: 'Atomberg Technologies Pvt Ltd',
      image: 'atomberg.png',
      title: 'Smart Fans',
      contactName: 'Neha Patel',
      mobile: '9811000002',
      whatsapp: '9811000002',
      landline: '0111000002',
      email: 'support@atomberg.in',
      website: 'www.atomberg.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'BLDC Ceiling Fans, Smart Fans'
    },
    {
      id: 3,
      brandname: 'Bajaj',
      name: 'Bajaj Electricals Ltd',
      image: 'bajaj.png',
      title: 'Electrical Appliances',
      contactName: 'Anil Sharma',
      mobile: '9811000003',
      whatsapp: '9811000003',
      landline: '0111000003',
      email: 'support@bajajelectricals.com',
      website: 'www.bajajelectricals.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lighting, Appliances'
    },
    {
      id: 4,
      brandname: 'Crompton',
      name: 'Crompton Greaves Consumer Electricals Ltd',
      image: 'crompton.png',
      title: 'Fans & Appliances',
      contactName: 'Vikram Mehta',
      mobile: '9811000004',
      whatsapp: '9811000004',
      landline: '0111000004',
      email: 'support@crompton.co.in',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lights, Pumps'
    },
    {
      id: 5,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electricals & Appliances',
      contactName: 'Sonia Gupta',
      mobile: '9811000005',
      whatsapp: '9811000005',
      landline: '0111000005',
      email: 'customercare@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Fans, Lighting, Switches'
    },
    {
      id: 6,
      brandname: 'Luminous',
      name: 'Luminous Power Technologies Pvt Ltd',
      image: 'luminous.png',
      title: 'Fans & Inverters',
      contactName: 'Rohit Yadav',
      mobile: '9811000006',
      whatsapp: '9811000006',
      landline: '0111000006',
      email: 'support@luminousindia.com',
      website: 'www.luminousindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Inverters, Batteries'
    },
    {
      id: 7,
      brandname: 'Orient',
      name: 'Orient Electric Ltd',
      image: 'orient.png',
      title: 'Electrical Appliances',
      contactName: 'Deepak Verma',
      mobile: '9811000007',
      whatsapp: '9811000007',
      landline: '0111000007',
      email: 'support@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting, Appliances'
    },
    {
      id: 8,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Electricals',
      contactName: 'Meena Sharma',
      mobile: '9811000008',
      whatsapp: '9811000008',
      landline: '0111000008',
      email: 'support@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Wires, Switches'
    },
    {
      id: 9,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Fans & Appliances',
      contactName: 'Ajay Khanna',
      mobile: '9811000009',
      whatsapp: '9811000009',
      landline: '0111000009',
      email: 'customercare@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Sewing Machines, Appliances'
    },
    {
      id: 10,
      brandname: 'V Guard',
      name: 'V-Guard Industries Ltd',
      image: 'vguard.png',
      title: 'Electricals & Appliances',
      contactName: 'Pooja Nair',
      mobile: '9811000010',
      whatsapp: '9811000010',
      landline: '0111000010',
      email: 'customercare@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Fans, Stabilizers, Inverters'
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
