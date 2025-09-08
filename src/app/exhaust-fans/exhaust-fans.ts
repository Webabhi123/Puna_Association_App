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
  selector: 'app-exhaust-fans',
  imports: [CommonModule, FormsModule],
  templateUrl: './exhaust-fans.html',
  styleUrl: './exhaust-fans.css'
})
export class ExhaustFans {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Almonard',
      name: 'Almonard Pvt Ltd',
      image: 'almonard.png',
      title: 'Fans & Appliances',
      contactName: 'Rajesh Sharma',
      mobile: '9811100001',
      whatsapp: '9811100001',
      landline: '0111000001',
      email: 'support@almonard.in',
      website: 'www.almonard.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Exhaust Fans, Pedestal Fans'
    },
    {
      id: 2,
      brandname: 'Anchor',
      name: 'Anchor Electricals Pvt Ltd',
      image: 'anchor.png',
      title: 'Electricals & Switches',
      contactName: 'Pooja Mehta',
      mobile: '9811100002',
      whatsapp: '9811100002',
      landline: '0111000002',
      email: 'info@anchor.in',
      website: 'www.anchor.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, Fans, Lighting'
    },
    {
      id: 3,
      brandname: 'Atomberg',
      name: 'Atomberg Technologies Pvt Ltd',
      image: 'atomberg.png',
      title: 'Energy Efficient Fans',
      contactName: 'Neha Verma',
      mobile: '9811100003',
      whatsapp: '9811100003',
      landline: '0111000003',
      email: 'care@atomberg.in',
      website: 'www.atomberg.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Ceiling Fans, Smart Fans'
    },
    {
      id: 4,
      brandname: 'Bajaj',
      name: 'Bajaj Electricals Ltd',
      image: 'bajaj.png',
      title: 'Home Appliances',
      contactName: 'Ramesh Iyer',
      mobile: '9811100004',
      whatsapp: '9811100004',
      landline: '0111000004',
      email: 'customercare@bajajelectricals.com',
      website: 'www.bajajelectricals.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Kitchen Appliances, Lighting'
    },
    {
      id: 5,
      brandname: 'CATA',
      name: 'CATA Appliances Pvt Ltd',
      image: 'cata.png',
      title: 'Home Appliances',
      contactName: 'Sanjay Patel',
      mobile: '9811100005',
      whatsapp: '9811100005',
      landline: '0111000005',
      email: 'support@cata.in',
      website: 'www.cata.in',
      address: 'New Delhi',
      dealing: 'Fans, Exhaust Systems'
    },
    {
      id: 6,
      brandname: 'Crompton',
      name: 'Crompton Greaves Consumer Electricals Ltd',
      image: 'crompton.png',
      title: 'Electricals & Appliances',
      contactName: 'Vikas Jain',
      mobile: '9811100006',
      whatsapp: '9811100006',
      landline: '0111000006',
      email: 'customercare@crompton.co.in',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lighting, Pumps'
    },
    {
      id: 7,
      brandname: 'Finolex',
      name: 'Finolex Cables Ltd',
      image: 'finolex.png',
      title: 'Wires & Electricals',
      contactName: 'Amit Sharma',
      mobile: '9811100007',
      whatsapp: '9811100007',
      landline: '0111000007',
      email: 'support@finolex.com',
      website: 'www.finolex.com',
      address: 'Pune, Maharashtra',
      dealing: 'Cables, Switches, Fans'
    },
    {
      id: 8,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electrical Goods',
      contactName: 'Nikita Agarwal',
      mobile: '9811100008',
      whatsapp: '9811100008',
      landline: '0111000008',
      email: 'care@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Fans, Switches, Lighting, Appliances'
    },
    {
      id: 9,
      brandname: 'Khaitan',
      name: 'Khaitan Electricals Ltd',
      image: 'khaitan.png',
      title: 'Fans & Appliances',
      contactName: 'Deepak Khaitan',
      mobile: '9811100009',
      whatsapp: '9811100009',
      landline: '0111000009',
      email: 'info@khaitan.com',
      website: 'www.khaitan.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Kitchen Appliances'
    },
    {
      id: 10,
      brandname: 'Luminous',
      name: 'Luminous Power Technologies Pvt Ltd',
      image: 'luminous.png',
      title: 'Power & Appliances',
      contactName: 'Swati Singh',
      mobile: '9811100010',
      whatsapp: '9811100010',
      landline: '0111000010',
      email: 'support@luminousindia.com',
      website: 'www.luminousindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Inverters, Lighting'
    },
    {
      id: 11,
      brandname: 'Orient',
      name: 'Orient Electric Ltd',
      image: 'orient.png',
      title: 'Home Appliances',
      contactName: 'Anuj Kapoor',
      mobile: '9811100011',
      whatsapp: '9811100011',
      landline: '0111000011',
      email: 'customer.connect@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting, Switchgear'
    },
    {
      id: 12,
      brandname: 'Orpat',
      name: 'Orpat Group',
      image: 'orpat.png',
      title: 'Appliances & Electronics',
      contactName: 'Ravi Patel',
      mobile: '9811100012',
      whatsapp: '9811100012',
      landline: '0111000012',
      email: 'support@orpatgroup.com',
      website: 'www.orpatgroup.com',
      address: 'Gujarat',
      dealing: 'Fans, Clocks, Electronics'
    },
    {
      id: 13,
      brandname: 'Polar',
      name: 'Polar Industries Ltd',
      image: 'polar.png',
      title: 'Fans & Electricals',
      contactName: 'Suman Das',
      mobile: '9811100013',
      whatsapp: '9811100013',
      landline: '0111000013',
      email: 'info@polarindia.com',
      website: 'www.polarindia.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Heaters, Kitchen Appliances'
    },
    {
      id: 14,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Electricals & Wires',
      contactName: 'Manish Tiwari',
      mobile: '9811100014',
      whatsapp: '9811100014',
      landline: '0111000014',
      email: 'customercare@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Cables, Fans, Switchgear'
    },
    {
      id: 15,
      brandname: 'Sameer',
      name: 'Sameer Appliances Pvt Ltd',
      image: 'sameer.png',
      title: 'Home Appliances',
      contactName: 'Alok Gupta',
      mobile: '9811100015',
      whatsapp: '9811100015',
      landline: '0111000015',
      email: 'support@sameer.in',
      website: 'www.sameer.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Pumps, Appliances'
    },
    {
      id: 16,
      brandname: 'Surya',
      name: 'Surya Roshni Ltd',
      image: 'surya.png',
      title: 'Electricals & Appliances',
      contactName: 'Pawan Kumar',
      mobile: '9811100016',
      whatsapp: '9811100016',
      landline: '0111000016',
      email: 'support@suryaroshnilighting.com',
      website: 'www.suryaroshnilighting.com',
      address: 'New Delhi',
      dealing: 'Fans, Lighting, Appliances'
    },
    {
      id: 17,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Home Appliances',
      contactName: 'Rekha Sharma',
      mobile: '9811100017',
      whatsapp: '9811100017',
      landline: '0111000017',
      email: 'care@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Kitchen Appliances, Sewing Machines'
    },
    {
      id: 18,
      brandname: 'V Guard',
      name: 'V Guard Industries Ltd',
      image: 'vguard.png',
      title: 'Electronics & Appliances',
      contactName: 'Satish Menon',
      mobile: '9811100018',
      whatsapp: '9811100018',
      landline: '0111000018',
      email: 'support@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Stabilizers, Fans, Appliances'
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
