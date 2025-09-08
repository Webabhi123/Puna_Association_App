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
  selector: 'app-monoblock-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './monoblock-pumps.html',
  styleUrl: './monoblock-pumps.css'
})
export class MonoblockPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Aquatex',
      name: 'Aquatex',
      image: 'assets/brands-logo/aquatex-logo.png',
      title: 'Aquatex',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@aquatex.com',
      website: 'www.aquatex.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and water management solutions'
    },
    {
      id: 2,
      brandname: 'CRI',
      name: 'CRI',
      image: 'assets/brands-logo/cri-logo.png',
      title: 'CRI',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@cri.com',
      website: 'www.crigroups.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and water management solutions'
    },
    {
      id: 3,
      brandname: 'Crompton',
      name: 'Crompton',
      image: 'assets/brands-logo/crompton-logo.png',
      title: 'Crompton',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@crompton.com',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Motors, pumps, and lighting solutions'
    },
    {
      id: 4,
      brandname: 'Havells',
      name: 'Havells',
      image: 'assets/brands-logo/havells-logo.png',
      title: 'Havells',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Electrical equipment and solutions'
    },
    {
      id: 5,
      brandname: 'Kirloskar',
      name: 'Kirloskar',
      image: 'assets/brands-logo/kirloskar-logo.png',
      title: 'Kirloskar',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@kirloskar.com',
      website: 'www.kirloskar.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps, engines, and industrial solutions'
    },
    {
      id: 6,
      brandname: 'KSB',
      name: 'KSB',
      image: 'assets/brands-logo/ksb-logo.png',
      title: 'KSB',
      contactName: 'Neha Singh',
      mobile: '9876543215',
      whatsapp: '9876543215',
      landline: '020-6666666',
      email: 'info@ksb.com',
      website: 'www.ksb.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and valve solutions'
    },
    {
      id: 7,
      brandname: 'Lubi',
      name: 'Lubi',
      image: 'assets/brands-logo/lubi-logo.png',
      title: 'Lubi',
      contactName: 'Ravi Sharma',
      mobile: '9876543216',
      whatsapp: '9876543216',
      landline: '020-7777777',
      email: 'info@lubi.com',
      website: 'www.lubipumps.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Pumps and industrial solutions'
    },
    {
      id: 8,
      brandname: 'Suguna',
      name: 'Suguna',
      image: 'assets/brands-logo/suguna-logo.png',
      title: 'Suguna',
      contactName: 'Pooja Nair',
      mobile: '9876543217',
      whatsapp: '9876543217',
      landline: '020-8888888',
      email: 'info@suguna.com',
      website: 'www.sugunapumps.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and motors'
    },
    {
      id: 9,
      brandname: 'Texmo',
      name: 'Texmo',
      image: 'assets/brands-logo/texmo-logo.png',
      title: 'Texmo',
      contactName: 'Karan Patel',
      mobile: '9876543218',
      whatsapp: '9876543218',
      landline: '020-9999999',
      email: 'info@texmo.com',
      website: 'www.texmo.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and electric motors'
    },
    {
      id: 10,
      brandname: 'Usha',
      name: 'Usha',
      image: 'assets/brands-logo/usha-logo.png',
      title: 'Usha',
      contactName: 'Sneha Kapoor',
      mobile: '9876543220',
      whatsapp: '9876543220',
      landline: '020-1010101',
      email: 'info@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, pumps, and electrical appliances'
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
