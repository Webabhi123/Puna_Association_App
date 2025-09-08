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
  selector: 'app-gear-pump',
  imports: [CommonModule, FormsModule],
  templateUrl: './gear-pump.html',
  styleUrl: './gear-pump.css'
})
export class GearPump {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bosch Rexroth',
      name: 'Bosch Rexroth',
      image: 'assets/brands-logo/boschrexroth-logo.png',
      title: 'Bosch Rexroth',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@boschrexroth.com',
      website: 'www.boschrexroth.com',
      address: 'Pune, Maharashtra',
      dealing: 'Hydraulics, automation, and drive technology'
    },
    {
      id: 2,
      brandname: 'Eaton Vickers',
      name: 'Eaton Vickers',
      image: 'assets/brands-logo/eatonvickers-logo.png',
      title: 'Eaton Vickers',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@eaton.com',
      website: 'www.eaton.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Hydraulic pumps, motors, and valves'
    },
    {
      id: 3,
      brandname: 'Graco',
      name: 'Graco',
      image: 'assets/brands-logo/graco-logo.png',
      title: 'Graco',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@graco.com',
      website: 'www.graco.com',
      address: 'Delhi, India',
      dealing: 'Fluid handling equipment'
    },
    {
      id: 4,
      brandname: 'GROZ',
      name: 'GROZ',
      image: 'assets/brands-logo/groz-logo.png',
      title: 'GROZ',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@groz-tools.com',
      website: 'www.groz-tools.com',
      address: 'Faridabad, Haryana',
      dealing: 'Lubrication equipment and hand tools'
    },
    {
      id: 5,
      brandname: 'Jacktech Hydraulics',
      name: 'Jacktech Hydraulics',
      image: 'assets/brands-logo/jacktechhydraulics-logo.png',
      title: 'Jacktech Hydraulics',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@jacktechhydraulics.com',
      website: 'www.jacktechhydraulics.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Hydraulic jacks and equipment'
    },
    {
      id: 6,
      brandname: 'Rotodel',
      name: 'Rotodel',
      image: 'assets/brands-logo/rotodel-logo.png',
      title: 'Rotodel',
      contactName: 'Neha Singh',
      mobile: '9876543215',
      whatsapp: '9876543215',
      landline: '020-6666666',
      email: 'info@rotodel.com',
      website: 'www.rotodel.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Gear pumps and fluid transfer solutions'
    },
    {
      id: 7,
      brandname: 'Yuken',
      name: 'Yuken',
      image: 'assets/brands-logo/yuken-logo.png',
      title: 'Yuken',
      contactName: 'Ravi Sharma',
      mobile: '9876543216',
      whatsapp: '9876543216',
      landline: '020-7777777',
      email: 'info@yukenindia.com',
      website: 'www.yukenindia.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Hydraulic pumps, valves, and systems'
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
