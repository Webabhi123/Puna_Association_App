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
  selector: 'app-water-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './water-pumps.html',
  styleUrl: './water-pumps.css'
})
export class WaterPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bajaj',
      name: 'Bajaj',
      image: 'assets/brands-logo/bajaj-logo.png',
      title: 'Bajaj',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@bajaj.com',
      website: 'www.bajaj.com',
      address: 'India',
      dealing: 'Electricals and appliances'
    },
    {
      id: 2,
      brandname: 'Crompton Greaves',
      name: 'Crompton Greaves',
      image: 'assets/brands-logo/crompton-greaves-logo.png',
      title: 'Crompton Greaves',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@cromptongreaves.com',
      website: 'www.cromptongreaves.com',
      address: 'India',
      dealing: 'Motors and pumps'
    },
    {
      id: 3,
      brandname: 'Cummins',
      name: 'Cummins',
      image: 'assets/brands-logo/cummins-logo.png',
      title: 'Cummins',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@cummins.com',
      website: 'www.cummins.com',
      address: 'India',
      dealing: 'Engines and power systems'
    },
    {
      id: 4,
      brandname: 'Deccan',
      name: 'Deccan',
      image: 'assets/brands-logo/deccan-logo.png',
      title: 'Deccan',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@deccan.com',
      website: 'www.deccan.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 5,
      brandname: 'Dharani',
      name: 'Dharani',
      image: 'assets/brands-logo/dharani-logo.png',
      title: 'Dharani',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@dharani.com',
      website: 'www.dharani.com',
      address: 'India',
      dealing: 'Electrical motors and pumps'
    },
    {
      id: 6,
      brandname: 'DP',
      name: 'DP',
      image: 'assets/brands-logo/dp-logo.png',
      title: 'DP',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@dp.com',
      website: 'www.dp.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 7,
      brandname: 'Duke',
      name: 'Duke',
      image: 'assets/brands-logo/duke-logo.png',
      title: 'Duke',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@duke.com',
      website: 'www.duke.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 8,
      brandname: 'Havells',
      name: 'Havells',
      image: 'assets/brands-logo/havells-logo.png',
      title: 'Havells',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@havells.com',
      website: 'www.havells.com',
      address: 'India',
      dealing: 'Electrical equipment'
    },
    {
      id: 9,
      brandname: 'Honda',
      name: 'Honda',
      image: 'assets/brands-logo/honda-logo.png',
      title: 'Honda',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@honda.com',
      website: 'www.honda.com',
      address: 'India',
      dealing: 'Engines and pumps'
    },
    {
      id: 10,
      brandname: 'Khaitan',
      name: 'Khaitan',
      image: 'assets/brands-logo/khaitan-logo.png',
      title: 'Khaitan',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@khaitan.com',
      website: 'www.khaitan.com',
      address: 'India',
      dealing: 'Fans and electricals'
    },
    {
      id: 11,
      brandname: 'Kirloskar',
      name: 'Kirloskar',
      image: 'assets/brands-logo/kirloskar-logo.png',
      title: 'Kirloskar',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@kirloskar.com',
      website: 'www.kirloskar.com',
      address: 'India',
      dealing: 'Pumps and engines'
    },
    {
      id: 12,
      brandname: 'Laxmi',
      name: 'Laxmi',
      image: 'assets/brands-logo/laxmi-logo.png',
      title: 'Laxmi',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@laxmi.com',
      website: 'www.laxmi.com',
      address: 'India',
      dealing: 'Motors and pumps'
    },
    {
      id: 13,
      brandname: 'Lubi',
      name: 'Lubi',
      image: 'assets/brands-logo/lubi-logo.png',
      title: 'Lubi',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@lubi.com',
      website: 'www.lubi.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 14,
      brandname: 'Shakti',
      name: 'Shakti',
      image: 'assets/brands-logo/shakti-logo.png',
      title: 'Shakti',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@shakti.com',
      website: 'www.shakti.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 15,
      brandname: 'Suguna',
      name: 'Suguna',
      image: 'assets/brands-logo/suguna-logo.png',
      title: 'Suguna',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@suguna.com',
      website: 'www.suguna.com',
      address: 'India',
      dealing: 'Pumps and motors'
    },
    {
      id: 16,
      brandname: 'Usha',
      name: 'Usha',
      image: 'assets/brands-logo/usha-logo.png',
      title: 'Usha',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@usha.com',
      website: 'www.usha.com',
      address: 'India',
      dealing: 'Fans and appliances'
    },
    {
      id: 17,
      brandname: 'V-Guard',
      name: 'V-Guard',
      image: 'assets/brands-logo/vguard-logo.png',
      title: 'V-Guard',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@vguard.com',
      website: 'www.vguard.com',
      address: 'India',
      dealing: 'Electricals and stabilizers'
    },
    {
      id: 18,
      brandname: 'Wilo',
      name: 'Wilo',
      image: 'assets/brands-logo/wilo-logo.png',
      title: 'Wilo',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@wilo.com',
      website: 'www.wilo.com',
      address: 'India',
      dealing: 'Pumps and systems'
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
