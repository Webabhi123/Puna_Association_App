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
  selector: 'app-tv',
  imports: [CommonModule, FormsModule],
  templateUrl: './tv.html',
  styleUrl: './tv.css'
})
export class Tv {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'Aiwa',
        name: 'Aiwa',
        image: 'assets/brands-logo/aiwa.png',
        title: 'Aiwa Televisions',
        contactName: 'Rajiv Menon',
        mobile: '9876512001',
        whatsapp: '9876512001',
        landline: '022-4100101',
        email: 'info@aiwaelectronics.com',
        website: 'www.aiwaelectronics.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'LED TVs and Smart TVs'
      },
      {
        id: 2,
        brandname: 'Akai',
        name: 'Akai',
        image: 'assets/brands-logo/akai.png',
        title: 'Akai LED TVs',
        contactName: 'Sanjay Patel',
        mobile: '9876512002',
        whatsapp: '9876512002',
        landline: '011-4001102',
        email: 'support@akaitelevision.com',
        website: 'www.akaitelevision.com',
        address: 'Delhi, India',
        dealing: 'LED TVs, audio systems'
      },
      {
        id: 3,
        brandname: 'AOC',
        name: 'AOC',
        image: 'assets/brands-logo/aoc.png',
        title: 'AOC Televisions',
        contactName: 'Nikhil Sharma',
        mobile: '9876512003',
        whatsapp: '9876512003',
        landline: '033-4100103',
        email: 'sales@aocelectronics.com',
        website: 'www.aocelectronics.com',
        address: 'Kolkata, West Bengal',
        dealing: 'Smart TVs and Monitors'
      },
      {
        id: 4,
        brandname: 'Bush',
        name: 'Bush',
        image: 'assets/brands-logo/bush.png',
        title: 'Bush TVs',
        contactName: 'Amit Verma',
        mobile: '9876512004',
        whatsapp: '9876512004',
        landline: '020-4001104',
        email: 'contact@bushindia.com',
        website: 'www.bushindia.com',
        address: 'Pune, Maharashtra',
        dealing: 'Affordable LED TVs'
      },
      {
        id: 5,
        brandname: 'Ego Vision',
        name: 'Ego Vision',
        image: 'assets/brands-logo/egovision.png',
        title: 'Ego Vision Electronics',
        contactName: 'Deepak Joshi',
        mobile: '9876512005',
        whatsapp: '9876512005',
        landline: '044-4100105',
        email: 'info@egovision.com',
        website: 'www.egovision.com',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Smart TVs and entertainment systems'
      },
      {
        id: 6,
        brandname: 'Hisense',
        name: 'Hisense',
        image: 'assets/brands-logo/hisense.png',
        title: 'Hisense Televisions',
        contactName: 'Manoj Desai',
        mobile: '9876512006',
        whatsapp: '9876512006',
        landline: '080-4001106',
        email: 'support@hisenseindia.com',
        website: 'www.hisenseindia.com',
        address: 'Bengaluru, Karnataka',
        dealing: '4K Smart TVs, QLED TVs'
      },
      {
        id: 7,
        brandname: 'Hitachi',
        name: 'Hitachi',
        image: 'assets/brands-logo/hitachi.png',
        title: 'Hitachi TVs',
        contactName: 'Rohit Malhotra',
        mobile: '9876512007',
        whatsapp: '9876512007',
        landline: '079-4100107',
        email: 'tv@hitachiindia.com',
        website: 'www.hitachiindia.com',
        address: 'Ahmedabad, Gujarat',
        dealing: 'LED TVs and appliances'
      },
      {
        id: 8,
        brandname: 'Kodak',
        name: 'Kodak',
        image: 'assets/brands-logo/kodak.png',
        title: 'Kodak Smart TVs',
        contactName: 'Arjun Rao',
        mobile: '9876512008',
        whatsapp: '9876512008',
        landline: '040-4100108',
        email: 'sales@kodaktv.com',
        website: 'www.kodaktv.com',
        address: 'Hyderabad, Telangana',
        dealing: 'Smart TVs and Android TVs'
      },
      {
        id: 9,
        brandname: 'LG',
        name: 'LG',
        image: 'assets/brands-logo/lg.png',
        title: 'LG Televisions',
        contactName: 'Suresh Nair',
        mobile: '9876512009',
        whatsapp: '9876512009',
        landline: '022-4001109',
        email: 'support@lgindia.com',
        website: 'www.lg.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'LED, OLED, NanoCell TVs'
      },
      {
        id: 10,
        brandname: 'Micromax',
        name: 'Micromax',
        image: 'assets/brands-logo/micromax.png',
        title: 'Micromax TVs',
        contactName: 'Vivek Agarwal',
        mobile: '9876512010',
        whatsapp: '9876512010',
        landline: '011-4100110',
        email: 'info@micromaxinfo.com',
        website: 'www.micromaxinfo.com',
        address: 'Delhi, India',
        dealing: 'Budget Smart TVs'
      },
      {
        id: 11,
        brandname: 'Morgan',
        name: 'Morgan',
        image: 'assets/brands-logo/morgan.png',
        title: 'Morgan Electronics',
        contactName: 'Harish Singh',
        mobile: '9876512011',
        whatsapp: '9876512011',
        landline: '033-4001111',
        email: 'sales@morganindia.com',
        website: 'www.morganindia.com',
        address: 'Kolkata, West Bengal',
        dealing: 'Televisions and home appliances'
      },
      {
        id: 12,
        brandname: 'OnePlus',
        name: 'OnePlus',
        image: 'assets/brands-logo/oneplus.png',
        title: 'OnePlus TVs',
        contactName: 'Ankit Sharma',
        mobile: '9876512012',
        whatsapp: '9876512012',
        landline: '020-4001112',
        email: 'tv@oneplus.com',
        website: 'www.oneplus.in',
        address: 'Pune, Maharashtra',
        dealing: 'Premium Smart TVs'
      },
      {
        id: 13,
        brandname: 'Realme',
        name: 'Realme',
        image: 'assets/brands-logo/realme.png',
        title: 'Realme Televisions',
        contactName: 'Karan Bhatia',
        mobile: '9876512013',
        whatsapp: '9876512013',
        landline: '044-4001113',
        email: 'info@realme.com',
        website: 'www.realme.com/in',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Affordable Smart TVs'
      },
      {
        id: 14,
        brandname: 'Reliance',
        name: 'Reliance',
        image: 'assets/brands-logo/reliance.png',
        title: 'Reliance Digital TVs',
        contactName: 'Aakash Jain',
        mobile: '9876512014',
        whatsapp: '9876512014',
        landline: '022-4001114',
        email: 'support@reliancedigital.com',
        website: 'www.reliancedigital.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Electronics and Smart TVs'
      },
      {
        id: 15,
        brandname: 'Redmi',
        name: 'Redmi',
        image: 'assets/brands-logo/redmi.png',
        title: 'Redmi Smart TVs',
        contactName: 'Prashant Kumar',
        mobile: '9876512015',
        whatsapp: '9876512015',
        landline: '011-4001115',
        email: 'tv@redmi.com',
        website: 'www.mi.com/in',
        address: 'Delhi, India',
        dealing: 'Smart TVs by Xiaomi'
      },
      {
        id: 16,
        brandname: 'Sharp',
        name: 'Sharp',
        image: 'assets/brands-logo/sharp.png',
        title: 'Sharp Televisions',
        contactName: 'Satish Pillai',
        mobile: '9876512016',
        whatsapp: '9876512016',
        landline: '080-4001116',
        email: 'support@sharpindia.com',
        website: 'www.sharpindia.com',
        address: 'Bengaluru, Karnataka',
        dealing: 'LED and Smart TVs'
      },
      {
        id: 17,
        brandname: 'Sky',
        name: 'Sky',
        image: 'assets/brands-logo/sky.png',
        title: 'Sky Televisions',
        contactName: 'Ajay Gupta',
        mobile: '9876512017',
        whatsapp: '9876512017',
        landline: '040-4001117',
        email: 'info@skyindia.com',
        website: 'www.skyindia.com',
        address: 'Hyderabad, Telangana',
        dealing: 'Smart and LED TVs'
      },
      {
        id: 18,
        brandname: 'T Series',
        name: 'T Series',
        image: 'assets/brands-logo/tseries.png',
        title: 'T Series Televisions',
        contactName: 'Rakesh Kumar',
        mobile: '9876512018',
        whatsapp: '9876512018',
        landline: '011-4001118',
        email: 'support@tseriesindia.com',
        website: 'www.tseriesindia.com',
        address: 'Noida, Uttar Pradesh',
        dealing: 'LED TVs and music systems'
      },
      {
        id: 19,
        brandname: 'Vision',
        name: 'Vision',
        image: 'assets/brands-logo/vision.png',
        title: 'Vision Electronics',
        contactName: 'Gopal Mishra',
        mobile: '9876512019',
        whatsapp: '9876512019',
        landline: '033-4001119',
        email: 'sales@visionindia.com',
        website: 'www.visionindia.com',
        address: 'Kolkata, West Bengal',
        dealing: 'Televisions and consumer electronics'
      },
      {
        id: 20,
        brandname: 'Weston',
        name: 'Weston',
        image: 'assets/brands-logo/weston.png',
        title: 'Weston Televisions',
        contactName: 'Harendra Yadav',
        mobile: '9876512020',
        whatsapp: '9876512020',
        landline: '022-4001120',
        email: 'info@westonindia.com',
        website: 'www.westonindia.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'LED TVs and electronics'
      },
      {
        id: 21,
        brandname: 'Wybor',
        name: 'Wybor',
        image: 'assets/brands-logo/wybor.png',
        title: 'Wybor Electronics',
        contactName: 'Ashok Prasad',
        mobile: '9876512021',
        whatsapp: '9876512021',
        landline: '020-4001121',
        email: 'support@wybor.com',
        website: 'www.wybor.com',
        address: 'Pune, Maharashtra',
        dealing: 'Smart TVs and consumer appliances'
      },
      {
        id: 22,
        brandname: 'Zebronics',
        name: 'Zebronics',
        image: 'assets/brands-logo/zebronics.png',
        title: 'Zebronics TVs',
        contactName: 'Naveen Reddy',
        mobile: '9876512022',
        whatsapp: '9876512022',
        landline: '044-4001122',
        email: 'tv@zebronics.com',
        website: 'www.zebronics.com',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Smart TVs, audio systems'
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
