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
  selector: 'app-washing-machine',
  imports: [CommonModule,FormsModule],
  templateUrl: './washing-machine.html',
  styleUrl: './washing-machine.css'
})
export class WashingMachine {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
   brands: Brand[] = [
    {
      id: 1,
      brandname: "Akai",
      name: "Akai Electronics",
      image: "akai.png",
      title: "Innovative Home Appliances",
      contactName: "Anita Menon",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-23456789",
      email: "support@akai.com",
      website: "www.akai.com",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Audio Systems, Home Appliances"
    },
    {
      id: 2,
      brandname: "BPL",
      name: "BPL Electronics",
      image: "bpl.png",
      title: "Trusted Electronics Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-34567890",
      email: "support@bpl.com",
      website: "www.bpl.com",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Home Appliances"
    },
    {
      id: 3,
      brandname: "Bosch",
      name: "Bosch Appliances",
      image: "bosch.png",
      title: "Innovative Home & Kitchen Appliances",
      contactName: "Nikhil Jain",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "022-45678901",
      email: "support@bosch.com",
      website: "www.bosch.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Ovens, Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Electrolux",
      name: "Electrolux Appliances",
      image: "electrolux.png",
      title: "Premium Home Solutions",
      contactName: "Suresh Kumar",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-56789012",
      email: "support@electrolux.com",
      website: "www.electrolux.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Godrej",
      name: "Godrej Appliances",
      image: "godrej.png",
      title: "Trusted Home Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "011-24681012",
      email: "support@godrej.com",
      website: "www.godrej.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Refrigerators, Kitchen Appliances"
    },
    {
      id: 6,
      brandname: "Haier",
      name: "Haier Appliances",
      image: "haier.png",
      title: "Innovative Home Solutions",
      contactName: "Sonal Kapoor",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "022-76543210",
      email: "care@haier.com",
      website: "www.haier.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Refrigerators, Mixers, Air Conditioners"
    },
    {
      id: 7,
      brandname: "Haikawa",
      name: "Haikawa Electronics",
      image: "haikawa.png",
      title: "Reliable Home Appliances",
      contactName: "Rakesh Sharma",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "022-67890123",
      email: "support@haikawa.com",
      website: "www.haikawa.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 8,
      brandname: "IFB",
      name: "IFB Appliances",
      image: "ifb.png",
      title: "Premium Home & Kitchen Solutions",
      contactName: "Anil Verma",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "022-78901234",
      email: "support@ifb.in",
      website: "www.ifbappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 9,
      brandname: "Intex",
      name: "Intex Electronics",
      image: "intex.png",
      title: "Innovative Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "022-89012345",
      email: "support@intex.in",
      website: "www.intex.in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Audio Systems, Home Appliances"
    },
    {
      id: 10,
      brandname: "LG",
      name: "LG Appliances",
      image: "lg.png",
      title: "Premium Electronics & Appliances",
      contactName: "Anita Menon",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "022-90123456",
      email: "support@lg.com",
      website: "www.lg.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Refrigerators, Mixers, Air Conditioners"
    },
    {
      id: 11,
      brandname: "Lloyd",
      name: "Lloyd Appliances",
      image: "lloyd.png",
      title: "Trusted Home Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "022-01234567",
      email: "support@lloyd.in",
      website: "www.lloyd.in",
      address: "Mumbai, Maharashtra",
      dealing: "Air Conditioners, Mixers, Kitchen Appliances"
    },
    {
      id: 12,
      brandname: "Midea",
      name: "Midea Appliances",
      image: "midea.png",
      title: "Innovative Home Solutions",
      contactName: "Suresh Kumar",
      mobile: "9876543221",
      whatsapp: "9876543221",
      landline: "022-12345678",
      email: "support@midea.com",
      website: "www.midea.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Air Conditioners, Mixers, Kitchen Appliances"
    },
    {
      id: 13,
      brandname: "Mitashi",
      name: "Mitashi Appliances",
      image: "mitashi.png",
      title: "Affordable Home Electronics",
      contactName: "Vinay Joshi",
      mobile: "9876543222",
      whatsapp: "9876543222",
      landline: "011-23456789",
      email: "support@mitashi.com",
      website: "www.mitashi.com",
      address: "New Delhi, Delhi",
      dealing: "Televisions, Mixers, Kitchen Appliances"
    },
    {
      id: 14,
      brandname: "Onida",
      name: "Onida Appliances",
      image: "onida.png",
      title: "Trusted Electronics Solutions",
      contactName: "Sonal Kapoor",
      mobile: "9876543223",
      whatsapp: "9876543223",
      landline: "022-34567890",
      email: "support@onida.com",
      website: "www.onida.com",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Home Appliances"
    },
    {
      id: 15,
      brandname: "Panasonic",
      name: "Panasonic Appliances",
      image: "panasonic.png",
      title: "Innovative Home Solutions",
      contactName: "Rakesh Sharma",
      mobile: "9876543224",
      whatsapp: "9876543224",
      landline: "022-45678901",
      email: "support@panasonic.com",
      website: "www.panasonic.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Air Conditioners, Kitchen Appliances"
    },
    {
      id: 16,
      brandname: "Samsung",
      name: "Samsung Electronics",
      image: "samsung.png",
      title: "Innovative Home & Electronics",
      contactName: "Anil Verma",
      mobile: "9876543225",
      whatsapp: "9876543225",
      landline: "022-56789012",
      email: "support@samsung.com",
      website: "www.samsung.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Refrigerators, Kitchen Appliances"
    },
    {
      id: 17,
      brandname: "Sansui",
      name: "Sansui Electronics",
      image: "sansui.png",
      title: "Reliable Home Electronics",
      contactName: "Ramesh Sharma",
      mobile: "9876543226",
      whatsapp: "9876543226",
      landline: "022-67890123",
      email: "support@sansui.in",
      website: "www.sansui.in",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Audio Systems, Home Appliances"
    },
    {
      id: 18,
      brandname: "Siemens",
      name: "Siemens Appliances",
      image: "siemens.png",
      title: "Premium Electronics & Appliances",
      contactName: "Anita Menon",
      mobile: "9876543227",
      whatsapp: "9876543227",
      landline: "022-78901234",
      email: "support@siemens.com",
      website: "www.siemens.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Air Conditioners, Kitchen Appliances"
    },
    {
      id: 19,
      brandname: "Singer",
      name: "Singer Appliances",
      image: "singer.png",
      title: "Trusted Home Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543228",
      whatsapp: "9876543228",
      landline: "022-89012345",
      email: "support@singer.in",
      website: "www.singer.in",
      address: "Mumbai, Maharashtra",
      dealing: "Sewing Machines, Mixers, Juicers"
    },
    {
      id: 20,
      brandname: "Videocon",
      name: "Videocon Appliances",
      image: "videocon.png",
      title: "Innovative Electronics & Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543229",
      whatsapp: "9876543229",
      landline: "022-90123456",
      email: "support@videocon.com",
      website: "www.videocon.com",
      address: "Mumbai, Maharashtra",
      dealing: "Televisions, Mixers, Kitchen Appliances"
    },
    {
      id: 21,
      brandname: "Voltas",
      name: "Voltas Appliances",
      image: "voltas.png",
      title: "Premium Home & Cooling Solutions",
      contactName: "Vinay Joshi",
      mobile: "9876543230",
      whatsapp: "9876543230",
      landline: "011-23456789",
      email: "support@voltas.com",
      website: "www.voltas.com",
      address: "New Delhi, Delhi",
      dealing: "Air Conditioners, Mixers, Refrigerators"
    },
    {
      id: 22,
      brandname: "Whirlpool",
      name: "Whirlpool Appliances",
      image: "whirlpool.png",
      title: "Reliable Kitchen & Home Appliances",
      contactName: "Sonal Kapoor",
      mobile: "9876543231",
      whatsapp: "9876543231",
      landline: "022-34567890",
      email: "support@whirlpool.com",
      website: "www.whirlpool.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Refrigerators, Washing Machines"
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
