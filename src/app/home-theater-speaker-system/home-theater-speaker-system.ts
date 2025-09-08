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
  selector: 'app-home-theater-speaker-system',
  imports: [CommonModule,FormsModule],
  templateUrl: './home-theater-speaker-system.html',
  styleUrl: './home-theater-speaker-system.css'
})
export class HomeTheaterSpeakerSystem {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bose',
      name: 'Bose',
      image: 'assets/brands-logo/bose-logo.png',
      title: 'Bose Corporation',
      contactName: 'Rajesh Verma',
      mobile: '9876543201',
      whatsapp: '9876543201',
      landline: '020-1111222',
      email: 'info@bose.com',
      website: 'www.bose.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Audio systems and speakers'
    },
    {
      id: 2,
      brandname: 'Clarion',
      name: 'Clarion',
      image: 'assets/brands-logo/clarion-logo.png',
      title: 'Clarion Electronics',
      contactName: 'Anita Sharma',
      mobile: '9876543202',
      whatsapp: '9876543202',
      landline: '020-1111223',
      email: 'contact@clarion.com',
      website: 'www.clarion.com',
      address: 'Delhi, India',
      dealing: 'Car audio and navigation systems'
    },
    {
      id: 3,
      brandname: 'Creative',
      name: 'Creative',
      image: 'assets/brands-logo/creative-logo.png',
      title: 'Creative Technology Ltd.',
      contactName: 'Suresh Gupta',
      mobile: '9876543203',
      whatsapp: '9876543203',
      landline: '020-1111224',
      email: 'support@creative.com',
      website: 'www.creative.com',
      address: 'Bengaluru, Karnataka',
      dealing: 'Multimedia products and sound cards'
    },
    {
      id: 4,
      brandname: 'Epson',
      name: 'Epson',
      image: 'assets/brands-logo/epson-logo.png',
      title: 'Epson India',
      contactName: 'Priya Mehta',
      mobile: '9876543204',
      whatsapp: '9876543204',
      landline: '020-1111225',
      email: 'info@epson.in',
      website: 'www.epson.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Printers and projectors'
    },
    {
      id: 5,
      brandname: 'F&D',
      name: 'F&D',
      image: 'assets/brands-logo/fnd-logo.png',
      title: 'F&D Audio Systems',
      contactName: 'Vikas Nair',
      mobile: '9876543205',
      whatsapp: '9876543205',
      landline: '020-1111226',
      email: 'sales@fnd.com',
      website: 'www.fnd.com',
      address: 'Pune, Maharashtra',
      dealing: 'Speakers and audio devices'
    },
    {
      id: 6,
      brandname: 'iBall',
      name: 'iBall',
      image: 'assets/brands-logo/iball-logo.png',
      title: 'iBall India',
      contactName: 'Neha Kapoor',
      mobile: '9876543206',
      whatsapp: '9876543206',
      landline: '020-1111227',
      email: 'info@iball.co.in',
      website: 'www.iball.co.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Electronics and computer peripherals'
    },
    {
      id: 7,
      brandname: 'JBL',
      name: 'JBL',
      image: 'assets/brands-logo/jbl-logo.png',
      title: 'JBL Harman',
      contactName: 'Aditya Rao',
      mobile: '9876543207',
      whatsapp: '9876543207',
      landline: '020-1111228',
      email: 'support@jbl.com',
      website: 'www.jbl.com',
      address: 'Delhi, India',
      dealing: 'Speakers, headphones, and audio systems'
    },
    {
      id: 8,
      brandname: 'Klipsch',
      name: 'Klipsch',
      image: 'assets/brands-logo/klipsch-logo.png',
      title: 'Klipsch Audio',
      contactName: 'Manoj Kulkarni',
      mobile: '9876543208',
      whatsapp: '9876543208',
      landline: '020-1111229',
      email: 'contact@klipsch.com',
      website: 'www.klipsch.com',
      address: 'Hyderabad, Telangana',
      dealing: 'High-end audio equipment'
    },
    {
      id: 9,
      brandname: 'Onkyo',
      name: 'Onkyo',
      image: 'assets/brands-logo/onkyo-logo.png',
      title: 'Onkyo Corporation',
      contactName: 'Sneha Joshi',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111230',
      email: 'support@onkyo.com',
      website: 'www.onkyo.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Audio and home theater systems'
    },
    {
      id: 10,
      brandname: 'Pioneer',
      name: 'Pioneer',
      image: 'assets/brands-logo/pioneer-logo.png',
      title: 'Pioneer India',
      contactName: 'Rohit Deshmukh',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1111231',
      email: 'info@pioneer.in',
      website: 'www.pioneer.in',
      address: 'Pune, Maharashtra',
      dealing: 'Car audio and DJ equipment'
    },
    {
      id: 11,
      brandname: 'Yamaha',
      name: 'Yamaha',
      image: 'assets/brands-logo/yamaha-logo.png',
      title: 'Yamaha Corporation',
      contactName: 'Kiran Patil',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-1111232',
      email: 'support@yamaha.com',
      website: 'www.yamaha.com',
      address: 'Delhi, India',
      dealing: 'Musical instruments and audio equipment'
    },
    {
      id: 12,
      brandname: 'Zebronics',
      name: 'Zebronics',
      image: 'assets/brands-logo/zebronics-logo.png',
      title: 'Zebronics India',
      contactName: 'Aarti Iyer',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-1111233',
      email: 'info@zebronics.com',
      website: 'www.zebronics.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Speakers, computer accessories, and peripherals'
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
