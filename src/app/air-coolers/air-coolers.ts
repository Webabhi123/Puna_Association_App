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
  selector: 'app-air-coolers',
  imports: [CommonModule, FormsModule],
  templateUrl: './air-coolers.html',
  styleUrl: './air-coolers.css'
})
export class AirCoolers {
showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] =[
    {
      id: 1,
      brandname: 'Bajaj',
      name: 'Bajaj Appliances Ltd',
      image: 'bajaj.png',
      title: 'Power & Appliances',
      contactName: 'Rajesh Kumar',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '02212345678',
      email: 'support@bajaj.com',
      website: 'www.bajaj.com',
      address: 'Pune, Maharashtra',
      dealing: 'Home Appliances'
    },
    {
      id: 2,
      brandname: 'Butterfly',
      name: 'Butterfly Home Solutions',
      image: 'butterfly.png',
      title: 'Kitchen Appliances',
      contactName: 'Meena Reddy',
      mobile: '9823456789', 
      whatsapp: '9823456789',
      landline: '04487654321',
      email: 'info@butterfly.in',
      website: 'www.butterfly.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Mixer & Cookware'
    },
    {
      id: 3,
      brandname: 'Cello',
      name: 'Cello Industries',
      image: 'cello.png',
      title: 'Consumer Products',
      contactName: 'Anil Sharma',
      mobile: '9812345678',
      whatsapp: '9812345678',
      landline: '02223456789',
      email: 'support@cello.in',
      website: 'www.cello.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Kitchenware & Fans'
    },
    {
      id: 4,
      brandname: 'Clarion',
      name: 'Clarion India Ltd',
      image: 'clarion.png',
      title: 'Electronics',
      contactName: 'Suresh Rao',
      mobile: '9871234560',
      whatsapp: '9871234560',
      landline: '01122334455',
      email: 'sales@clarion.in',
      website: 'www.clarion.com',
      address: 'Delhi',
      dealing: 'Audio Systems'
    },
    {
      id: 5,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electricals & Appliances',
      contactName: 'Mohit Gupta',
      mobile: '9811112233',
      whatsapp: '9811112233',
      landline: '01204567890',
      email: 'care@havells.com',
      website: 'www.havells.com',
      address: 'Noida, UP',
      dealing: 'Fans, Wires, Switches'
    },
    {
      id: 6,
      brandname: 'Hindware',
      name: 'Hindware Limited',
      image: 'hindware.png',
      title: 'Bath & Appliances',
      contactName: 'Rekha Singh',
      mobile: '9876001122',
      whatsapp: '9876001122',
      landline: '01145678901',
      email: 'support@hindware.com',
      website: 'www.hindwareappliances.com',
      address: 'Delhi NCR',
      dealing: 'Kitchen & Bath'
    },
    {
      id: 7,
      brandname: 'Honeywell',
      name: 'Honeywell India',
      image: 'honeywell.png',
      title: 'Global Tech & Appliances',
      contactName: 'Arvind Mehta',
      mobile: '9822003344',
      whatsapp: '9822003344',
      landline: '02233445566',
      email: 'india@honeywell.com',
      website: 'www.honeywell.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Air Purifiers & Electronics'
    },
    {
      id: 8,
      brandname: 'Kapsun',
      name: 'Kapsun Industries',
      image: 'kapsun.png',
      title: 'Cooling Solutions',
      contactName: 'Vipul Desai',
      mobile: '9812233445',
      whatsapp: '9812233445',
      landline: '07922113344',
      email: 'contact@kapsun.com',
      website: 'www.kapsun.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Air Coolers'
    },
    {
      id: 9,
      brandname: 'Kelvinator',
      name: 'Kelvinator India',
      image: 'kelvinator.png',
      title: 'Appliances',
      contactName: 'Nitin Kapoor',
      mobile: '9823456721',
      whatsapp: '9823456721',
      landline: '02255667788',
      email: 'support@kelvinator.in',
      website: 'www.kelvinator.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Refrigerators & AC'
    },
    {
      id: 10,
      brandname: 'Kenstar',
      name: 'Kenstar Appliances Pvt Ltd',
      image: 'kenstar.png',
      title: 'Home Appliances',
      contactName: 'Anjali Sharma',
      mobile: '9811122233',
      whatsapp: '9811122233',
      landline: '01111223344',
      email: 'support@kenstar.in',
      website: 'www.kenstar.in',
      address: 'Gurgaon, Haryana',
      dealing: 'Mixer, Oven, Fans'
    },
    {
      id: 11,
      brandname: 'Khaitan',
      name: 'Khaitan Electricals Ltd',
      image: 'khaitan.png',
      title: 'Electricals & Fans',
      contactName: 'Rohit Verma',
      mobile: '9821456789',
      whatsapp: '9821456789',
      landline: '03322446677',
      email: 'support@khaitan.com',
      website: 'www.khaitan.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans & Electricals'
    },
    {
      id: 12,
      brandname: 'Maharaja Whiteline',
      name: 'Maharaja Whiteline Ltd',
      image: 'maharajawhiteline.png',
      title: 'Home Appliances',
      contactName: 'Sneha Agarwal',
      mobile: '9815566778',
      whatsapp: '9815566778',
      landline: '01122557788',
      email: 'support@maharajawhiteline.com',
      website: 'www.maharajawhiteline.com',
      address: 'Delhi NCR',
      dealing: 'Mixers & Cookware'
    },
    {
      id: 13,
      brandname: 'McCoy',
      name: 'McCoy Appliances',
      image: 'mccoy.png',
      title: 'Cooling & Appliances',
      contactName: 'Prakash Mehta',
      mobile: '9876123456',
      whatsapp: '9876123456',
      landline: '02244556677',
      email: 'support@mccoy.in',
      website: 'www.mccoyindia.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Air Coolers & Fans'
    },
    {
      id: 14,
      brandname: 'Nuspak',
      name: 'Nuspak Appliances',
      image: 'nuspak.png',
      title: 'Kitchen & Appliances',
      contactName: 'Alok Sharma',
      mobile: '9812234567',
      whatsapp: '9812234567',
      landline: '01242345678',
      email: 'care@nuspak.in',
      website: 'www.nuspak.in',
      address: 'Delhi NCR',
      dealing: 'Small Appliances'
    },
    {
      id: 15,
      brandname: 'Orient',
      name: 'Orient Electric',
      image: 'orient.png',
      title: 'Electricals & Fans',
      contactName: 'Ramesh Iyer',
      mobile: '9823445566',
      whatsapp: '9823445566',
      landline: '01133445566',
      email: 'support@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'Delhi NCR',
      dealing: 'Fans, Lights, Appliances'
    },
    {
      id: 16,
      brandname: 'RAM',
      name: 'RAM Appliances',
      image: 'ram.png',
      title: 'Electronics & Appliances',
      contactName: 'Vinod Patil',
      mobile: '9877654321',
      whatsapp: '9877654321',
      landline: '02023456789',
      email: 'info@ramappliances.com',
      website: 'www.ramappliances.com',
      address: 'Pune, Maharashtra',
      dealing: 'Electronics & Home Products'
    },
    {
      id: 17,
      brandname: 'Singer',
      name: 'Singer India Ltd',
      image: 'singer.png',
      title: 'Sewing & Appliances',
      contactName: 'Deepak Joshi',
      mobile: '9812349988',
      whatsapp: '9812349988',
      landline: '01144556677',
      email: 'care@singerindia.net',
      website: 'www.singerindia.net',
      address: 'Delhi NCR',
      dealing: 'Sewing Machines & Appliances'
    },
    {
      id: 18,
      brandname: 'Summercool',
      name: 'Summercool Appliances',
      image: 'summercool.png',
      title: 'Cooling Solutions',
      contactName: 'Kiran Bansal',
      mobile: '9822001122',
      whatsapp: '9822001122',
      landline: '05224567890',
      email: 'support@summercool.com',
      website: 'www.summercool.com',
      address: 'Lucknow, UP',
      dealing: 'Air Coolers & Fans'
    },
    {
      id: 19,
      brandname: 'Surya',
      name: 'Surya Roshni Ltd',
      image: 'surya.png',
      title: 'Lighting & Appliances',
      contactName: 'Arun Nair',
      mobile: '9833344556',
      whatsapp: '9833344556',
      landline: '01122334499',
      email: 'support@suryaroshnilighting.com',
      website: 'www.suryaroshnilighting.com',
      address: 'Delhi NCR',
      dealing: 'Lights & Home Appliances'
    },
    {
      id: 20,
      brandname: 'Symphony',
      name: 'Symphony Ltd',
      image: 'symphony.png',
      title: 'Cooling Solutions',
      contactName: 'Rajiv Patel',
      mobile: '9823556677',
      whatsapp: '9823556677',
      landline: '07944556677',
      email: 'support@symphonylimited.com',
      website: 'www.symphonylimited.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Air Coolers'
    },
    {
      id: 21,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Appliances & Fans',
      contactName: 'Manoj Kumar',
      mobile: '9811456777',
      whatsapp: '9811456777',
      landline: '01166554433',
      email: 'support@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Appliances, Sewing'
    },
    {
      id: 22,
      brandname: 'V Guard',
      name: 'V Guard Industries',
      image: 'vguard.png',
      title: 'Electricals',
      contactName: 'Naveen Menon',
      mobile: '9844455566',
      whatsapp: '9844455566',
      landline: '04842345678',
      email: 'care@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Stabilizers, Pumps, Appliances'
    },
    {
      id: 23,
      brandname: 'Vaayu',
      name: 'Vaayu Appliances',
      image: 'vaayu.png',
      title: 'Air Cooling Solutions',
      contactName: 'Sameer Shah',
      mobile: '9822113344',
      whatsapp: '9822113344',
      landline: '07922114455',
      email: 'info@vaayu.in',
      website: 'www.vaayu.in',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Coolers & Fans'
    },
    {
      id: 24,
      brandname: 'Vego',
      name: 'Vego Appliances',
      image: 'vego.png',
      title: 'Cooling Appliances',
      contactName: 'Ashish Tandon',
      mobile: '9812341122',
      whatsapp: '9812341122',
      landline: '01122114455',
      email: 'support@vego.in',
      website: 'www.vego.in',
      address: 'Delhi NCR',
      dealing: 'Air Coolers'
    },
    {
      id: 25,
      brandname: 'Whirlpool',
      name: 'Whirlpool of India Ltd',
      image: 'whirlpool.png',
      title: 'Home Appliances',
      contactName: 'Neha Kapoor',
      mobile: '9817788990',
      whatsapp: '9817788990',
      landline: '01244556677',
      email: 'support@whirlpoolindia.com',
      website: 'www.whirlpoolindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Refrigerators, Washing Machines'
    }
  ]
  

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
