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
  selector: 'app-oven',
  imports: [CommonModule,FormsModule],
  templateUrl: './oven.html',
  styleUrl: './oven.css'
})
export class Oven {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-23456789",
      email: "support@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 2,
      brandname: "Bosch",
      name: "Bosch Appliances",
      image: "bosch.png",
      title: "Trusted Household Appliances",
      contactName: "Rahul Sharma",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-56789012",
      email: "support@bosch.in",
      website: "www.bosch.in",
      address: "Bangalore, Karnataka",
      dealing: "Mixers, Ovens, Kitchen Appliances"
    },
    {
      id: 3,
      brandname: "Electrolux",
      name: "Electrolux Appliances",
      image: "electrolux.png",
      title: "Premium Home Solutions",
      contactName: "Suresh Nair",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "022-67890123",
      email: "info@electrolux.in",
      website: "www.electrolux.in",
      address: "Mumbai, Maharashtra",
      dealing: "Refrigerators, Mixers, Ovens"
    },
    {
      id: 4,
      brandname: "Elica",
      name: "Elica Appliances",
      image: "elica.png",
      title: "Smart Kitchen Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "0120-3456789",
      email: "support@elica.in",
      website: "www.elica.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Chimneys, Cooktops, Mixers"
    },
    {
      id: 5,
      brandname: "Godrej",
      name: "Godrej Appliances",
      image: "godrej.png",
      title: "Trusted Home Appliances",
      contactName: "Rajesh Verma",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "022-23456789",
      email: "care@godrejappliances.com",
      website: "www.godrejappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Fans, Refrigerators"
    },
    {
      id: 6,
      brandname: "Haier",
      name: "Haier Appliances",
      image: "haier.png",
      title: "Premium Electronics & Appliances",
      contactName: "Anil Verma",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "022-34567890",
      email: "support@haier.in",
      website: "www.haier.in",
      address: "Mumbai, Maharashtra",
      dealing: "Refrigerators, Washing Machines, Kitchen Appliances"
    },
    {
      id: 7,
      brandname: "Havells",
      name: "Havells Appliances",
      image: "havells.png",
      title: "Premium Electrical Appliances",
      contactName: "Nikhil Jain",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "0120-4771000",
      email: "info@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Fans, Mixers, Kitchen Appliances"
    },
    {
      id: 8,
      brandname: "IFB",
      name: "IFB Appliances",
      image: "ifb.png",
      title: "Smart Home Appliances",
      contactName: "Pooja Singh",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "011-23456789",
      email: "info@ifb.in",
      website: "www.ifb.in",
      address: "New Delhi, Delhi",
      dealing: "Washing Machines, Mixers, Kitchen Appliances"
    },
    {
      id: 9,
      brandname: "KAFF",
      name: "KAFF Appliances",
      image: "kaff.png",
      title: "Innovative Kitchen Appliances",
      contactName: "Manoj Gupta",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "022-98765432",
      email: "support@kaff.in",
      website: "www.kaff.in",
      address: "Mumbai, Maharashtra",
      dealing: "Chimneys, Cooktops, Kitchen Appliances"
    },
    {
      id: 10,
      brandname: "Kenstar",
      name: "Kenstar Appliances",
      image: "kenstar.png",
      title: "Lifestyle Kitchen Solutions",
      contactName: "Arvind Patel",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "020-23456789",
      email: "info@kenstar.in",
      website: "www.kenstar.in",
      address: "Pune, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 11,
      brandname: "Kutchina",
      name: "Kutchina Appliances",
      image: "kutchina.png",
      title: "Premium Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "022-34567891",
      email: "support@kutchina.com",
      website: "www.kutchina.com",
      address: "Mumbai, Maharashtra",
      dealing: "Chimneys, Cooktops, Mixers"
    },
    {
      id: 12,
      brandname: "LG",
      name: "LG Appliances",
      image: "lg.png",
      title: "Trusted Electronics & Appliances",
      contactName: "Rajesh Verma",
      mobile: "9876543221",
      whatsapp: "9876543221",
      landline: "022-45678901",
      email: "support@lg.in",
      website: "www.lg.in",
      address: "Mumbai, Maharashtra",
      dealing: "Refrigerators, Washing Machines, Kitchen Appliances"
    },
    {
      id: 13,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Home & Kitchen Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543222",
      whatsapp: "9876543222",
      landline: "011-24681012",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 14,
      brandname: "Morphy Richards",
      name: "Morphy Richards",
      image: "morphyrichards.png",
      title: "Premium Kitchen Appliances",
      contactName: "Sonal Kapoor",
      mobile: "9876543223",
      whatsapp: "9876543223",
      landline: "022-76543210",
      email: "care@morphyrichards.in",
      website: "www.morphyrichards.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Ovens, Cooktops, Juicers"
    },
    {
      id: 15,
      brandname: "Onida",
      name: "Onida Appliances",
      image: "onida.png",
      title: "Reliable Electronics & Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543224",
      whatsapp: "9876543224",
      landline: "022-34567890",
      email: "support@onida.in",
      website: "www.onida.in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Kitchen Appliances"
    },
    {
      id: 16,
      brandname: "Panasonic",
      name: "Panasonic Appliances",
      image: "panasonic.png",
      title: "Trusted Electronics & Appliances",
      contactName: "Rajesh Verma",
      mobile: "9876543225",
      whatsapp: "9876543225",
      landline: "022-45678901",
      email: "support@panasonic.in",
      website: "www.panasonic.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Ovens, Fans, Electronics"
    },
    {
      id: 17,
      brandname: "Philips",
      name: "Philips Appliances",
      image: "philips.png",
      title: "Innovative Home Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543226",
      whatsapp: "9876543226",
      landline: "0120-3456789",
      email: "care@philips.in",
      website: "www.philips.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Juicers, Lighting, Home Appliances"
    },
    {
      id: 18,
      brandname: "Pigeon",
      name: "Pigeon Appliances",
      image: "pigeon.png",
      title: "Affordable Kitchen Solutions",
      contactName: "Sanjay Bansal",
      mobile: "9876543227",
      whatsapp: "9876543227",
      landline: "080-23456789",
      email: "support@stovekraft.com",
      website: "www.pigeonappliances.com",
      address: "Bengaluru, Karnataka",
      dealing: "Mixers, Cookers, Kitchen Appliances"
    },
    {
      id: 19,
      brandname: "Prestige",
      name: "Prestige Appliances",
      image: "prestige.png",
      title: "Trusted Kitchen Solutions",
      contactName: "Rakesh Sharma",
      mobile: "9876543228",
      whatsapp: "9876543228",
      landline: "022-56789012",
      email: "info@prestigeappliances.com",
      website: "www.prestigeappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Cookers, Juicers"
    },
    {
      id: 20,
      brandname: "Samsung",
      name: "Samsung Appliances",
      image: "samsung.png",
      title: "Innovative Electronics & Appliances",
      contactName: "Anil Verma",
      mobile: "9876543229",
      whatsapp: "9876543229",
      landline: "022-23456789",
      email: "support@samsung.in",
      website: "www.samsung.in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Refrigerators"
    },
    {
      id: 21,
      brandname: "Usha",
      name: "Usha Appliances",
      image: "usha.png",
      title: "Reliable Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543230",
      whatsapp: "9876543230",
      landline: "022-34567890",
      email: "info@usha.in",
      website: "www.usha.in",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 22,
      brandname: "Videocon",
      name: "Videocon Appliances",
      image: "videocon.png",
      title: "Trusted Electronics & Appliances",
      contactName: "Sonal Kapoor",
      mobile: "9876543231",
      whatsapp: "9876543231",
      landline: "022-76543210",
      email: "support@videocon.in",
      website: "www.videocon.in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Kitchen Appliances"
    },
    {
      id: 23,
      brandname: "Voltas",
      name: "Voltas Appliances",
      image: "voltas.png",
      title: "Reliable Home & Electronics",
      contactName: "Anita Menon",
      mobile: "9876543232",
      whatsapp: "9876543232",
      landline: "044-34567891",
      email: "info@voltas.com",
      website: "www.voltas.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Air Conditioners, Mixers, Home Appliances"
    },
    {
      id: 24,
      brandname: "Whirlpool",
      name: "Whirlpool Appliances",
      image: "whirlpool.png",
      title: "Premium Home Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543233",
      whatsapp: "9876543233",
      landline: "0120-3456789",
      email: "support@whirlpool.in",
      website: "www.whirlpool.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Washing Machines, Mixers, Refrigerators"
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
