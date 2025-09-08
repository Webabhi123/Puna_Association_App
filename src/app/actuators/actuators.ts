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
  selector: 'app-actuators',
  imports: [CommonModule, FormsModule],
  templateUrl: './actuators.html',
  styleUrl: './actuators.css'
})
export class Actuators {
    showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'Belimo',
        name: 'Belimo',
        image: 'assets/brands-logo/belimo-logo.png',
        title: 'Belimo',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1111111',
        email: 'info@belimo.com',
        website: 'www.belimo.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'HVAC actuators, valves, and sensors'
      },
      {
        id: 2,
        brandname: 'Festo',
        name: 'Festo',
        image: 'assets/brands-logo/festo-logo.png',
        title: 'Festo',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-2222222',
        email: 'info@festo.com',
        website: 'www.festo.com',
        address: 'Pune, Maharashtra',
        dealing: 'Pneumatic and electrical automation technology'
      },
      {
        id: 3,
        brandname: 'Honeywell',
        name: 'Honeywell',
        image: 'assets/brands-logo/honeywell-logo.png',
        title: 'Honeywell',
        contactName: 'Rahul Sharma',
        mobile: '9876543212',
        whatsapp: '9876543212',
        landline: '020-3333333',
        email: 'info@honeywell.com',
        website: 'www.honeywell.com',
        address: 'Bangalore, Karnataka',
        dealing: 'Automation, building technologies, and safety solutions'
      },
      {
        id: 4,
        brandname: 'SMC',
        name: 'SMC',
        image: 'assets/brands-logo/smc-logo.png',
        title: 'SMC',
        contactName: 'Anita Verma',
        mobile: '9876543213',
        whatsapp: '9876543213',
        landline: '020-4444444',
        email: 'info@smcindia.com',
        website: 'www.smcworld.com',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Pneumatic and automation products'
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
