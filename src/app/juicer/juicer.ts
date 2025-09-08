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
  selector: 'app-juicer',
  imports: [CommonModule, FormsModule],
  templateUrl: './juicer.html',
  styleUrl: './juicer.css'
})
export class Juicer {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Home Appliances",
      contactName: "Ravi Sharma",
      mobile: "9876543201",
      whatsapp: "9876543201",
      landline: "022-23456781",
      email: "support@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Bajaj Electricals Ltd, Mumbai, India",
      dealing: "Mixer Grinders, Juicers, Home Appliances"
    },
    {
      id: 2,
      brandname: "Butterfly",
      name: "Butterfly Appliances",
      image: "butterfly.png",
      title: "Trusted Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9823456712",
      whatsapp: "9823456712",
      landline: "044-34567892",
      email: "info@butterflyindia.com",
      website: "www.butterflyindia.com",
      address: "Butterfly Gandhimathi Appliances, Chennai, India",
      dealing: "Mixer Grinders, Cookers, Kitchen Solutions"
    },
    {
      id: 3,
      brandname: "Crompton",
      name: "Crompton Appliances",
      image: "crompton.png",
      title: "Quality Electrical Appliances",
      contactName: "Suresh Kumar",
      mobile: "9812345670",
      whatsapp: "9812345670",
      landline: "022-45678903",
      email: "support@crompton.co.in",
      website: "www.crompton.co.in",
      address: "Crompton Greaves Consumer Electricals, Mumbai, India",
      dealing: "Mixers, Fans, Lights, Appliances"
    },
    {
      id: 4,
      brandname: "Eveready",
      name: "Eveready Appliances",
      image: "eveready.png",
      title: "Lighting and Appliances Leader",
      contactName: "Rajesh Verma",
      mobile: "9876543102",
      whatsapp: "9876543102",
      landline: "033-22345678",
      email: "care@eveready.com",
      website: "www.evereadyindia.com",
      address: "Eveready Industries India Ltd, Kolkata, India",
      dealing: "Mixers, Lights, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Havells",
      name: "Havells Appliances",
      image: "havells.png",
      title: "Premium Electrical Appliances",
      contactName: "Nikhil Jain",
      mobile: "9988776655",
      whatsapp: "9988776655",
      landline: "0120-4771000",
      email: "info@havells.com",
      website: "www.havells.com",
      address: "Havells India Ltd, Noida, India",
      dealing: "Mixer Grinders, Fans, Kitchen & Home Appliances"
    },
    {
      id: 6,
      brandname: "Hurom",
      name: "Hurom Appliances",
      image: "hurom.png",
      title: "Slow Juicer Specialist",
      contactName: "Rahul Khanna",
      mobile: "9898989898",
      whatsapp: "9898989898",
      landline: "011-45678921",
      email: "support@huromindia.com",
      website: "www.huromindia.com",
      address: "Hurom India Pvt Ltd, New Delhi, India",
      dealing: "Juicers, Healthy Kitchen Appliances"
    },
    {
      id: 7,
      brandname: "Inalsa",
      name: "Inalsa Appliances",
      image: "inalsa.png",
      title: "Smart Kitchen Solutions",
      contactName: "Pooja Singh",
      mobile: "9911223344",
      whatsapp: "9911223344",
      landline: "011-23456789",
      email: "info@inalsaappliances.com",
      website: "www.inalsaappliances.com",
      address: "Inalsa Appliances Ltd, New Delhi, India",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 8,
      brandname: "JMG",
      name: "JMG Appliances",
      image: "jmg.png",
      title: "Juicer Mixer Grinder Specialist",
      contactName: "Deepak Malhotra",
      mobile: "9876512345",
      whatsapp: "9876512345",
      landline: "011-12345678",
      email: "care@jmgappliances.com",
      website: "www.jmgappliances.com",
      address: "JMG Enterprises, New Delhi, India",
      dealing: "Juicers, Mixers, Grinders"
    },
    {
      id: 9,
      brandname: "Jaipan",
      name: "Jaipan Appliances",
      image: "jaipan.png",
      title: "Trusted Kitchen Appliances",
      contactName: "Manoj Gupta",
      mobile: "9865321478",
      whatsapp: "9865321478",
      landline: "022-98765432",
      email: "support@jaipan.com",
      website: "www.jaipan.com",
      address: "Jaipan Industries Ltd, Mumbai, India",
      dealing: "Mixers, Cookers, Home Appliances"
    },
    {
      id: 10,
      brandname: "Kenstar",
      name: "Kenstar Appliances",
      image: "kenstar.png",
      title: "Lifestyle Kitchen Solutions",
      contactName: "Arvind Patel",
      mobile: "9876001234",
      whatsapp: "9876001234",
      landline: "020-23456789",
      email: "info@kenstar.in",
      website: "www.kenstar.in",
      address: "Kenstar Appliances, Pune, India",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 11,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Smart Kitchen & Home Appliances",
      contactName: "Vinay Joshi",
      mobile: "9753102468",
      whatsapp: "9753102468",
      landline: "011-24681012",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "Maharaja Whiteline, New Delhi, India",
      dealing: "Mixers, Juicers, Kitchen & Home Appliances"
    },
    {
      id: 12,
      brandname: "Singer",
      name: "Singer India",
      image: "singer.png",
      title: "Appliances for Every Home",
      contactName: "Sonal Kapoor",
      mobile: "9765432109",
      whatsapp: "9765432109",
      landline: "022-76543210",
      email: "care@singerindia.net",
      website: "www.singerindia.net",
      address: "Singer India Ltd, Mumbai, India",
      dealing: "Mixers, Juicers, Home Appliances"
    },
    {
      id: 13,
      brandname: "Sunflame",
      name: "Sunflame Appliances",
      image: "sunflame.png",
      title: "Cooking Made Easy",
      contactName: "Rohit Mehra",
      mobile: "9897123456",
      whatsapp: "9897123456",
      landline: "0120-7896543",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "Sunflame Enterprises Pvt Ltd, Noida, India",
      dealing: "Mixers, Cooktops, Kitchen Appliances"
    },
    {
      id: 14,
      brandname: "Surya",
      name: "Surya Appliances",
      image: "surya.png",
      title: "Powerful Home Appliances",
      contactName: "Karan Malhotra",
      mobile: "9786543210",
      whatsapp: "9786543210",
      landline: "011-87654321",
      email: "info@suryaappliances.com",
      website: "www.suryaappliances.com",
      address: "Surya Roshni Ltd, New Delhi, India",
      dealing: "Mixers, Lights, Home Appliances"
    },
    {
      id: 15,
      brandname: "Pigeon",
      name: "Pigeon Appliances",
      image: "pigeon.png",
      title: "Affordable Kitchen Solutions",
      contactName: "Sanjay Bansal",
      mobile: "9654321098",
      whatsapp: "9654321098",
      landline: "080-23456789",
      email: "support@stovekraft.com",
      website: "www.pigeonappliances.com",
      address: "Stovekraft Ltd, Bengaluru, India",
      dealing: "Mixers, Cookers, Kitchen Appliances"
    },
    {
      id: 16,
      brandname: "Usha",
      name: "Usha International",
      image: "usha.png",
      title: "Trusted Household Brand",
      contactName: "Shalini Arora",
      mobile: "9543216780",
      whatsapp: "9543216780",
      landline: "011-24678900",
      email: "care@usha.com",
      website: "www.usha.com",
      address: "Usha International Ltd, New Delhi, India",
      dealing: "Mixers, Fans, Kitchen & Home Appliances"
    },
    {
      id: 17,
      brandname: "Wonderchef",
      name: "Wonderchef Appliances",
      image: "wonderchef.png",
      title: "Stylish Kitchenware",
      contactName: "Chef Sanjeev Kapoor",
      mobile: "9871234560",
      whatsapp: "9871234560",
      landline: "022-24680099",
      email: "care@wonderchef.in",
      website: "www.wonderchef.in",
      address: "Wonderchef Home Appliances, Mumbai, India",
      dealing: "Cookware, Mixers, Juicers, Kitchen Appliances"
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
