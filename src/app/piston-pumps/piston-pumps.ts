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
  selector: 'app-piston-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './piston-pumps.html',
  styleUrl: './piston-pumps.css'
})
export class PistonPumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bosch Rexroth',
      name: 'Bosch Rexroth',
      image: 'assets/brands-logo/bosch-rexroth-logo.png',
      title: 'Bosch Rexroth',
      contactName: 'Rohit Sharma',
      mobile: '987650001',
      whatsapp: '987650001',
      landline: '020-1111222',
      email: 'info@boschrexroth.com',
      website: 'www.boschrexroth.com',
      address: 'Pune, Maharashtra',
      dealing: 'Hydraulics, automation, and drive systems'
    },
    {
      id: 2,
      brandname: 'Daikin',
      name: 'Daikin',
      image: 'assets/brands-logo/daikin-logo.png',
      title: 'Daikin',
      contactName: 'Anita Desai',
      mobile: '987650002',
      whatsapp: '987650002',
      landline: '020-2222333',
      email: 'info@daikin.com',
      website: 'www.daikinindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Air conditioning and refrigeration systems'
    },
    {
      id: 3,
      brandname: 'Graco',
      name: 'Graco',
      image: 'assets/brands-logo/graco-logo.png',
      title: 'Graco',
      contactName: 'Suresh Patil',
      mobile: '987650003',
      whatsapp: '987650003',
      landline: '020-3333444',
      email: 'info@graco.com',
      website: 'www.graco.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Fluid handling systems and equipment'
    },
    {
      id: 4,
      brandname: 'Linde',
      name: 'Linde',
      image: 'assets/brands-logo/linde-logo.png',
      title: 'Linde',
      contactName: 'Priya Nair',
      mobile: '987650004',
      whatsapp: '987650004',
      landline: '020-4444555',
      email: 'info@linde.com',
      website: 'www.linde.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Industrial gases and engineering solutions'
    },
    {
      id: 5,
      brandname: 'Polyhydron',
      name: 'Polyhydron',
      image: 'assets/brands-logo/polyhydron-logo.png',
      title: 'Polyhydron',
      contactName: 'Vikas Kulkarni',
      mobile: '987650005',
      whatsapp: '987650005',
      landline: '020-5555666',
      email: 'info@polyhydron.com',
      website: 'www.polyhydron.com',
      address: 'Belgaum, Karnataka',
      dealing: 'Hydraulic valves, pumps, and systems'
    },
    {
      id: 6,
      brandname: 'Yuken',
      name: 'Yuken',
      image: 'assets/brands-logo/yuken-logo.png',
      title: 'Yuken',
      contactName: 'Meena Joshi',
      mobile: '987650006',
      whatsapp: '987650006',
      landline: '020-6666777',
      email: 'info@yuken.com',
      website: 'www.yukenindia.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Hydraulic pumps, valves, and cylinders'
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
