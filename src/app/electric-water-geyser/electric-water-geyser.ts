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
  selector: 'app-electric-water-geyser',
  imports: [CommonModule, FormsModule],
  templateUrl: './electric-water-geyser.html',
  styleUrl: './electric-water-geyser.css'
})
export class ElectricWaterGeyser {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  brands: Brand[] = [
    { 
      id: 1, 
      brandname: 'AO SMITH',
      name:'AO SMITH',
      image: 'assets/images/brands/ao-smith.png',
      title: 'AO SMITH',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@ao-smith.in',
      website: 'www.ao-smith.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 2, 
      brandname: 'Apex',
      name:'Apex',
      image: 'assets/images/brands/apex.png',
      title: 'Apex',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@apex.in',
      website: 'www.apex.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 3, 
      brandname: 'Bajaj',
      name:'Bajaj',
      image: 'assets/images/brands/bajaj.png',
      title: 'Bajaj',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@bajaj.in',
      website: 'www.bajaj.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 4, 
      brandname: 'Blowhot',
      name:'Blowhot',
      image: 'assets/images/brands/blowhot.png',
      title: 'Blowhot',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@blowhot.in',
      website: 'www.blowhot.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 5, 
      brandname: 'Crompton',
      name:'Crompton',
      image: 'assets/images/brands/crompton.png',
      title: 'Crompton',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@crompton.in',
      website: 'www.crompton.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 6, 
      brandname: 'Ferroli',
      name:'Ferroli',
      image: 'assets/images/brands/ferroli.png',
      title: 'Ferroli',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@ferroli.in',
      website: 'www.ferroli.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 7, 
      brandname: 'Haier',
      name:'Haier',
      image: 'assets/images/brands/haier.png',
      title: 'Haier',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@haier.in',
      website: 'www.haier.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 8, 
      brandname: 'Havells',
      name:'Havells',
      image: 'assets/images/brands/havells.png',
      title: 'Havells',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@havells.in',
      website: 'www.havells.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 9, 
      brandname: 'Hindware',
      name:'Hindware',
      image: 'assets/images/brands/hindware.png',
      title: 'Hindware',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@hindware.in',
      website: 'www.hindware.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 10, 
      brandname: 'Honeywell',
      name:'Honeywell',
      image: 'assets/images/brands/honeywell.png',
      title: 'Honeywell',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@honeywell.in',
      website: 'www.honeywell.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 11, 
      brandname: 'Indo',
      name:'Indo',
      image: 'assets/images/brands/indo.png',
      title: 'Indo',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@indo.in',
      website: 'www.indo.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    {   
        id: 12, 
        brandname: 'Jaquar',
        name:'Jaquar',
        image: 'assets/images/brands/jaquar.png',
        title: 'Jaquar',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1234567',
        email: 'info@jaquar.in',
        website: 'www.jaquar.in',
        address: 'Pune, Maharashtra',
        dealing: 'Power management and automation solutions'
    },
    { 
        id: 13, 
        brandname: 'Johnson',
        name:'Johnson',
        image: 'assets/images/brands/johnson.png',
        title: 'Johnson',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1234567',
        email: 'info@johnson.in',
        website: 'www.johnson.in',
        address: 'Pune, Maharashtra',
        dealing: 'Power management and automation solutions'
    },
    { 
        id: 14, 
        brandname: 'Jyoti',
        name:'Jyoti',
        image: 'assets/images/brands/jyoti.png',
        title: 'Jyoti',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1234567',
        email: 'info@jyoti.in',
        website: 'www.jyoti.in',
        address: 'Pune, Maharashtra',
        dealing: 'Power management and automation solutions'
    },
    { 
        id: 15, 
        brandname: 'Kenstar',
        name:'Kenstar',
        image: 'assets/images/brands/kenstar.png',
        title: 'Kenstar',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1234567',
        email: 'info@kenstar.in',
        website: 'www.kenstar.in',
        address: 'Pune, Maharashtra',
        dealing: 'Power management and automation solutions'
    },
    { 
      id: 16, 
      brandname: 'Khaitan',
      name:'Khaitan',
      image: 'assets/images/brands/khaitan.png',
      title: 'Khaitan',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@khaitan.in',
      website: 'www.khaitan.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 17, 
      brandname: 'Marc',
      name:'Marc',
      image: 'assets/images/brands/marc.png',
      title: 'Marc',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@marc.in',
      website: 'www.marc.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 18, 
      brandname: 'Morphy Richards',
      name:'Morphy Richards',
      image: 'assets/images/brands/morphy-richards.png',
      title: 'Morphy Richards',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@morphy-richards.in',
      website: 'www.morphy-richards.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 19, 
      brandname: 'Orient',
      name:'Orient',
      image: 'assets/images/brands/orient.png',
      title: 'Orient',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@orient.in',
      website: 'www.orient.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 20, 
      brandname: 'Parryware',
      name:'Parryware',
      image: 'assets/images/brands/parryware.png',
      title: 'Parryware',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@parryware.in',
      website: 'www.parryware.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 21, 
      brandname: 'Racold',
      name:'Racold',
      image: 'assets/images/brands/racoold.png',
      title: 'Racold',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@racold.in',
      website: 'www.racold.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 22, 
      brandname: 'RR',
      name:'RR',
      image: 'assets/images/brands/rr.png',
      title: 'RR',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@rr.in',
      website: 'www.rr.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 23, 
      brandname: 'Singer',
      name:'Singer',
      image: 'assets/images/brands/singer.png',
      title: 'Singer',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@singer.in',
      website: 'www.singer.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 24, 
      brandname: 'Spherehot',
      name:'Spherehot',
      image: 'assets/images/brands/spherehot.png',
      title: 'Spherehot',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@spherehot.in',
      website: 'www.spherehot.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 25, 
      brandname: 'Sunflame',
      name:'Sunflame',
      image: 'assets/images/brands/sunflame.png',
      title: 'Sunflame',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@sunflame.in',
      website: 'www.sunflame.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 26, 
      brandname: 'Suraksha',
      name:'Suraksha',
      image: 'assets/images/brands/suraksha.png',
      title: 'Suraksha',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@suraksha.in',
      website: 'www.suraksha.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 27, 
      brandname: 'Surya',
      name:'Surya',
      image: 'assets/images/brands/surya.png',
      title: 'Surya',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@surya.in',
      website: 'www.surya.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 28, 
      brandname: 'Supreme',
      name:'Supreme',
      image: 'assets/images/brands/supreme.png',
      title: 'Supreme',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@supreme.in',
      website: 'www.supreme.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 29, 
      brandname: 'Usha',
      name:'Usha',
      image: 'assets/images/brands/usha.png',
      title: 'Usha',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@usha.in',
      website: 'www.usha.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 30, 
      brandname: 'V-Guard',
      name:'V-Guard',
      image: 'assets/images/brands/vguard.png',
      title: 'V-Guard',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@vguard.in',
      website: 'www.vguard.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    { 
      id: 31, 
      brandname: 'Venus',
      name:'Venus',
      image: 'assets/images/brands/venus.png',
      title: 'Venus',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@venus.in',
      website: 'www.venus.in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
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
