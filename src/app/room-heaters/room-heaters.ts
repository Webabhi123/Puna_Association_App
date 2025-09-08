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
  selector: 'app-room-heaters',
  imports: [CommonModule, FormsModule],
  templateUrl: './room-heaters.html',
  styleUrl: './room-heaters.css'
})
export class RoomHeaters {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bajaj',
      name:'Bajaj',
      image: 'assets/brands-logo/bajaj-logo.png',
      title: 'Bajaj',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@bajaj.com',
      website: 'www.bajaj.com',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    {
      id: 2,
      brandname:'Crompton',
      name: 'Crompton',
      image: 'assets/brands-logo/crompton-logo.png',
      title: 'Crompton',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@crompton.com',
      website: 'www.crompton.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 3,
      brandname:'Eveready',
      name: 'Eveready',
      image: 'assets/brands-logo/eveready-logo.png',
      title: 'Eveready',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@crompton.com',
      website: 'www.crompton.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 4,
      brandname:'Havells',
      name: 'Havells',
      image: 'assets/brands-logo/havells-logo.png',
      title: 'Havells',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@crompton.com',
      website: 'www.crompton.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 5,
      brandname:'Maharaja',
      name: 'Maharaja',
      image: 'assets/brands-logo/maharaja-logo.png',
      title: 'Maharaja',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@crompton.com',
      website: 'www.crompton.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 6,
      brandname:'Whiteline ',
      name: 'Whiteline ',
      image: 'assets/brands-logo/whiteline-logo.png',
      title: 'Whiteline ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@whiteline.com',
      website: 'www.whiteline.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 7,
      brandname:'Morphy Richards ',
      name: 'Morphy Richards ',
      image: 'assets/brands-logo/morphy-richards-logo.png',
      title: 'Morphy Richards ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@morphyrichards.com',
      website: 'www.morphyrichards.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 8,
      brandname:'Orient ',
      name: 'Orient ',
      image: 'assets/brands-logo/orient-logo.png',
      title: 'Orient ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@whiteline.com',
      website: 'www.whiteline.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 9,
      brandname:'Orpat ',
      name: 'Orpat ',
      image: 'assets/brands-logo/orpat-logo.png',
      title: 'Orpat ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@orpat.com',
      website: 'www.orpat.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 10,
      brandname:'Polar ',
      name: 'Polar ',
      image: 'assets/brands-logo/polar-logo.png',
      title: 'Polar ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@polar.com',
      website: 'www.polar.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 11,
      brandname:'Surya ',
      name: 'Surya ',
      image: 'assets/brands-logo/surya-logo.png',
      title: 'Surya ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@orpat.com',
      website: 'www.orpat.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 12,
      brandname:'Usha',
      name: 'Usha ',
      image: 'assets/brands-logo/usha-logo.png',
      title: 'Usha ',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@tata.com',
      website: 'www.tata.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 13,
      brandname:'V Guard',
      name: 'V Guard',
      image: 'assets/brands-logo/voltas-logo.png',
      title: 'V Guard',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@vguard.com',
      website: 'www.vguard.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 14,
      brandname:'Warmex',
      name: 'Warmex',
      image: 'assets/brands-logo/warmex-logo.png',
      title: 'Warmex',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@voltas.com',
      website: 'www.voltas.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
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
