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
  selector: 'app-mixer-grinder',
  imports: [CommonModule,FormsModule],
  templateUrl: './mixer-grinder.html',
  styleUrl: './mixer-grinder.css'
})
export class MixerGrinder {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "BALTRA",
      name: "BALTRA Appliances",
      image: "baltra.png",
      title: "Premium Home Appliances",
      contactName: "Rakesh Kumar",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "022-23456789",
      email: "info@baltra.in",
      website: "www.baltra.in",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Kitchen Appliances, Lighting"
    },
    {
      id: 2,
      brandname: "Bajaj",
      name: "Bajaj Appliances",
      image: "bajaj.png",
      title: "Innovative Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543211",
      whatsapp: "9876543211",
      landline: "022-34567890",
      email: "support@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 3,
      brandname: "Borosil",
      name: "Borosil",
      image: "borosil.png",
      title: "Glassware & Appliances",
      contactName: "Suresh Nair",
      mobile: "9876543212",
      whatsapp: "9876543212",
      landline: "022-45678901",
      email: "care@borosil.com",
      website: "www.borosil.com",
      address: "Mumbai, Maharashtra",
      dealing: "Kitchenware, Home Appliances"
    },
    {
      id: 4,
      brandname: "Bosch",
      name: "Bosch Appliances",
      image: "bosch.png",
      title: "Trusted Household Appliances",
      contactName: "Rahul Sharma",
      mobile: "9876543213",
      whatsapp: "9876543213",
      landline: "022-56789012",
      email: "support@bosch.in",
      website: "www.bosch.in",
      address: "Bangalore, Karnataka",
      dealing: "Mixers, Juicers, Ovens, Kitchen Appliances"
    },
    {
      id: 5,
      brandname: "Boss",
      name: "Boss Appliances",
      image: "boss.png",
      title: "Smart Home Solutions",
      contactName: "Rohit Mehta",
      mobile: "9876543214",
      whatsapp: "9876543214",
      landline: "022-67890123",
      email: "info@bossappliances.com",
      website: "www.bossappliances.com",
      address: "Pune, Maharashtra",
      dealing: "Kitchen Appliances, Heaters, Fans"
    },
    {
      id: 6,
      brandname: "Butterfly",
      name: "Butterfly Appliances",
      image: "butterfly.png",
      title: "Trusted Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543215",
      whatsapp: "9876543215",
      landline: "044-34567892",
      email: "info@butterflyindia.com",
      website: "www.butterflyindia.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Mixers, Cookers, Kitchen Appliances"
    },
    {
      id: 7,
      brandname: "Cello",
      name: "Cello Appliances",
      image: "cello.png",
      title: "Everyday Home Solutions",
      contactName: "Sanjay Bansal",
      mobile: "9876543216",
      whatsapp: "9876543216",
      landline: "011-23456789",
      email: "care@cello.in",
      website: "www.cello.in",
      address: "New Delhi, Delhi",
      dealing: "Water Bottles, Kitchen Appliances"
    },
    {
      id: 8,
      brandname: "Crompton",
      name: "Crompton Appliances",
      image: "crompton.png",
      title: "Quality Electrical Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543217",
      whatsapp: "9876543217",
      landline: "022-45678903",
      email: "support@crompton.co.in",
      website: "www.crompton.co.in",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Mixers, Lights, Appliances"
    },
    {
      id: 9,
      brandname: "Eveready",
      name: "Eveready Appliances",
      image: "eveready.png",
      title: "Lighting & Home Appliances",
      contactName: "Rajesh Verma",
      mobile: "9876543218",
      whatsapp: "9876543218",
      landline: "033-22345678",
      email: "care@eveready.com",
      website: "www.evereadyindia.com",
      address: "Kolkata, West Bengal",
      dealing: "Lights, Mixers, Home Appliances"
    },
    {
      id: 10,
      brandname: "Glen",
      name: "Glen Appliances",
      image: "glen.png",
      title: "Smart Kitchen Solutions",
      contactName: "Amit Joshi",
      mobile: "9876543219",
      whatsapp: "9876543219",
      landline: "020-23456789",
      email: "info@glenappliances.com",
      website: "www.glenappliances.com",
      address: "Pune, Maharashtra",
      dealing: "Chimneys, Cooktops, Mixers"
    },
    {
      id: 11,
      brandname: "Greenchef",
      name: "Greenchef Appliances",
      image: "greenchef.png",
      title: "Healthy Kitchen Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543220",
      whatsapp: "9876543220",
      landline: "0120-3456789",
      email: "support@greenchef.com",
      website: "www.greenchef.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Juicers, Mixers, Blenders"
    },
    {
      id: 12,
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
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Fans, Kitchen Appliances"
    },
    {
      id: 13,
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
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 14,
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
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Cookers, Home Appliances"
    },
    {
      id: 15,
      brandname: "Jyoti",
      name: "Jyoti Appliances",
      image: "jyoti.png",
      title: "Reliable Kitchen Appliances",
      contactName: "Ravi Sharma",
      mobile: "9876543221",
      whatsapp: "9876543221",
      landline: "022-23456790",
      email: "care@jyotiappliances.com",
      website: "www.jyotiappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Grinders"
    },
    {
      id: 16,
      brandname: "Kanchan",
      name: "Kanchan Appliances",
      image: "kanchan.png",
      title: "Innovative Kitchen Appliances",
      contactName: "Anita Menon",
      mobile: "9876543222",
      whatsapp: "9876543222",
      landline: "044-34567893",
      email: "info@kanchanappliances.com",
      website: "www.kanchanappliances.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 17,
      brandname: "Kent",
      name: "Kent Appliances",
      image: "kent.png",
      title: "Smart Home & Kitchen Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543223",
      whatsapp: "9876543223",
      landline: "0120-3456780",
      email: "support@kentappliances.com",
      website: "www.kentappliances.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Water Purifiers, Mixers, Juicers"
    },
    {
      id: 18,
      brandname: "Kenstar",
      name: "Kenstar Appliances",
      image: "kenstar.png",
      title: "Lifestyle Kitchen Solutions",
      contactName: "Arvind Patel",
      mobile: "9876543224",
      whatsapp: "9876543224",
      landline: "020-23456789",
      email: "info@kenstar.in",
      website: "www.kenstar.in",
      address: "Pune, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 19,
      brandname: "Kutchina",
      name: "Kutchina Appliances",
      image: "kutchina.png",
      title: "Premium Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543225",
      whatsapp: "9876543225",
      landline: "022-34567891",
      email: "support@kutchina.com",
      website: "www.kutchina.com",
      address: "Mumbai, Maharashtra",
      dealing: "Chimneys, Cooktops, Mixers"
    },
    {
      id: 20,
      brandname: "Lakshmi",
      name: "Lakshmi Appliances",
      image: "lakshmi.png",
      title: "Reliable Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543226",
      whatsapp: "9876543226",
      landline: "022-45678912",
      email: "info@lakshmiappliances.com",
      website: "www.lakshmiappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 21,
      brandname: "Lifelong",
      name: "Lifelong Appliances",
      image: "lifelong.png",
      title: "Smart Home Appliances",
      contactName: "Anil Verma",
      mobile: "9876543227",
      whatsapp: "9876543227",
      landline: "022-56789012",
      email: "support@lifelongindia.com",
      website: "www.lifelongindia.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixer Grinders, Juicers, Kitchen Appliances"
    },
    {
      id: 22,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Home & Kitchen Appliances",
      contactName: "Vinay Joshi",
      mobile: "9876543228",
      whatsapp: "9876543228",
      landline: "011-24681012",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 23,
      brandname: "McCoy",
      name: "McCoy Appliances",
      image: "mccoy.png",
      title: "Innovative Kitchen Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543229",
      whatsapp: "9876543229",
      landline: "0120-3456789",
      email: "info@mccoyappliances.com",
      website: "www.mccoyappliances.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Juicers, Grinders"
    },
    {
      id: 24,
      brandname: "Morphy Richards",
      name: "Morphy Richards",
      image: "morphyrichards.png",
      title: "Premium Kitchen Appliances",
      contactName: "Sonal Kapoor",
      mobile: "9876543230",
      whatsapp: "9876543230",
      landline: "022-76543210",
      email: "care@morphyrichards.in",
      website: "www.morphyrichards.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Ovens, Cooktops, Juicers"
    },
    {
      id: 25,
      brandname: "Orient",
      name: "Orient Appliances",
      image: "orient.png",
      title: "Reliable Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543231",
      whatsapp: "9876543231",
      landline: "022-23456789",
      email: "support@orientappliances.com",
      website: "www.orientappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Mixers, Home Appliances"
    },
    {
      id: 26,
      brandname: "Orpat",
      name: "Orpat Appliances",
      image: "orpat.png",
      title: "Smart Kitchen & Home Solutions",
      contactName: "Anil Mehta",
      mobile: "9876543232",
      whatsapp: "9876543232",
      landline: "022-34567890",
      email: "info@orpat.com",
      website: "www.orpat.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 27,
      brandname: "Panasonic",
      name: "Panasonic Appliances",
      image: "panasonic.png",
      title: "Trusted Electronics & Appliances",
      contactName: "Rajesh Verma",
      mobile: "9876543233",
      whatsapp: "9876543233",
      landline: "022-45678901",
      email: "support@panasonic.in",
      website: "www.panasonic.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Ovens, Fans, Electronics"
    },
    {
      id: 28,
      brandname: "Philips",
      name: "Philips Appliances",
      image: "philips.png",
      title: "Innovative Home Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543234",
      whatsapp: "9876543234",
      landline: "0120-3456789",
      email: "care@philips.in",
      website: "www.philips.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Juicers, Lighting, Home Appliances"
    },
    {
      id: 29,
      brandname: "Pigeon",
      name: "Pigeon Appliances",
      image: "pigeon.png",
      title: "Affordable Kitchen Solutions",
      contactName: "Sanjay Bansal",
      mobile: "9876543235",
      whatsapp: "9876543235",
      landline: "080-23456789",
      email: "support@stovekraft.com",
      website: "www.pigeonappliances.com",
      address: "Bengaluru, Karnataka",
      dealing: "Mixers, Cookers, Kitchen Appliances"
    },
    {
      id: 30,
      brandname: "Polar",
      name: "Polar Appliances",
      image: "polar.png",
      title: "Reliable Home Appliances",
      contactName: "Anita Menon",
      mobile: "9876543236",
      whatsapp: "9876543236",
      landline: "044-34567892",
      email: "info@polarappliances.com",
      website: "www.polarappliances.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 31,
      brandname: "Preethi",
      name: "Preethi Appliances",
      image: "preethi.png",
      title: "Smart Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543237",
      whatsapp: "9876543237",
      landline: "022-45678912",
      email: "support@preethi.in",
      website: "www.preethi.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cooktops"
    },
    {
      id: 32,
      brandname: "Premier",
      name: "Premier Appliances",
      image: "premier.png",
      title: "Everyday Kitchen Solutions",
      contactName: "Rohit Malhotra",
      mobile: "9876543238",
      whatsapp: "9876543238",
      landline: "011-23456789",
      email: "info@premierappliances.com",
      website: "www.premierappliances.com",
      address: "New Delhi, Delhi",
      dealing: "Mixers, Juicers, Grinders"
    },
    {
      id: 33,
      brandname: "Prestige",
      name: "Prestige Appliances",
      image: "prestige.png",
      title: "Trusted Kitchen Solutions",
      contactName: "Rakesh Sharma",
      mobile: "9876543239",
      whatsapp: "9876543239",
      landline: "022-56789012",
      email: "info@prestigeappliances.com",
      website: "www.prestigeappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Cookers, Juicers"
    },
    {
      id: 34,
      brandname: "Singer",
      name: "Singer India",
      image: "singer.png",
      title: "Appliances for Every Home",
      contactName: "Sonal Kapoor",
      mobile: "9876543240",
      whatsapp: "9876543240",
      landline: "022-76543210",
      email: "care@singerindia.net",
      website: "www.singerindia.net",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Home Appliances"
    },
    {
      id: 35,
      brandname: "Skyline",
      name: "Skyline Appliances",
      image: "skyline.png",
      title: "Smart Kitchen Solutions",
      contactName: "Anil Verma",
      mobile: "9876543241",
      whatsapp: "9876543241",
      landline: "022-23456789",
      email: "support@skylineappliances.com",
      website: "www.skylineappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Grinders"
    },
    {
      id: 36,
      brandname: "Sumeet",
      name: "Sumeet Appliances",
      image: "sumeet.png",
      title: "Efficient Kitchen Solutions",
      contactName: "Rohit Mehra",
      mobile: "9876543242",
      whatsapp: "9876543242",
      landline: "0120-3456789",
      email: "info@sumeetappliances.com",
      website: "www.sumeetappliances.com",
      address: "Noida, Uttar Pradesh",
      dealing: "Mixers, Juicers, Kitchen Appliances"
    },
    {
      id: 37,
      brandname: "Sujata",
      name: "Sujata Appliances",
      image: "sujata.png",
      title: "Smart Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543243",
      whatsapp: "9876543243",
      landline: "022-34567890",
      email: "care@sujataappliances.com",
      website: "www.sujataappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 38,
      brandname: "Sunflame",
      name: "Sunflame Appliances",
      image: "sunflame.png",
      title: "Reliable Kitchen Solutions",
      contactName: "Anita Menon",
      mobile: "9876543244",
      whatsapp: "9876543244",
      landline: "044-34567891",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "Chennai, Tamil Nadu",
      dealing: "Cooktops, Juicers, Mixers"
    },
    {
      id: 39,
      brandname: "Surya",
      name: "Surya Appliances",
      image: "surya.png",
      title: "Home & Kitchen Appliances",
      contactName: "Suresh Kumar",
      mobile: "9876543245",
      whatsapp: "9876543245",
      landline: "022-45678912",
      email: "info@suryaappliances.com",
      website: "www.suryaappliances.com",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Home Appliances"
    },
    {
      id: 40,
      brandname: "V-Guard",
      name: "V-Guard Appliances",
      image: "vguard.png",
      title: "Trusted Electrical Appliances",
      contactName: "Rohit Mehra",
      mobile: "9876543246",
      whatsapp: "9876543246",
      landline: "0120-3456789",
      email: "support@vguard.in",
      website: "www.vguard.in",
      address: "Noida, Uttar Pradesh",
      dealing: "Stabilizers, Mixers, Fans, Home Appliances"
    },
    {
      id: 41,
      brandname: "Vidiem",
      name: "Vidiem Appliances",
      image: "vidiem.png",
      title: "Premium Kitchen Appliances",
      contactName: "Anil Verma",
      mobile: "9876543247",
      whatsapp: "9876543247",
      landline: "022-56789012",
      email: "info@vidiem.in",
      website: "www.vidiem.in",
      address: "Mumbai, Maharashtra",
      dealing: "Mixers, Juicers, Cookers"
    },
    {
      id: 42,
      brandname: "Wonderchef",
      name: "Wonderchef Appliances",
      image: "wonderchef.png",
      title: "Smart Kitchen Solutions",
      contactName: "Sonal Kapoor",
      mobile: "9876543248",
      whatsapp: "9876543248",
      landline: "022-76543210",
      email: "support@wonderchef.com",
      website: "www.wonderchef.com",
      address: "Mumbai, Maharashtra",
      dealing: "Cookers, Juicers, Mixers"
    },
    {
      id: 43,
      brandname: "Usha",
      name: "Usha Appliances",
      image: "usha.png",
      title: "Reliable Home Appliances",
      contactName: "Ramesh Sharma",
      mobile: "9876543249",
      whatsapp: "9876543249",
      landline: "022-34567890",
      email: "info@usha.in",
      website: "www.usha.in",
      address: "Mumbai, Maharashtra",
      dealing: "Fans, Mixers, Juicers, Kitchen Appliances"
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
