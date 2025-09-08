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
  selector: 'app-hydraulic-pumps-motors',
  imports: [CommonModule,FormsModule],
  templateUrl: './hydraulic-pumps-motors.html',
  styleUrl: './hydraulic-pumps-motors.css'
})
export class HydraulicPumpsMotors {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Bosch',
      name: 'Bosch',
      image: 'assets/brands-logo/bosch-logo.png',
      title: 'Bosch',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1111111',
      email: 'info@bosch.com',
      website: 'www.bosch.com',
      address: 'Pune, Maharashtra',
      dealing: 'Industrial solutions and automation'
    },
    {
      id: 2,
      brandname: 'Bosch Rexroth',
      name: 'Bosch Rexroth',
      image: 'assets/brands-logo/boschrexroth-logo.png',
      title: 'Bosch Rexroth',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-2222222',
      email: 'info@boschrexroth.com',
      website: 'www.boschrexroth.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Drive and control solutions'
    },
    {
      id: 3,
      brandname: 'Danfoss',
      name: 'Danfoss',
      image: 'assets/brands-logo/danfoss-logo.png',
      title: 'Danfoss',
      contactName: 'Rahul Verma',
      mobile: '9876543212',
      whatsapp: '9876543212',
      landline: '020-3333333',
      email: 'info@danfoss.com',
      website: 'www.danfoss.com',
      address: 'Delhi, India',
      dealing: 'Hydraulics and cooling solutions'
    },
    {
      id: 4,
      brandname: 'Daikin',
      name: 'Daikin',
      image: 'assets/brands-logo/daikin-logo.png',
      title: 'Daikin',
      contactName: 'Anjali Mehta',
      mobile: '9876543213',
      whatsapp: '9876543213',
      landline: '020-4444444',
      email: 'info@daikin.com',
      website: 'www.daikin.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Air conditioning and cooling systems'
    },
    {
      id: 5,
      brandname: 'Denison',
      name: 'Denison',
      image: 'assets/brands-logo/denison-logo.png',
      title: 'Denison',
      contactName: 'Amit Kumar',
      mobile: '9876543214',
      whatsapp: '9876543214',
      landline: '020-5555555',
      email: 'info@denison.com',
      website: 'www.denison.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Hydraulic pumps and motors'
    },
    {
      id: 6,
      brandname: 'Dowty',
      name: 'Dowty',
      image: 'assets/brands-logo/dowty-logo.png',
      title: 'Dowty',
      contactName: 'Priya Shah',
      mobile: '9876543215',
      whatsapp: '9876543215',
      landline: '020-6666666',
      email: 'info@dowty.com',
      website: 'www.dowty.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Hydraulic components'
    },
    {
      id: 7,
      brandname: 'Eaton Vickers',
      name: 'Eaton Vickers',
      image: 'assets/brands-logo/eatonvickers-logo.png',
      title: 'Eaton Vickers',
      contactName: 'Vikas Sharma',
      mobile: '9876543216',
      whatsapp: '9876543216',
      landline: '020-7777777',
      email: 'info@eatonvickers.com',
      website: 'www.eatonvickers.com',
      address: 'Hyderabad, Telangana',
      dealing: 'Hydraulic pumps and valves'
    },
    {
      id: 8,
      brandname: 'Enerpac',
      name: 'Enerpac',
      image: 'assets/brands-logo/enerpac-logo.png',
      title: 'Enerpac',
      contactName: 'Ravi Iyer',
      mobile: '9876543217',
      whatsapp: '9876543217',
      landline: '020-8888888',
      email: 'info@enerpac.com',
      website: 'www.enerpac.com',
      address: 'Pune, Maharashtra',
      dealing: 'High-pressure hydraulic tools'
    },
    {
      id: 9,
      brandname: 'Hitachi',
      name: 'Hitachi',
      image: 'assets/brands-logo/hitachi-logo.png',
      title: 'Hitachi',
      contactName: 'Sunita Rao',
      mobile: '9876543218',
      whatsapp: '9876543218',
      landline: '020-9999999',
      email: 'info@hitachi.com',
      website: 'www.hitachi.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Industrial automation and systems'
    },
    {
      id: 10,
      brandname: 'Intermot',
      name: 'Intermot',
      image: 'assets/brands-logo/intermot-logo.png',
      title: 'Intermot',
      contactName: 'Akhil Nair',
      mobile: '9876543220',
      whatsapp: '9876543220',
      landline: '020-1010101',
      email: 'info@intermot.com',
      website: 'www.intermot.com',
      address: 'Delhi, India',
      dealing: 'Hydraulic motors'
    },
    {
      id: 11,
      brandname: 'JCB',
      name: 'JCB',
      image: 'assets/brands-logo/jcb-logo.png',
      title: 'JCB',
      contactName: 'Meena Kapoor',
      mobile: '9876543221',
      whatsapp: '9876543221',
      landline: '020-1212121',
      email: 'info@jcb.com',
      website: 'www.jcb.com',
      address: 'Faridabad, Haryana',
      dealing: 'Construction and hydraulic equipment'
    },
    {
      id: 12,
      brandname: 'JIC',
      name: 'JIC',
      image: 'assets/brands-logo/jic-logo.png',
      title: 'JIC',
      contactName: 'Arjun Singh',
      mobile: '9876543222',
      whatsapp: '9876543222',
      landline: '020-1313131',
      email: 'info@jic.com',
      website: 'www.jic.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Hydraulic and industrial solutions'
    },
    {
      id: 13,
      brandname: 'Kawasaki',
      name: 'Kawasaki',
      image: 'assets/brands-logo/kawasaki-logo.png',
      title: 'Kawasaki',
      contactName: 'Pooja Desai',
      mobile: '9876543223',
      whatsapp: '9876543223',
      landline: '020-1414141',
      email: 'info@kawasaki.com',
      website: 'www.kawasaki.com',
      address: 'Pune, Maharashtra',
      dealing: 'Hydraulic pumps and motors'
    },
    {
      id: 14,
      brandname: 'Linde',
      name: 'Linde',
      image: 'assets/brands-logo/linde-logo.png',
      title: 'Linde',
      contactName: 'Deepak Joshi',
      mobile: '9876543224',
      whatsapp: '9876543224',
      landline: '020-1515151',
      email: 'info@linde.com',
      website: 'www.linde.com',
      address: 'Bengaluru, Karnataka',
      dealing: 'Hydraulic and drive systems'
    },
    {
      id: 15,
      brandname: 'Nachi',
      name: 'Nachi',
      image: 'assets/brands-logo/nachi-logo.png',
      title: 'Nachi',
      contactName: 'Kiran Patel',
      mobile: '9876543225',
      whatsapp: '9876543225',
      landline: '020-1616161',
      email: 'info@nachi.com',
      website: 'www.nachi.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Hydraulic pumps and bearings'
    },
    {
      id: 16,
      brandname: 'Parker',
      name: 'Parker',
      image: 'assets/brands-logo/parker-logo.png',
      title: 'Parker',
      contactName: 'Sanjay Kulkarni',
      mobile: '9876543226',
      whatsapp: '9876543226',
      landline: '020-1717171',
      email: 'info@parker.com',
      website: 'www.parker.com',
      address: 'Pune, Maharashtra',
      dealing: 'Motion and control technologies'
    },
    {
      id: 17,
      brandname: 'Sai',
      name: 'Sai',
      image: 'assets/brands-logo/sai-logo.png',
      title: 'Sai',
      contactName: 'Alok Sharma',
      mobile: '9876543227',
      whatsapp: '9876543227',
      landline: '020-1818181',
      email: 'info@sai.com',
      website: 'www.sai.com',
      address: 'Hyderabad, Telangana',
      dealing: 'Hydraulic motors and systems'
    },
    {
      id: 18,
      brandname: 'THM Huade',
      name: 'THM Huade',
      image: 'assets/brands-logo/thmhuade-logo.png',
      title: 'THM Huade',
      contactName: 'Rohit Bansal',
      mobile: '9876543228',
      whatsapp: '9876543228',
      landline: '020-1919191',
      email: 'info@thmhuade.com',
      website: 'www.thmhuade.com',
      address: 'Delhi, India',
      dealing: 'Hydraulic valves and pumps'
    },
    {
      id: 19,
      brandname: 'Veljan',
      name: 'Veljan',
      image: 'assets/brands-logo/veljan-logo.png',
      title: 'Veljan',
      contactName: 'Sneha Iyer',
      mobile: '9876543229',
      whatsapp: '9876543229',
      landline: '020-2020202',
      email: 'info@veljan.com',
      website: 'www.veljan.com',
      address: 'Hyderabad, Telangana',
      dealing: 'Hydraulic components and systems'
    },
    {
      id: 20,
      brandname: 'Yuken',
      name: 'Yuken',
      image: 'assets/brands-logo/yuken-logo.png',
      title: 'Yuken',
      contactName: 'Abhishek Gupta',
      mobile: '9876543230',
      whatsapp: '9876543230',
      landline: '020-2121212',
      email: 'info@yuken.com',
      website: 'www.yuken.com',
      address: 'Bengaluru, Karnataka',
      dealing: 'Hydraulic pumps, valves, and systems'
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
