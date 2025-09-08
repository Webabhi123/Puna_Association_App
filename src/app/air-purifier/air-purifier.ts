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
  selector: 'app-air-purifier',
  imports: [CommonModule, FormsModule],
  templateUrl: './air-purifier.html',
  styleUrl: './air-purifier.css'
})
export class AirPurifier {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Air Oasis",
      name: "Air Oasis Purifiers",
      image: "airoasis.png",
      title: "Air Purification Systems",
      contactName: "Anil Sharma",
      mobile: "9876543201",
      whatsapp: "9876543201",
      landline: "020-1234567",
      email: "info@airoasis.com",
      website: "www.airoasis.com",
      address: "Pune, Maharashtra",
      dealing: "Air Purifiers and Filters"
    },
    {
      id: 2,
      brandname: "Atlanta Healthcare",
      name: "Atlanta Healthcare Solutions",
      image: "atlanta.png",
      title: "Healthcare Air Purifiers",
      contactName: "Ravi Mehta",
      mobile: "9876543202",
      whatsapp: "9876543202",
      landline: "022-7654321",
      email: "sales@atlantahealthcare.com",
      website: "www.atlantahealthcare.com",
      address: "Mumbai, Maharashtra",
      dealing: "Air Purification and Healthcare Solutions"
    },
    {
      id: 3,
      brandname: "Blue Star",
      name: "Blue Star Air Purifiers",
      image: "bluestar.png",
      title: "Trusted Air Solutions",
      contactName: "Suresh Patil",
      mobile: "9876543203",
      whatsapp: "9876543203",
      landline: "011-4567890",
      email: "support@bluestar.com",
      website: "www.bluestar.com",
      address: "New Delhi",
      dealing: "Air Purifiers, Cooling & Ventilation"
    },
    {
      id: 4,
      brandname: "Blueair",
      name: "Blueair India",
      image: "blueair.png",
      title: "Premium Air Cleaners",
      contactName: "Vikas Rao",
      mobile: "9876543204",
      whatsapp: "9876543204",
      landline: "080-2345678",
      email: "contact@blueair.com",
      website: "www.blueair.com",
      address: "Bangalore, Karnataka",
      dealing: "Premium Air Purifiers"
    },
    {
      id: 5,
      brandname: "CRUSADERS",
      name: "Crusaders Technologies",
      image: "crusaders.png",
      title: "Air Filtration Experts",
      contactName: "Rahul Kapoor",
      mobile: "9876543205",
      whatsapp: "9876543205",
      landline: "033-8765432",
      email: "info@crusaders.in",
      website: "www.crusaders.in",
      address: "Kolkata, West Bengal",
      dealing: "Air Purification & Filtration"
    },
    {
      id: 6,
      brandname: "Daikin",
      name: "Daikin Air Purifiers",
      image: "daikin.png",
      title: "Advanced Air Technology",
      contactName: "Arun Nair",
      mobile: "9876543206",
      whatsapp: "9876543206",
      landline: "044-2345678",
      email: "daikin@daikinindia.com",
      website: "www.daikinindia.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Air Conditioners & Purifiers"
    },
    {
      id: 7,
      brandname: "Dyson",
      name: "Dyson India",
      image: "dyson.png",
      title: "Smart Air Purifiers",
      contactName: "Neha Singh",
      mobile: "9876543207",
      whatsapp: "9876543207",
      landline: "080-9876543",
      email: "dyson@dyson.in",
      website: "www.dyson.in",
      address: "Bangalore, Karnataka",
      dealing: "Premium Smart Air Purifiers"
    },
    {
      id: 8,
      brandname: "Electrolux",
      name: "Electrolux Appliances",
      image: "electrolux.png",
      title: "Clean Air Solutions",
      contactName: "Manoj Gupta",
      mobile: "9876543208",
      whatsapp: "9876543208",
      landline: "011-7654321",
      email: "info@electrolux.in",
      website: "www.electrolux.in",
      address: "New Delhi",
      dealing: "Home Appliances & Purifiers"
    },
    {
      id: 9,
      brandname: "Eureka Forbes",
      name: "Eureka Forbes Limited",
      image: "eurekaforbes.png",
      title: "Clean Air, Clean Water",
      contactName: "Rajesh Iyer",
      mobile: "9876543209",
      whatsapp: "9876543209",
      landline: "022-3456789",
      email: "support@eurekaforbes.com",
      website: "www.eurekaforbes.com",
      address: "Mumbai, Maharashtra",
      dealing: "Air & Water Purification Systems"
    },
    {
      id: 10,
      brandname: "Godrej",
      name: "Godrej Appliances",
      image: "godrej.png",
      title: "Trusted Indian Brand",
      contactName: "Prakash Desai",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-1234987",
      email: "info@godrej.com",
      website: "www.godrej.com",
      address: "Mumbai, Maharashtra",
      dealing: "Appliances & Air Purifiers"
    },
    {
      id: 11,
      brandname: "Honeywell",
      name: "Honeywell India",
      image: "honeywell.png",
      title: "Smart Air Solutions",
      contactName: "Amit Malhotra",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "011-2223456",
      email: "info@honeywell.com",
      website: "www.honeywell.com",
      address: "Gurgaon, Haryana",
      dealing: "Air Purifiers & Automation"
    },
    {
      id: 12,
      brandname: "Kent",
      name: "Kent RO Systems",
      image: "kent.png",
      title: "Pure Air & Water",
      contactName: "Nitin Bansal",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "011-6543210",
      email: "service@kent.co.in",
      website: "www.kent.co.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Air & Water Purifiers"
    },
    {
      id: 13,
      brandname: "Kores",
      name: "Kores India Ltd",
      image: "kores.png",
      title: "Office & Air Solutions",
      contactName: "Sunil Verma",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-7651234",
      email: "info@kores.in",
      website: "www.kores.in",
      address: "Mumbai, Maharashtra",
      dealing: "Office Supplies & Air Purifiers"
    },
    {
      id: 14,
      brandname: "LG",
      name: "LG Electronics",
      image: "lg.png",
      title: "Innovative Air Solutions",
      contactName: "Pooja Sharma",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "080-6549871",
      email: "support@lg.com",
      website: "www.lg.com/in",
      address: "Bangalore, Karnataka",
      dealing: "Electronics & Air Purifiers"
    },
    {
      id: 15,
      brandname: "Livpure",
      name: "Livpure India",
      image: "livpure.png",
      title: "Pure Living",
      contactName: "Ajay Singh",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "011-8765432",
      email: "care@livpure.com",
      website: "www.livpure.com",
      address: "New Delhi",
      dealing: "Air & Water Purifiers"
    },
    {
      id: 16,
      brandname: "Mi",
      name: "Mi Air Purifiers",
      image: "mi.png",
      title: "Smart Purification",
      contactName: "Karan Patel",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "080-4561237",
      email: "mi@xiaomi.in",
      website: "www.mi.com/in",
      address: "Bangalore, Karnataka",
      dealing: "Smart Air Purifiers"
    },
    {
      id: 17,
      brandname: "Panasonic",
      name: "Panasonic India",
      image: "panasonic.png",
      title: "Smart Living Solutions",
      contactName: "Ramesh Kumar",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "022-4569873",
      email: "panasonic@in.panasonic.com",
      website: "www.panasonic.com/in",
      address: "Mumbai, Maharashtra",
      dealing: "Electronics & Purifiers"
    },
    {
      id: 18,
      brandname: "Philips",
      name: "Philips India",
      image: "philips.png",
      title: "Health & Air Purification",
      contactName: "Sanjay Gupta",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "011-3334567",
      email: "care@philips.com",
      website: "www.philips.co.in",
      address: "New Delhi",
      dealing: "Healthcare & Air Purifiers"
    },
    {
      id: 19,
      brandname: "Samsung",
      name: "Samsung India",
      image: "samsung.png",
      title: "Smart Living Technology",
      contactName: "Deepak Verma",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "080-6543219",
      email: "support@samsung.com",
      website: "www.samsung.com/in",
      address: "Bangalore, Karnataka",
      dealing: "Electronics & Air Purifiers"
    },
    {
      id: 20,
      brandname: "Sharp",
      name: "Sharp India",
      image: "sharp.png",
      title: "Air & Living Solutions",
      contactName: "Vishal Thakur",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "022-7896541",
      email: "info@sharp.in",
      website: "www.sharp.in",
      address: "Mumbai, Maharashtra",
      dealing: "Electronics & Air Purifiers"
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
