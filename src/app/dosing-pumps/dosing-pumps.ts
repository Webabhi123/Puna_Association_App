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
  selector: 'app-dosing-pumps',
  imports: [CommonModule, FormsModule],
  templateUrl: './dosing-pumps.html',
  styleUrl: './dosing-pumps.css'
})
export class DosingPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ANT',
      name: 'ANT',
      image: 'assets/brands-logo/ant-logo.png',
      title: 'ANT',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@ant.com',
      website: 'www.ant.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Dosing pumps and automation solutions'
    },
    {
      id: 2,
      brandname: 'E Dose',
      name: 'E Dose',
      image: 'assets/brands-logo/edose-logo.png',
      title: 'E Dose',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@edose.com',
      website: 'www.edose.com',
      address: 'Pune, Maharashtra',
      dealing: 'Electronic dosing systems'
    },
    {
      id: 3,
      brandname: 'Milton Roy',
      name: 'Milton Roy',
      image: 'assets/brands-logo/miltonroy-logo.png',
      title: 'Milton Roy',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@miltonroy.com',
      website: 'www.miltonroy.com',
      address: 'Delhi, India',
      dealing: 'Dosing and metering pumps'
    },
    {
      id: 4,
      brandname: 'Pro Aqua',
      name: 'Pro Aqua',
      image: 'assets/brands-logo/proaqua-logo.png',
      title: 'Pro Aqua',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@proaqua.com',
      website: 'www.proaqua.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Water treatment and dosing solutions'
    },
    {
      id: 5,
      brandname: 'Verito',
      name: 'Verito',
      image: 'assets/brands-logo/verito-logo.png',
      title: 'Verito',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@veritopumps.com',
      website: 'www.veritopumps.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Dosing pumps and automation'
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
