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
  selector: 'app-diesel-generator',
  imports: [CommonModule, FormsModule],
  templateUrl: './diesel-generator.html',
  styleUrl: './diesel-generator.css'
})
export class DieselGenerator {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Ashok Leyland",
      name: "Ashok Leyland",
      image: "ashokLeyland.jpg",
      title: "Ashok Leyland",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 2,
      brandname: "Bharat",
      name: "Bharat",
      image: "bharat.jpg",
      title: "Bharat",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 3,
      brandname: "CAT",
      name: "CAT",
      image: "cat.jpg",
      title: "CAT",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 4,
      brandname: "Cooper",
      name: "Cooper",
      image: "cooper.jpg",
      title: "Cooper",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 5,
      brandname: "Cummins",
      name: "Cummins",
      image: "cummins.jpg",
      title: "Cummins",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 6,
      brandname: "Eicher",
      name: "Eicher",
      image: "eicher.jpg",
      title: "Eicher",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 7,
      brandname: "Escorts",
      name: "Escorts",
      image: "escorts.jpg",
      title: "Escorts",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 8,
      brandname: "Force MTU",
      name: "Force MTU",
      image: "forceMtu.jpg",
      title: "Force MTU",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 9,
      brandname: "Greaves Cotton",
      name: "Greaves Cotton",
      image: "greavesCotton.jpg",
      title: "Greaves Cotton",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 10,
      brandname: "Honeywell",
      name: "Honeywell",
      image: "honeywell.jpg",
      title: "Honeywell",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 11,
      brandname: "Honda",
      name: "Honda",
      image: "honda.jpg",
      title: "Honda",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 12,
      brandname: "JCB",
      name: "JCB",
      image: "jcb.jpg",
      title: "JCB",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 13,
      brandname: "Jakson",
      name: "Jakson",
      image: "jakson.jpg",
      title: "Jakson",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 14,
      brandname: "Kirloskar",
      name: "Kirloskar",
      image: "kirloskar.jpg",
      title: "Kirloskar",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 15,
      brandname: "Kohler",
      name: "Kohler",
      image: "kohler.jpg",
      title: "Kohler",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 16,
      brandname: "Mahindra",
      name: "Mahindra",
      image: "mahindra.jpg",
      title: "Mahindra",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 17,
      brandname: "Perfect",
      name: "Perfect",
      image: "perfect.jpg",
      title: "Perfect",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 18,
      brandname: "Prakash",
      name: "Prakash",
      image: "prakash.jpg",
      title: "Prakash",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 19,
      brandname: "Schneider",
      name: "Schneider",
      image: "schneider.jpg",
      title: "Schneider",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 20,
      brandname: "Sterling",
      name: "Sterling",
      image: "sterling.jpg",
      title: "Sterling",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 21,
      brandname: "Sudhir",
      name: "Sudhir",
      image: "sudhir.jpg",
      title: "Sudhir",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 22,
      brandname: "Tata",
      name: "Tata",
      image: "tata.jpg",
      title: "Tata",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 23,
      brandname: "TMTL",
      name: "TMTL",
      image: "tmtl.jpg",
      title: "TMTL",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
    },
    {
      id: 24,
      brandname: "Volvo",
      name: "Volvo",
      image: "volvo.jpg",
      title: "Volvo",
      contactName: "NA",
      mobile: "NA",
      whatsapp: "NA",
      landline: "NA",
      email: "NA",
      website: "NA",
      address: "NA",
      dealing: "Generators"
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
