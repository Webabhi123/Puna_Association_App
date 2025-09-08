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
  selector: 'app-submersible-pumps',
  imports: [CommonModule,FormsModule],
  templateUrl: './submersible-pumps.html',
  styleUrl: './submersible-pumps.css'
})
export class SubmersiblePumps {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'AnGel',
      name: 'AnGel',
      image: 'assets/brands-logo/angel-logo.png',
      title: 'AnGel',
      contactName: 'Rohit Sharma',
      mobile: '987650001',
      whatsapp: '987650001',
      landline: '020-1111222',
      email: 'info@angel.com',
      website: 'www.angel.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and electrical products'
    },
    {
      id: 2,
      brandname: 'CRI',
      name: 'CRI',
      image: 'assets/brands-logo/cri-logo.png',
      title: 'CRI',
      contactName: 'Anita Desai',
      mobile: '987650002',
      whatsapp: '987650002',
      landline: '020-2222333',
      email: 'info@cripumps.com',
      website: 'www.cripumps.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and pumping systems'
    },
    {
      id: 3,
      brandname: 'Crompton',
      name: 'Crompton',
      image: 'assets/brands-logo/crompton-logo.png',
      title: 'Crompton',
      contactName: 'Suresh Patil',
      mobile: '987650003',
      whatsapp: '987650003',
      landline: '020-3333444',
      email: 'info@crompton.co.in',
      website: 'www.crompton.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Electrical and pumping solutions'
    },
    {
      id: 4,
      brandname: 'Deccan',
      name: 'Deccan',
      image: 'assets/brands-logo/deccan-logo.png',
      title: 'Deccan',
      contactName: 'Priya Nair',
      mobile: '987650004',
      whatsapp: '987650004',
      landline: '020-4444555',
      email: 'info@deccan.com',
      website: 'www.deccan.com',
      address: 'Hyderabad, Telangana',
      dealing: 'Pumps and industrial solutions'
    },
    {
      id: 5,
      brandname: 'DP',
      name: 'DP',
      image: 'assets/brands-logo/dp-logo.png',
      title: 'DP',
      contactName: 'Vikas Kulkarni',
      mobile: '987650005',
      whatsapp: '987650005',
      landline: '020-5555666',
      email: 'info@dp.com',
      website: 'www.dp.com',
      address: 'Delhi, India',
      dealing: 'Industrial pumping solutions'
    },
    {
      id: 6,
      brandname: 'Duke',
      name: 'Duke',
      image: 'assets/brands-logo/duke-logo.png',
      title: 'Duke',
      contactName: 'Amit Mehta',
      mobile: '987650006',
      whatsapp: '987650006',
      landline: '020-6666777',
      email: 'info@duke.com',
      website: 'www.duke.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Pumps and motors'
    },
    {
      id: 7,
      brandname: 'Falcon',
      name: 'Falcon',
      image: 'assets/brands-logo/falcon-logo.png',
      title: 'Falcon',
      contactName: 'Sneha Joshi',
      mobile: '987650007',
      whatsapp: '987650007',
      landline: '020-7777888',
      email: 'info@falcon.com',
      website: 'www.falcon.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Pumping and water solutions'
    },
    {
      id: 8,
      brandname: 'Havells',
      name: 'Havells',
      image: 'assets/brands-logo/havells-logo.png',
      title: 'Havells',
      contactName: 'Rajesh Verma',
      mobile: '987650008',
      whatsapp: '987650008',
      landline: '020-8888999',
      email: 'info@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Electricals and consumer products'
    },
    {
      id: 9,
      brandname: 'KSB',
      name: 'KSB',
      image: 'assets/brands-logo/ksb-logo.png',
      title: 'KSB',
      contactName: 'Sunita Rao',
      mobile: '987650009',
      whatsapp: '987650009',
      landline: '020-9999000',
      email: 'info@ksbpumps.com',
      website: 'www.ksbpumps.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and valves'
    },
    {
      id: 10,
      brandname: 'Kirloskar',
      name: 'Kirloskar',
      image: 'assets/brands-logo/kirloskar-logo.png',
      title: 'Kirloskar',
      contactName: 'Deepak Sharma',
      mobile: '987650010',
      whatsapp: '987650010',
      landline: '020-1010101',
      email: 'info@kirloskar.com',
      website: 'www.kirloskar.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and engines'
    },
    {
      id: 11,
      brandname: 'Lubi',
      name: 'Lubi',
      image: 'assets/brands-logo/lubi-logo.png',
      title: 'Lubi',
      contactName: 'Meena Iyer',
      mobile: '987650011',
      whatsapp: '987650011',
      landline: '020-1111223',
      email: 'info@lubipumps.com',
      website: 'www.lubipumps.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Pumps and motors'
    },
    {
      id: 12,
      brandname: 'MBH',
      name: 'MBH',
      image: 'assets/brands-logo/mbh-logo.png',
      title: 'MBH',
      contactName: 'Arun Gupta',
      mobile: '987650012',
      whatsapp: '987650012',
      landline: '020-1212121',
      email: 'info@mbh.com',
      website: 'www.mbh.com',
      address: 'Delhi, India',
      dealing: 'Pumping solutions'
    },
    {
      id: 13,
      brandname: 'Oswal Pumps',
      name: 'Oswal Pumps',
      image: 'assets/brands-logo/oswalpumps-logo.png',
      title: 'Oswal Pumps',
      contactName: 'Nikita Jain',
      mobile: '987650013',
      whatsapp: '987650013',
      landline: '020-1313131',
      email: 'info@oswalpumps.com',
      website: 'www.oswalpumps.com',
      address: 'Ludhiana, Punjab',
      dealing: 'Pumps and motors'
    },
    {
      id: 14,
      brandname: 'Texmo',
      name: 'Texmo',
      image: 'assets/brands-logo/texmo-logo.png',
      title: 'Texmo',
      contactName: 'Prakash Menon',
      mobile: '987650014',
      whatsapp: '987650014',
      landline: '020-1414141',
      email: 'info@texmo.com',
      website: 'www.texmo.com',
      address: 'Coimbatore, Tamil Nadu',
      dealing: 'Pumps and motors'
    },
    {
      id: 15,
      brandname: 'V-Guard',
      name: 'V-Guard',
      image: 'assets/brands-logo/v-guard-logo.png',
      title: 'V-Guard',
      contactName: 'Swati Singh',
      mobile: '987650015',
      whatsapp: '987650015',
      landline: '020-1515151',
      email: 'info@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Electricals and pumps'
    },
    {
      id: 16,
      brandname: 'Wilo',
      name: 'Wilo',
      image: 'assets/brands-logo/wilo-logo.png',
      title: 'Wilo',
      contactName: 'Ravi Shetty',
      mobile: '987650016',
      whatsapp: '987650016',
      landline: '020-1616161',
      email: 'info@wilo.com',
      website: 'www.wilo.com',
      address: 'Pune, Maharashtra',
      dealing: 'Pumps and pumping systems'
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
