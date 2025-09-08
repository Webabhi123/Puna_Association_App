import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { Brand } from '../model/brand.model';

interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-plc-accessories',
  imports: [FormsModule,CommonModule],
  templateUrl: './plc-accessories.html',
  styleUrl: './plc-accessories.css'
})
export class PlcAccessories {

  showEnquiryForm=false;

  enquiryform: EnquiryForm = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',

  };
  selectedBrand: Brand | null = null;
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Fanuc',
      name: 'Fanuc',
      image: 'assets/brands-logo/fanuc-logo.png',
      title: 'Fanuc',
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
      brandname: 'Fatek',
      name: 'Fatek',
      image: 'assets/brands-logo/fatek-logo.png',
      title: 'Fatek',
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
      id: 3,
      brandname: 'Phoenix Contact',
      name: 'Phoenix Contact',
      image: 'assets/brands-logo/phoenix-logo.png',
      title: 'Phoenix Contact',
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
      id: 4,
      brandname: 'Messung',
      name: 'Messung',
      image: 'assets/brands-logo/messung-logo.png',
      title: 'Messung',
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
      id: 5,
      brandname: 'Modicon',
      name: 'Modicon',
      image: 'assets/brands-logo/modicon-logo.png',
      title: 'Modicon',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@schneider-electric.in',
      website: 'www.se.com/in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
  ];
  constructor(private http: HttpClient) {
    if (this.brands.length > 0) {
      this.selectedBrand = this.brands[0];
    }
  }
  selectBrand(brand: Brand): void {
    this.selectedBrand = brand;
  }

       // Open the enquiry modal
  openEnquiryModal(): void {
    const modal = document.getElementById('enquiryModal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }
      closeEnquiryModal(): void {
        const modal = document.getElementById('enquiryModal') as HTMLElement | null;
        if (modal) modal.style.display = 'none';
      }
      onSubmit(form: NgForm): void {
        if (form.valid) {
          console.log('Form Data:', this.enquiryform); // Debug: check data being sent
          this.http.post(`${environment.apiUrl}/api/enquiry/submit`, this.enquiryform).subscribe({
            next: (res) => {
              alert('Thank you for contacting us! We will get back to you soon.');
              form.resetForm();
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
