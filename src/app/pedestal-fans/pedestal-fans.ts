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
  selector: 'app-pedestal-fans',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedestal-fans.html',
  styleUrl: './pedestal-fans.css'
})
export class PedestalFans {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Almonard',
      name: 'Almonard Pvt Ltd',
      image: 'almonard.png',
      title: 'Fans & Appliances',
      contactName: 'Anil Sharma',
      mobile: '9811000001',
      whatsapp: '9811000001',
      landline: '0114000001',
      email: 'support@almonard.in',
      website: 'www.almonard.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Fans, Exhaust, Industrial Coolers'
    },
    {
      id: 2,
      brandname: 'Bajaj',
      name: 'Bajaj Electricals Ltd',
      image: 'bajaj.png',
      title: 'Electrical & Home Appliances',
      contactName: 'Ritu Bajaj',
      mobile: '9811000002',
      whatsapp: '9811000002',
      landline: '0114000002',
      email: 'support@bajajelectricals.com',
      website: 'www.bajajelectricals.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lights, Appliances'
    },
    {
      id: 3,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electrical & Lighting',
      contactName: 'Neha Verma',
      mobile: '9811000003',
      whatsapp: '9811000003',
      landline: '0114000003',
      email: 'customercare@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Fans, Switches, Lighting, Appliances'
    },
    {
      id: 4,
      brandname: 'Khaitan',
      name: 'Khaitan Electricals Ltd',
      image: 'khaitan.png',
      title: 'Fans & Electricals',
      contactName: 'Sanjay Khaitan',
      mobile: '9811000004',
      whatsapp: '9811000004',
      landline: '0114000004',
      email: 'support@khaitan.com',
      website: 'www.khaitan.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Appliances, Motors'
    },
    {
      id: 5,
      brandname: 'Luminous',
      name: 'Luminous Power Technologies',
      image: 'luminous.png',
      title: 'Power & Appliances',
      contactName: 'Anjali Singh',
      mobile: '9811000005',
      whatsapp: '9811000005',
      landline: '0114000005',
      email: 'care@luminousindia.com',
      website: 'www.luminousindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Batteries, Inverters'
    },
    {
      id: 6,
      brandname: 'Orient',
      name: 'Orient Electric Ltd',
      image: 'orient.png',
      title: 'Electrical & Appliances',
      contactName: 'Rajeev Sharma',
      mobile: '9811000006',
      whatsapp: '9811000006',
      landline: '0114000006',
      email: 'support@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting, Switchgears'
    },
    {
      id: 7,
      brandname: 'Orpat',
      name: 'Orpat Group',
      image: 'orpat.png',
      title: 'Electronics & Appliances',
      contactName: 'Pooja Mehta',
      mobile: '9811000007',
      whatsapp: '9811000007',
      landline: '0114000007',
      email: 'support@orpatgroup.com',
      website: 'www.orpatgroup.com',
      address: 'Gujarat',
      dealing: 'Fans, Calculators, Appliances'
    },
    {
      id: 8,
      brandname: 'Polar',
      name: 'Polar India Ltd',
      image: 'polar.png',
      title: 'Fans & Appliances',
      contactName: 'Sunita Gupta',
      mobile: '9811000008',
      whatsapp: '9811000008',
      landline: '0114000008',
      email: 'support@polarindia.com',
      website: 'www.polarindia.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Water Heaters, Appliances'
    },
    {
      id: 9,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Cables & Electricals',
      contactName: 'Rohit Sharma',
      mobile: '9811000009',
      whatsapp: '9811000009',
      landline: '0114000009',
      email: 'support@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Wires, Fans, Appliances'
    },
    {
      id: 10,
      brandname: 'Remi',
      name: 'Remi Group',
      image: 'remi.png',
      title: 'Appliances & Fans',
      contactName: 'Deepak Nair',
      mobile: '9811000010',
      whatsapp: '9811000010',
      landline: '0114000010',
      email: 'support@remigroup.com',
      website: 'www.remigroup.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Appliances'
    },
    {
      id: 11,
      brandname: 'Surya',
      name: 'Surya Roshni Ltd',
      image: 'surya.png',
      title: 'Lighting & Appliances',
      contactName: 'Ankur Jain',
      mobile: '9811000011',
      whatsapp: '9811000011',
      landline: '0114000011',
      email: 'support@suryaroshniltd.com',
      website: 'www.suryaroshniltd.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting, Appliances'
    },
    {
      id: 12,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Appliances & Fans',
      contactName: 'Meena Sharma',
      mobile: '9811000012',
      whatsapp: '9811000012',
      landline: '0114000012',
      email: 'care@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Appliances, Sewing Machines'
    },
    {
      id: 13,
      brandname: 'V Guard',
      name: 'V-Guard Industries Ltd',
      image: 'vguard.png',
      title: 'Electrical & Appliances',
      contactName: 'Kiran Nair',
      mobile: '9811000013',
      whatsapp: '9811000013',
      landline: '0114000013',
      email: 'support@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Fans, Stabilizers, Appliances'
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
