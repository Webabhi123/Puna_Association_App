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
  selector: 'app-table-fan',
  imports: [CommonModule, FormsModule],
  templateUrl: './table-fan.html',
  styleUrl: './table-fan.css'
})
export class TableFan {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Almonard',
      name: 'Almonard Fans Pvt Ltd',
      image: 'almonard.png',
      title: 'Fans & Ventilation',
      contactName: 'Ramesh Kumar',
      mobile: '9811100011',
      whatsapp: '9811100011',
      landline: '01122334455',
      email: 'info@almonard.in',
      website: 'www.almonard.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Ceiling Fans, Exhaust Fans'
    },
    {
      id: 2,
      brandname: 'Anchor',
      name: 'Anchor Electricals Pvt Ltd',
      image: 'anchor.png',
      title: 'Electrical Solutions',
      contactName: 'Priya Mehta',
      mobile: '9811122233',
      whatsapp: '9811122233',
      landline: '02233445566',
      email: 'support@anchor.in',
      website: 'www.anchor-world.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, Fans, Wires'
    },
    {
      id: 3,
      brandname: 'Bajaj',
      name: 'Bajaj Electricals Ltd',
      image: 'bajaj.png',
      title: 'Appliances & Fans',
      contactName: 'Rohit Sharma',
      mobile: '9811133344',
      whatsapp: '9811133344',
      landline: '02244556677',
      email: 'helpdesk@bajajelectricals.com',
      website: 'www.bajajelectricals.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lighting, Appliances'
    },
    {
      id: 4,
      brandname: 'Cinni',
      name: 'Cinni Electricals Ltd',
      image: 'cinni.png',
      title: 'Fans & Appliances',
      contactName: 'Deepa Nair',
      mobile: '9811144455',
      whatsapp: '9811144455',
      landline: '03355667788',
      email: 'contact@cinni.in',
      website: 'www.cinni.in',
      address: 'Kolkata, West Bengal',
      dealing: 'Ceiling Fans, Pedestal Fans'
    },
    {
      id: 5,
      brandname: 'Crompton',
      name: 'Crompton Greaves Consumer',
      image: 'crompton.png',
      title: 'Fans & Lighting',
      contactName: 'Anil Kapoor',
      mobile: '9811155566',
      whatsapp: '9811155566',
      landline: '02266778899',
      email: 'service@cromptongreaves.com',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Ceiling Fans, LED Lighting'
    },
    {
      id: 6,
      brandname: 'Finolex',
      name: 'Finolex Cables Ltd',
      image: 'finolex.png',
      title: 'Electrical & Fans',
      contactName: 'Neha Joshi',
      mobile: '9811166677',
      whatsapp: '9811166677',
      landline: '02077889900',
      email: 'support@finolex.com',
      website: 'www.finolex.com',
      address: 'Pune, Maharashtra',
      dealing: 'Fans, Switches, Wires'
    },
    {
      id: 7,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electricals & Fans',
      contactName: 'Rajesh Gupta',
      mobile: '9811177788',
      whatsapp: '9811177788',
      landline: '01204567890',
      email: 'care@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Fans, Switches, Lighting'
    },
    {
      id: 8,
      brandname: 'Khaitan',
      name: 'Khaitan Electricals Ltd',
      image: 'khaitan.png',
      title: 'Fans & Electricals',
      contactName: 'Sanjay Verma',
      mobile: '9811188899',
      whatsapp: '9811188899',
      landline: '03366778899',
      email: 'customercare@khaitan.com',
      website: 'www.khaitan.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Lights, Appliances'
    },
    {
      id: 9,
      brandname: 'Luminous',
      name: 'Luminous Power Technologies',
      image: 'luminous.png',
      title: 'Power & Fans',
      contactName: 'Vikas Arora',
      mobile: '9811199900',
      whatsapp: '9811199900',
      landline: '01206677888',
      email: 'info@luminousindia.com',
      website: 'www.luminousindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Inverters, Appliances'
    },
    {
      id: 10,
      brandname: 'Orient',
      name: 'Orient Electric Ltd',
      image: 'orient.png',
      title: 'Fans & Appliances',
      contactName: 'Kavita Sharma',
      mobile: '9811200011',
      whatsapp: '9811200011',
      landline: '01133445566',
      email: 'care@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'New Delhi',
      dealing: 'Ceiling Fans, Lighting, Kitchen Appliances'
    },
    {
      id: 11,
      brandname: 'Orpat',
      name: 'Orpat Group',
      image: 'orpat.png',
      title: 'Fans & Electricals',
      contactName: 'Mehul Patel',
      mobile: '9811211122',
      whatsapp: '9811211122',
      landline: '02657891234',
      email: 'service@orpatgroup.com',
      website: 'www.orpatgroup.com',
      address: 'Morbi, Gujarat',
      dealing: 'Fans, Switches, Small Appliances'
    },
    {
      id: 12,
      brandname: 'Polar',
      name: 'Polar Electricals',
      image: 'polar.png',
      title: 'Fans & Appliances',
      contactName: 'Amit Sinha',
      mobile: '9811222233',
      whatsapp: '9811222233',
      landline: '03344556677',
      email: 'support@polarindia.com',
      website: 'www.polarindia.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Ceiling Fans, Exhaust Fans'
    },
    {
      id: 13,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Electricals & Fans',
      contactName: 'Manish Sharma',
      mobile: '9811233344',
      whatsapp: '9811233344',
      landline: '02277889911',
      email: 'info@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Switches, Cables'
    },
    {
      id: 14,
      brandname: 'Surya',
      name: 'Surya Roshni Ltd',
      image: 'surya.png',
      title: 'Fans & Lighting',
      contactName: 'Vineet Gupta',
      mobile: '9811244455',
      whatsapp: '9811244455',
      landline: '01188990011',
      email: 'care@suryaroshniltd.com',
      website: 'www.suryaroshniltd.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting Products'
    },
    {
      id: 15,
      brandname: 'Toofan',
      name: 'Toofan Fans Pvt Ltd',
      image: 'toofan.png',
      title: 'Fans & Cooling',
      contactName: 'Sunita Yadav',
      mobile: '9811255566',
      whatsapp: '9811255566',
      landline: '07977889922',
      email: 'info@toofanfans.com',
      website: 'www.toofanfans.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Ceiling Fans, Pedestal Fans'
    },
    {
      id: 16,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Fans & Appliances',
      contactName: 'Pankaj Bansal',
      mobile: '9811266677',
      whatsapp: '9811266677',
      landline: '01122334499',
      email: 'care@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Sewing Machines, Appliances'
    },
    {
      id: 17,
      brandname: 'V-Guard',
      name: 'V-Guard Industries Ltd',
      image: 'vguard.png',
      title: 'Fans & Electricals',
      contactName: 'Arun Nair',
      mobile: '9811277788',
      whatsapp: '9811277788',
      landline: '04846778899',
      email: 'support@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Fans, Inverters, Pumps'
    }    
    // Add more brands as needed
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
