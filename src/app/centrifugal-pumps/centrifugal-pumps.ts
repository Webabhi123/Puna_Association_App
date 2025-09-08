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
  selector: 'app-centrifugal-pumps',
  imports: [CommonModule, FormsModule],
  templateUrl: './centrifugal-pumps.html',
  styleUrl: './centrifugal-pumps.css'
})
export class CentrifugalPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Alfa Laval',
      name: 'Alfa Laval',
      image: 'assets/brands-logo/alfalaval-logo.png',
      title: 'Alfa Laval',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@alfalaval.com',
      website: 'www.alfalaval.com',
      address: 'Pune, Maharashtra',
      dealing: 'Heat transfer, separation, and fluid handling'
    },
    {
      id: 2,
      brandname: 'AnGel',
      name: 'AnGel',
      image: 'assets/brands-logo/angel-logo.png',
      title: 'AnGel',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@angel.com',
      website: 'www.angel.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Industrial and engineering solutions'
    },
    {
      id: 3,
      brandname: 'Antico',
      name: 'Antico',
      image: 'assets/brands-logo/antico-logo.png',
      title: 'Antico',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@antico.com',
      website: 'www.antico.com',
      address: 'Delhi, India',
      dealing: 'Pumps and engineering products'
    },
    {
      id: 4,
      brandname: 'Beacon',
      name: 'Beacon',
      image: 'assets/brands-logo/beacon-logo.png',
      title: 'Beacon',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@beacon.com',
      website: 'www.beacon.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Industrial pumps and motors'
    },
    {
      id: 5,
      brandname: 'CNP',
      name: 'CNP',
      image: 'assets/brands-logo/cnp-logo.png',
      title: 'CNP',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@cnppumps.com',
      website: 'www.cnppumps.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Pumps and fluid systems'
    },
    {
      id: 6,
      brandname: 'CRI',
      name: 'CRI',
      image: 'assets/brands-logo/cri-logo.png',
      title: 'CRI',
      contactName: 'Neha Singh',
      mobile: '9876543215',
      whatsapp: '9876543215',
      landline: '020-6666666',
      email: 'info@cripumps.com',
      website: 'www.crigroups.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and water systems'
    },
    {
      id: 7,
      brandname: 'Crompton',
      name: 'Crompton',
      image: 'assets/brands-logo/crompton-logo.png',
      title: 'Crompton',
      contactName: 'Ravi Sharma',
      mobile: '9876543216',
      whatsapp: '9876543216',
      landline: '020-7777777',
      email: 'info@crompton.co.in',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Pumps and consumer electricals'
    },
    {
      id: 8,
      brandname: 'Falcon',
      name: 'Falcon',
      image: 'assets/brands-logo/falcon-logo.png',
      title: 'Falcon',
      contactName: 'Vikas Patil',
      mobile: '9876543217',
      whatsapp: '9876543217',
      landline: '020-8888888',
      email: 'info@falcon.com',
      website: 'www.falcon.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and water technology'
    },
    {
      id: 9,
      brandname: 'KSB',
      name: 'KSB',
      image: 'assets/brands-logo/ksb-logo.png',
      title: 'KSB',
      contactName: 'Meera Nair',
      mobile: '9876543218',
      whatsapp: '9876543218',
      landline: '020-9999999',
      email: 'info@ksbpumps.com',
      website: 'www.ksb.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and valves'
    },
    {
      id: 10,
      brandname: 'Kirloskar',
      name: 'Kirloskar',
      image: 'assets/brands-logo/kirloskar-logo.png',
      title: 'Kirloskar',
      contactName: 'Arjun Reddy',
      mobile: '9876543219',
      whatsapp: '9876543219',
      landline: '020-1010101',
      email: 'info@kirloskarpumps.com',
      website: 'www.kirloskarpumps.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and motors'
    },
    {
      id: 11,
      brandname: 'Lubi',
      name: 'Lubi',
      image: 'assets/brands-logo/lubi-logo.png',
      title: 'Lubi',
      contactName: 'Kunal Joshi',
      mobile: '9876543220',
      whatsapp: '9876543220',
      landline: '020-1212121',
      email: 'info@lubipumps.com',
      website: 'www.lubipumps.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Pumps and water management solutions'
    },
    {
      id: 12,
      brandname: 'Pew',
      name: 'Pew',
      image: 'assets/brands-logo/pew-logo.png',
      title: 'Pew',
      contactName: 'Sneha Kapoor',
      mobile: '9876543221',
      whatsapp: '9876543221',
      landline: '020-1313131',
      email: 'info@pew.com',
      website: 'www.pew.com',
      address: 'Delhi, India',
      dealing: 'Pumps and engineering products'
    },
    {
      id: 13,
      brandname: 'Shakti',
      name: 'Shakti',
      image: 'assets/brands-logo/shakti-logo.png',
      title: 'Shakti',
      contactName: 'Priya Desai',
      mobile: '9876543222',
      whatsapp: '9876543222',
      landline: '020-1414141',
      email: 'info@shaktipumps.com',
      website: 'www.shaktipumps.com',
      address: 'Indore, Madhya Pradesh',
      dealing: 'Pumps and water solutions'
    },
    {
      id: 14,
      brandname: 'Suguna',
      name: 'Suguna',
      image: 'assets/brands-logo/suguna-logo.png',
      title: 'Suguna',
      contactName: 'Aarav Mehta',
      mobile: '9876543223',
      whatsapp: '9876543223',
      landline: '020-1515151',
      email: 'info@sugunapumps.com',
      website: 'www.sugunapumps.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and motors'
    },
    {
      id: 15,
      brandname: 'Texmo',
      name: 'Texmo',
      image: 'assets/brands-logo/texmo-logo.png',
      title: 'Texmo',
      contactName: 'Rohit Kulkarni',
      mobile: '9876543224',
      whatsapp: '9876543224',
      landline: '020-1616161',
      email: 'info@texmopumps.com',
      website: 'www.texmopumps.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and water management'
    },
    {
      id: 16,
      brandname: 'V-Guard',
      name: 'V-Guard',
      image: 'assets/brands-logo/vguard-logo.png',
      title: 'V-Guard',
      contactName: 'Shreya Iyer',
      mobile: '9876543225',
      whatsapp: '9876543225',
      landline: '020-1717171',
      email: 'info@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Pumps, stabilizers, and appliances'
    },
    {
      id: 17,
      brandname: 'Wilo',
      name: 'Wilo',
      image: 'assets/brands-logo/wilo-logo.png',
      title: 'Wilo',
      contactName: 'Varun Singh',
      mobile: '9876543226',
      whatsapp: '9876543226',
      landline: '020-1818181',
      email: 'info@wilo.com',
      website: 'www.wilo.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and water management systems'
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
