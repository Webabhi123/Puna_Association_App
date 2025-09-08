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
  selector: 'app-high-pressure-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './high-pressure-pumps.html',
  styleUrl: './high-pressure-pumps.css'
})
export class HighPressurePumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bosch',
      name: 'Bosch',
      image: 'assets/brands-logo/bosch-logo.png',
      title: 'Bosch',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@bosch.com',
      website: 'www.bosch.com',
      address: 'Bengaluru, Karnataka',
      dealing: 'Industrial solutions and technologies'
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
      brandname: 'Grundfos',
      name: 'Grundfos',
      image: 'assets/brands-logo/grundfos-logo.png',
      title: 'Grundfos',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@grundfos.com',
      website: 'www.grundfos.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and water solutions'
    },
    {
      id: 4,
      brandname: 'Shakti',
      name: 'Shakti',
      image: 'assets/brands-logo/shakti-logo.png',
      title: 'Shakti',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@shaktipumps.com',
      website: 'www.shaktipumps.com',
      address: 'Indore, Madhya Pradesh',
      dealing: 'Pumps and pumping solutions'
    },
    {
      id: 5,
      brandname: 'Texmo',
      name: 'Texmo',
      image: 'assets/brands-logo/texmo-logo.png',
      title: 'Texmo',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@texmo.com',
      website: 'www.texmo.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and electric motors'
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
