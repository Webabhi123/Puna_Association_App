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
  selector: 'app-mccb',
  imports: [CommonModule, FormsModule],
  templateUrl: './mccb.html',
  styleUrl: './mccb.css'
})
export class Mccb {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'ABB',
        name:'ABB',
        image: 'assets/brands-logo/abb-logo.png',
        title: 'ABB',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1234567',
        email: 'info@schneider-electric.in',
        website: 'www.se.com/in',
        address: 'Pune, Maharashtra',
        dealing: 'Power management and automation solutions'
      },
      {
        id: 2,
        brandname:'C&S',
        name: 'C&S',
        image: 'assets/brands-logo/c-s-logo.png',
        title: 'C&S',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 3,
        brandname:'Hager',
        name: 'Hager',
        image: 'assets/brands-logo/hager-logo.png',
        title: 'Hager',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
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
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 5,
        brandname:'HPL',
        name: 'HPL',
        image: 'assets/brands-logo/hpl-logo.png',
        title: 'HPL',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 6,
        brandname:'Indoasian',
        name: 'Indoasian',
        image: 'assets/brands-logo/indoasian-logo.png',
        title: 'Indoasian',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 7,
        brandname:'Lauritz Knudsen',
        name: 'Lauritz Knudsen',
        image: 'assets/brands-logo/lauritz-knudsen-logo.png',
        title: 'Lauritz Knudsen',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 8,
        brandname:'Legrand',
        name: 'Legrand',
        image: 'assets/brands-logo/legrand-logo.png',
        title: 'Legrand',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 9,
        brandname:'Schneider',
        name: 'Schneider',
        image: 'assets/brands-logo/schneider-logo.png',
        title: 'Schneider',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 10,
        brandname:'Siemens',
        name: 'Siemens',
        image: 'assets/brands-logo/siemens-logo.png',
        title: 'Siemens',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
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
