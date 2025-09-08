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
  selector: 'app-kitchen-chimney',
  imports: [CommonModule, FormsModule],
  templateUrl: './kitchen-chimney.html',
  styleUrl: './kitchen-chimney.css'
})
export class KitchenChimney {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Blowhot",
      name: "Blowhot",
      image: "blowhot.jpg",
      title: "Blowhot Appliances",
      contactName: "Blowhot",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 2,
      brandname: "Bosch",
      name: "Bosch",
      image: "bosch.jpg",
      title: "Bosch Appliances",
      contactName: "Bosch",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 3,
      brandname: "Butterfly",
      name: "Butterfly",
      image: "butterfly.jpg",
      title: "Butterfly Appliances",
      contactName: "Butterfly",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Caps",
      name: "Caps",
      image: "caps.jpg",
      title: "Caps Appliances",
      contactName: "Caps",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Carysil",
      name: "Carysil",
      image: "carysil.jpg",
      title: "Carysil Appliances",
      contactName: "Carysil",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 6,
      brandname: "CATA",
      name: "CATA",
      image: "cata.jpg",
      title: "CATA Appliances",
      contactName: "CATA",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 7,
      brandname: "Elica",
      name: "Elica",
      image: "elica.jpg",
      title: "Elica Appliances",
      contactName: "Elica",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 8,
      brandname: "Gilma",
      name: "Gilma",
      image: "gilma.jpg",
      title: "Gilma Appliances",
      contactName: "Gilma",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 9,
      brandname: "Glen",
      name: "Glen",
      image: "glen.jpg",
      title: "Glen Appliances",
      contactName: "Glen",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 10,
      brandname: "HAFELE",
      name: "HAFELE",
      image: "hafele.jpg",
      title: "HAFELE Appliances",
      contactName: "HAFELE",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 11,
      brandname: "Hindware",
      name: "Hindware",
      image: "hindware.jpg",
      title: "Hindware Appliances",
      contactName: "Hindware",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 12,
      brandname: "IFB",
      name: "IFB",
      image: "ifb.jpg",
      title: "IFB Appliances",
      contactName: "IFB",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 13,
      brandname: "Inalsa",
      name: "Inalsa",
      image: "inalsa.jpg",
      title: "Inalsa Appliances",
      contactName: "Inalsa",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 14,
      brandname: "Kinnova",
      name: "Kinnova",
      image: "kinnova.jpg",
      title: "Kinnova Appliances",
      contactName: "Kinnova",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 15,
      brandname: "Kutchina",
      name: "Kutchina",
      image: "kutchina.jpg",
      title: "Kutchina Appliances",
      contactName: "Kutchina",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 16,
      brandname: "Pigeon",
      name: "Pigeon",
      image: "pigeon.jpg",
      title: "Pigeon Appliances",
      contactName: "Pigeon",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 17,
      brandname: "Prestige",
      name: "Prestige",
      image: "prestige.jpg",
      title: "Prestige Appliances",
      contactName: "Prestige",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 18,
      brandname: "Propello",
      name: "Propello",
      image: "propello.jpg",
      title: "Propello Appliances",
      contactName: "Propello",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 19,
      brandname: "Sunflame",
      name: "Sunflame",
      image: "sunflame.jpg",
      title: "Sunflame Appliances",
      contactName: "Sunflame",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 20,
      brandname: "Supreme",
      name: "Supreme",
      image: "supreme.jpg",
      title: "Supreme Appliances",
      contactName: "Supreme",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 21,
      brandname: "Ventair",
      name: "Ventair",
      image: "ventair.jpg",
      title: "Ventair Appliances",
      contactName: "Ventair",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    },
    {
      id: 22,
      brandname: "Whirlpool",
      name: "Whirlpool",
      image: "whirlpool.jpg",
      title: "Whirlpool Appliances",
      contactName: "Whirlpool",
      mobile: "",
      whatsapp: "",
      landline: "",
      email: "",
      website: "",
      address: "",
      dealing: "Kitchen Appliances"
    }
  ]
  

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
