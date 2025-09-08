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
  selector: 'app-coffee-makers',
  imports: [CommonModule, FormsModule],
  templateUrl: './coffee-makers.html',
  styleUrl: './coffee-makers.css'
})
export class CoffeeMakers {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Kitchen & Home Solutions",
      contactName: "Mr. Rajesh Kumar",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "020-12345678",
      email: "info@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Pune, Maharashtra, India",
      dealing: "Kitchen appliances, home essentials, and lighting solutions"
    },
    {
      id: 2,
      brandname: "DeLonghi",
      name: "DeLonghi India",
      image: "delonghi.png",
      title: "Italian Coffee & Kitchen Expertise",
      contactName: "Mr. Anil Kapoor",
      mobile: "9811112233",
      whatsapp: "9811112233",
      landline: "011-22223344",
      email: "support@delonghi.in",
      website: "www.delonghi.com",
      address: "New Delhi, India",
      dealing: "Coffee machines, kettles, toasters, and premium kitchen appliances"
    },
    {
      id: 3,
      brandname: "Havells",
      name: "Havells India",
      image: "havells.png",
      title: "Trusted Name in Appliances",
      contactName: "Mr. Suresh Sharma",
      mobile: "9823456789",
      whatsapp: "9823456789",
      landline: "0120-6789000",
      email: "care@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Kitchen appliances, fans, lighting, and electrical solutions"
    },
    {
      id: 4,
      brandname: "Morphy Richards",
      name: "Morphy Richards India",
      image: "morphyrichards.png",
      title: "Smart Living with Modern Design",
      contactName: "Ms. Ritu Malhotra",
      mobile: "9832123456",
      whatsapp: "9832123456",
      landline: "022-22334455",
      email: "care@morphyrichardsindia.com",
      website: "www.morphyrichardsindia.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "Microwaves, toasters, kettles, and small kitchen appliances"
    },
    {
      id: 5,
      brandname: "Nescafe",
      name: "Nescafe India",
      image: "nescafe.png",
      title: "It All Starts With a Nescafe",
      contactName: "Mr. Vivek Arora",
      mobile: "9845678901",
      whatsapp: "9845678901",
      landline: "011-33445566",
      email: "care@nescafe.in",
      website: "www.nescafe.com/in",
      address: "New Delhi, India",
      dealing: "Coffee machines, coffee powders, and instant coffee solutions"
    },
    {
      id: 6,
      brandname: "Preethi",
      name: "Preethi Appliances",
      image: "preethi.png",
      title: "Enriching Kitchen Experiences",
      contactName: "Ms. Shalini Nair",
      mobile: "9856789012",
      whatsapp: "9856789012",
      landline: "080-22334455",
      email: "support@preethi.in",
      website: "www.preethi.in",
      address: "Chennai, Tamil Nadu, India",
      dealing: "Mixer grinders, gas stoves, induction cooktops, and kitchen tools"
    },
    {
      id: 7,
      brandname: "Prestige",
      name: "TTK Prestige",
      image: "prestige.png",
      title: "Innovating Kitchens Since 1955",
      contactName: "Mr. Ajay Iyer",
      mobile: "9867890123",
      whatsapp: "9867890123",
      landline: "080-23456789",
      email: "care@ttkprestige.com",
      website: "www.ttkprestige.com",
      address: "Bengaluru, Karnataka, India",
      dealing: "Cookware, kitchen appliances, chimneys, and gas stoves"
    },
    {
      id: 8,
      brandname: "Usha",
      name: "Usha International",
      image: "usha.png",
      title: "For the Love of Cooking",
      contactName: "Mr. Sanjay Nair",
      mobile: "9876549876",
      whatsapp: "9876549876",
      landline: "011-23450000",
      email: "care@usha.com",
      website: "www.usha.com",
      address: "New Delhi, India",
      dealing: "Kitchen appliances, fans, sewing machines, and household solutions"
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
