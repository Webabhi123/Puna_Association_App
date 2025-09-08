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
  selector: 'app-geared-motor',
  imports: [CommonModule,FormsModule],
  templateUrl: './geared-motor.html',
  styleUrl: './geared-motor.css'
})
export class GearedMotor {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ABB',
      name: 'ABB',
      image: 'assets/brands-logo/abb-logo.png',
      title: 'ABB',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@abb.com',
      website: 'www.abb.com',
      address: 'Pune, Maharashtra',
      dealing: 'Power and automation technologies'
    },
    {
      id: 2,
      brandname: 'Bonfiglioli',
      name: 'Bonfiglioli',
      image: 'assets/brands-logo/bonfiglioli-logo.png',
      title: 'Bonfiglioli',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@bonfiglioli.com',
      website: 'www.bonfiglioli.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Gearboxes and drive systems'
    },
    {
      id: 3,
      brandname: 'Lenze',
      name: 'Lenze',
      image: 'assets/brands-logo/lenze-logo.png',
      title: 'Lenze',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@lenze.com',
      website: 'www.lenze.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Drive and automation systems'
    },
    {
      id: 4,
      brandname: 'Nord',
      name: 'Nord',
      image: 'assets/brands-logo/nord-logo.png',
      title: 'Nord',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@nord.com',
      website: 'www.nord.com',
      address: 'Pune, Maharashtra',
      dealing: 'Gear motors and drive technology'
    },
    {
      id: 5,
      brandname: 'Panasonic',
      name: 'Panasonic',
      image: 'assets/brands-logo/panasonic-logo.png',
      title: 'Panasonic',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@panasonic.com',
      website: 'www.panasonic.com',
      address: 'Delhi, India',
      dealing: 'Electronics and automation solutions'
    },
    {
      id: 6,
      brandname: 'Premium',
      name: 'Premium',
      image: 'assets/brands-logo/premium-logo.png',
      title: 'Premium',
      contactName: 'Neha Singh',
      mobile: '9876543215',
      whatsapp: '9876543215',
      landline: '020-6666666',
      email: 'info@premiumtransmission.com',
      website: 'www.premiumtransmission.com',
      address: 'Pune, Maharashtra',
      dealing: 'Industrial gearboxes and transmission solutions'
    },
    {
      id: 7,
      brandname: 'Remi',
      name: 'Remi',
      image: 'assets/brands-logo/remi-logo.png',
      title: 'Remi',
      contactName: 'Ravi Sharma',
      mobile: '9876543216',
      whatsapp: '9876543216',
      landline: '020-7777777',
      email: 'info@remigroup.com',
      website: 'www.remigroup.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Motors and industrial solutions'
    },
    {
      id: 8,
      brandname: 'Rexroth',
      name: 'Rexroth',
      image: 'assets/brands-logo/rexroth-logo.png',
      title: 'Rexroth',
      contactName: 'Vikas Patil',
      mobile: '9876543217',
      whatsapp: '9876543217',
      landline: '020-8888888',
      email: 'info@boschrexroth.com',
      website: 'www.boschrexroth.com',
      address: 'Pune, Maharashtra',
      dealing: 'Hydraulics, automation, and drive technology'
    },
    {
      id: 9,
      brandname: 'Rotodel',
      name: 'Rotodel',
      image: 'assets/brands-logo/rotodel-logo.png',
      title: 'Rotodel',
      contactName: 'Meera Nair',
      mobile: '9876543218',
      whatsapp: '9876543218',
      landline: '020-9999999',
      email: 'info@rotodel.com',
      website: 'www.rotodel.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Gear pumps and fluid transfer solutions'
    },
    {
      id: 10,
      brandname: 'Rotomotive',
      name: 'Rotomotive',
      image: 'assets/brands-logo/rotomotive-logo.png',
      title: 'Rotomotive',
      contactName: 'Arjun Reddy',
      mobile: '9876543219',
      whatsapp: '9876543219',
      landline: '020-1010101',
      email: 'info@rotomotive.com',
      website: 'www.rotomotive.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Motors, gearboxes, and automation solutions'
    },
    {
      id: 11,
      brandname: 'Siemens',
      name: 'Siemens',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Siemens',
      contactName: 'Kunal Joshi',
      mobile: '9876543220',
      whatsapp: '9876543220',
      landline: '020-1212121',
      email: 'info@siemens.com',
      website: 'www.siemens.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 12,
      brandname: 'Sumitomo',
      name: 'Sumitomo',
      image: 'assets/brands-logo/sumitomo-logo.png',
      title: 'Sumitomo',
      contactName: 'Sneha Kapoor',
      mobile: '9876543221',
      whatsapp: '9876543221',
      landline: '020-1313131',
      email: 'info@sumitomodrive.com',
      website: 'www.sumitomodrive.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Drive technology and power transmission'
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
