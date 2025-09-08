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
  selector: 'app-upvc-pipes-fittings',
  imports: [CommonModule,FormsModule],
  templateUrl: './upvc-pipes-fittings.html',
  styleUrl: './upvc-pipes-fittings.css'
})
export class UpvcPipesFittings {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'AKG Conduit Pipes',
      name: 'AKG',
      image: 'assets/brands-logo/akg-conduit.png',
      title: 'AKG Conduit Pipes',
      contactName: 'Ramesh Kumar',
      mobile: '9876543101',
      whatsapp: '9876543101',
      landline: '020-4001001',
      email: 'info@akgconduit.com',
      website: 'www.akgconduit.com',
      address: 'Delhi, India',
      dealing: 'Electrical conduit and piping solutions'
    },
    {
      id: 2,
      brandname: 'Anchor Conduit Pipes',
      name: 'Anchor',
      image: 'assets/brands-logo/anchor-conduit.png',
      title: 'Anchor Conduit Pipes',
      contactName: 'Suresh Mehta',
      mobile: '9876543102',
      whatsapp: '9876543102',
      landline: '020-4001002',
      email: 'support@anchorconduit.com',
      website: 'www.anchorconduit.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'PVC conduit pipes and fittings'
    },
    {
      id: 3,
      brandname: 'Astral Conduit Pipes',
      name: 'Astral',
      image: 'assets/brands-logo/astral-conduit.png',
      title: 'Astral Conduit Pipes',
      contactName: 'Pradeep Sharma',
      mobile: '9876543103',
      whatsapp: '9876543103',
      landline: '020-4001003',
      email: 'contact@astralconduit.com',
      website: 'www.astralconduit.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Conduit pipes and cable management systems'
    },
    {
      id: 4,
      brandname: 'Precision',
      name: 'Precision',
      image: 'assets/brands-logo/precision-conduit.png',
      title: 'Precision Conduit Pipes',
      contactName: 'Vikas Jain',
      mobile: '9876543104',
      whatsapp: '9876543104',
      landline: '020-4001004',
      email: 'sales@precisionpipes.com',
      website: 'www.precisionpipes.com',
      address: 'Pune, Maharashtra',
      dealing: 'High-quality conduit pipes and accessories'
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
