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
  selector: 'app-rotary-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './rotary-pumps.html',
  styleUrl: './rotary-pumps.css'
})
export class RotaryPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Alfa Laval',
      name: 'Alfa Laval',
      image: 'assets/brands-logo/alfa-laval-logo.png',
      title: 'Alfa Laval',
      contactName: 'Rohit Sharma',
      mobile: '987650001',
      whatsapp: '987650001',
      landline: '020-1111222',
      email: 'info@alfalaval.com',
      website: 'www.alfalaval.com',
      address: 'Pune, Maharashtra',
      dealing: 'Heat transfer, separation, and fluid handling'
    },
    {
      id: 2,
      brandname: 'Atlas Copco',
      name: 'Atlas Copco',
      image: 'assets/brands-logo/atlas-copco-logo.png',
      title: 'Atlas Copco',
      contactName: 'Anita Desai',
      mobile: '987650002',
      whatsapp: '987650002',
      landline: '020-2222333',
      email: 'info@atlascopco.com',
      website: 'www.atlascopco.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Air compressors, vacuum solutions, and industrial tools'
    },
    {
      id: 3,
      brandname: 'Edwards',
      name: 'Edwards',
      image: 'assets/brands-logo/edwards-logo.png',
      title: 'Edwards',
      contactName: 'Suresh Patil',
      mobile: '987650003',
      whatsapp: '987650003',
      landline: '020-3333444',
      email: 'info@edwardsvacuum.com',
      website: 'www.edwardsvacuum.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Vacuum and abatement solutions'
    },
    {
      id: 4,
      brandname: 'Johnson',
      name: 'Johnson',
      image: 'assets/brands-logo/johnson-logo.png',
      title: 'Johnson',
      contactName: 'Priya Nair',
      mobile: '987650004',
      whatsapp: '987650004',
      landline: '020-4444555',
      email: 'info@johnson.com',
      website: 'www.johnsoncontrols.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Building technologies and solutions'
    },
    {
      id: 5,
      brandname: 'Rotofluid',
      name: 'Rotofluid',
      image: 'assets/brands-logo/rotofluid-logo.png',
      title: 'Rotofluid',
      contactName: 'Vikas Kulkarni',
      mobile: '987650005',
      whatsapp: '987650005',
      landline: '020-5555666',
      email: 'info@rotofluid.com',
      website: 'www.rotofluid.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Rotary joints, unions, and couplings'
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
