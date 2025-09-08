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
  selector: 'app-iron',
  imports: [CommonModule,FormsModule],
  templateUrl: './iron.html',
  styleUrl: './iron.css'
})
export class Iron {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "BALTRA",
      name: "Baltra Appliances",
      image: "baltra.jpg",
      title: "Innovative Kitchen & Home Appliances",
      contactName: "Rajesh Sharma",
      mobile: "9876543201",
      whatsapp: "9876543201",
      landline: "011-22334455",
      email: "info@baltra.com",
      website: "www.baltra.com",
      address: "New Delhi, India",
      dealing: "Kitchen appliances, home solutions"
    },
    {
      id: 2,
      brandname: "Bajaj",
      name: "Bajaj Electricals",
      image: "bajaj.jpg",
      title: "Trusted Indian Appliances",
      contactName: "Ankit Mehta",
      mobile: "9876543202",
      whatsapp: "9876543202",
      landline: "022-33445566",
      email: "support@bajajelectricals.com",
      website: "www.bajajelectricals.com",
      address: "Mumbai, India",
      dealing: "Electricals, kitchen & home appliances"
    },
    {
      id: 3,
      brandname: "Crompton",
      name: "Crompton Greaves",
      image: "crompton.jpg",
      title: "Lighting & Appliances",
      contactName: "Priya Verma",
      mobile: "9876543203",
      whatsapp: "9876543203",
      landline: "022-44556677",
      email: "help@cromptongreaves.com",
      website: "www.cromptongreaves.com",
      address: "Mumbai, India",
      dealing: "Fans, pumps, lights, appliances"
    },
    {
      id: 4,
      brandname: "Eveready",
      name: "Eveready Industries",
      image: "eveready.jpg",
      title: "Lighting & Energy Solutions",
      contactName: "Sandeep Jain",
      mobile: "9876543204",
      whatsapp: "9876543204",
      landline: "033-22334455",
      email: "info@eveready.com",
      website: "www.evereadyindia.com",
      address: "Kolkata, India",
      dealing: "Batteries, lights, appliances"
    },
    {
      id: 5,
      brandname: "Havells",
      name: "Havells India Ltd",
      image: "havells.jpg",
      title: "Innovative Electrical Goods",
      contactName: "Amit Khurana",
      mobile: "9876543205",
      whatsapp: "9876543205",
      landline: "0120-2233445",
      email: "care@havells.com",
      website: "www.havells.com",
      address: "Noida, India",
      dealing: "Cables, fans, lighting, appliances"
    },
    {
      id: 6,
      brandname: "Inalsa",
      name: "Inalsa Appliances",
      image: "inalsa.jpg",
      title: "Smart Kitchen Solutions",
      contactName: "Nidhi Gupta",
      mobile: "9876543206",
      whatsapp: "9876543206",
      landline: "011-33445566",
      email: "support@inalsa.com",
      website: "www.inalsaappliances.com",
      address: "New Delhi, India",
      dealing: "Kitchen & home appliances"
    },
    {
      id: 7,
      brandname: "Kenstar",
      name: "Kenstar",
      image: "kenstar.jpg",
      title: "Comfort Appliances",
      contactName: "Rahul Kapoor",
      mobile: "9876543207",
      whatsapp: "9876543207",
      landline: "022-44556688",
      email: "help@kenstar.in",
      website: "www.kenstar.in",
      address: "Mumbai, India",
      dealing: "Appliances, air coolers, microwaves"
    },
    {
      id: 8,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.jpg",
      title: "Innovative Kitchen Appliances",
      contactName: "Rohit Sharma",
      mobile: "9876543208",
      whatsapp: "9876543208",
      landline: "011-55667788",
      email: "info@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, India",
      dealing: "Mixer grinders, juicers, kitchen appliances"
    },
    {
      id: 9,
      brandname: "Morphy Richards",
      name: "Morphy Richards India",
      image: "morphy_richards.jpg",
      title: "Premium Appliances",
      contactName: "Anjali Mehta",
      mobile: "9876543209",
      whatsapp: "9876543209",
      landline: "022-66778899",
      email: "support@morphyrichardsindia.com",
      website: "www.morphyrichardsindia.com",
      address: "Mumbai, India",
      dealing: "Premium home & kitchen appliances"
    },
    {
      id: 10,
      brandname: "Orient",
      name: "Orient Electric",
      image: "orient.jpg",
      title: "Smart Fans & Appliances",
      contactName: "Deepak Joshi",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "011-33445577",
      email: "info@orientelectric.com",
      website: "www.orientelectric.com",
      address: "New Delhi, India",
      dealing: "Fans, lighting, appliances"
    },
    {
      id: 11,
      brandname: "Orpat",
      name: "Orpat Group",
      image: "orpat.jpg",
      title: "Affordable Home Appliances",
      contactName: "Sonal Patel",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "079-22334455",
      email: "support@orpatgroup.com",
      website: "www.orpatgroup.com",
      address: "Gujarat, India",
      dealing: "Clocks, appliances, electronics"
    },
    {
      id: 12,
      brandname: "Panasonic",
      name: "Panasonic India",
      image: "panasonic.jpg",
      title: "Better Living with Technology",
      contactName: "Kunal Sharma",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "011-44556677",
      email: "support@in.panasonic.com",
      website: "www.panasonic.com",
      address: "Gurgaon, India",
      dealing: "Electronics, appliances, solutions"
    },
    {
      id: 13,
      brandname: "Philips",
      name: "Philips India",
      image: "philips.jpg",
      title: "Innovation & You",
      contactName: "Ritu Verma",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-55667788",
      email: "support@philips.com",
      website: "www.philips.co.in",
      address: "Mumbai, India",
      dealing: "Electronics, lighting, appliances"
    },
    {
      id: 14,
      brandname: "Pigeon",
      name: "Pigeon Appliances",
      image: "pigeon.jpg",
      title: "Smart Kitchen Partner",
      contactName: "Ajay Kumar",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "080-22334455",
      email: "info@pigeonappliances.com",
      website: "www.pigeonappliances.com",
      address: "Bengaluru, India",
      dealing: "Kitchen & cooking appliances"
    },
    {
      id: 15,
      brandname: "Polar",
      name: "Polar Appliances",
      image: "polar.jpg",
      title: "Trusted Fans & Appliances",
      contactName: "Swati Singh",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "033-44556677",
      email: "support@polarindia.com",
      website: "www.polarindia.com",
      address: "Kolkata, India",
      dealing: "Fans, small appliances"
    },
    {
      id: 16,
      brandname: "Prestige",
      name: "TTK Prestige",
      image: "prestige.jpg",
      title: "Kitchen Solutions",
      contactName: "Shivam Arora",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "080-33445566",
      email: "support@ttkprestige.com",
      website: "www.ttkprestige.com",
      address: "Bengaluru, India",
      dealing: "Cookers, kitchen appliances"
    },
    {
      id: 17,
      brandname: "Shilter",
      name: "Shilter Appliances",
      image: "shilter.jpg",
      title: "Smart Home Appliances",
      contactName: "Neha Agarwal",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "011-55667799",
      email: "support@shilter.com",
      website: "www.shilter.com",
      address: "New Delhi, India",
      dealing: "Home & kitchen appliances"
    },
    {
      id: 18,
      brandname: "Singer",
      name: "Singer India",
      image: "singer.jpg",
      title: "Trusted Appliances",
      contactName: "Anshul Mehta",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "022-66778899",
      email: "care@singerindia.net",
      website: "www.singerindia.net",
      address: "Mumbai, India",
      dealing: "Appliances, sewing machines, electronics"
    },
    {
      id: 19,
      brandname: "Sunflame",
      name: "Sunflame Appliances",
      image: "sunflame.jpg",
      title: "Cooking Made Easy",
      contactName: "Arvind Kumar",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "011-33445599",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "New Delhi, India",
      dealing: "Cooking ranges, kitchen appliances"
    },
    {
      id: 20,
      brandname: "Surya",
      name: "Surya Roshni Ltd",
      image: "surya.jpg",
      title: "Lighting & Appliances",
      contactName: "Manish Sharma",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "011-22334477",
      email: "info@suryaroshnilimited.com",
      website: "www.suryaroshnilimited.com",
      address: "New Delhi, India",
      dealing: "Lighting, fans, appliances"
    },
    {
      id: 21,
      brandname: "Syska",
      name: "Syska LED Lights",
      image: "syska.jpg",
      title: "Smart LED & Appliances",
      contactName: "Rohit Malhotra",
      mobile: "9876543221",
      whatsapp: "9876543221",
      landline: "020-33445566",
      email: "support@syska.com",
      website: "www.syska.com",
      address: "Pune, India",
      dealing: "LED lighting, home appliances"
    },
    {
      id: 22,
      brandname: "Usha",
      name: "Usha International",
      image: "usha.jpg",
      title: "Trusted Appliances",
      contactName: "Geeta Nair",
      mobile: "9876543222",
      whatsapp: "9876543222",
      landline: "011-44556688",
      email: "support@usha.com",
      website: "www.usha.com",
      address: "New Delhi, India",
      dealing: "Fans, appliances, sewing machines"
    },
    {
      id: 23,
      brandname: "Wipro",
      name: "Wipro Consumer Care",
      image: "wipro.jpg",
      title: "Smart Lighting & Appliances",
      contactName: "Aditya Rao",
      mobile: "9876543223",
      whatsapp: "9876543223",
      landline: "080-55667788",
      email: "support@wipro.com",
      website: "www.wipro.com",
      address: "Bengaluru, India",
      dealing: "Lighting, electronics, appliances"
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
