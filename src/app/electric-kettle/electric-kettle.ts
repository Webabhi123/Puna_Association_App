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
  selector: 'app-electric-kettle',
  imports: [CommonModule, FormsModule],
  templateUrl: './electric-kettle.html',
  styleUrl: './electric-kettle.css'
})
export class ElectricKettle {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "BALTRA",
      name: "Baltra Kitchen Appliances",
      image: "baltra.png",
      title: "Innovative & Affordable Kitchen Solutions",
      contactName: "Rajesh Sharma",
      mobile: "9876543001",
      whatsapp: "9876543001",
      landline: "011-41001001",
      email: "support@baltra.com",
      website: "www.baltra.com",
      address: "Baltra House, New Delhi, India",
      dealing: "Kitchen appliances, cookware, induction cooktops"
    },
    {
      id: 2,
      brandname: "Bajaj",
      name: "Bajaj Electricals",
      image: "bajaj.png",
      title: "Trusted Appliances for Every Home",
      contactName: "Anita Deshmukh",
      mobile: "9876543002",
      whatsapp: "9876543002",
      landline: "022-12345678",
      email: "info@bajajelectricals.com",
      website: "www.bajajelectricals.com",
      address: "Bajaj Bhavan, Mumbai, India",
      dealing: "Mixers, juicers, toasters, ovens, fans"
    },
    {
      id: 3,
      brandname: "Borosil",
      name: "Borosil Appliances",
      image: "borosil.png",
      title: "Glassware & Kitchen Appliances",
      contactName: "Suman Verma",
      mobile: "9876543003",
      whatsapp: "9876543003",
      landline: "022-98765432",
      email: "customercare@borosil.com",
      website: "www.borosil.com",
      address: "Andheri East, Mumbai, India",
      dealing: "Glassware, ovens, kitchen appliances"
    },
    {
      id: 4,
      brandname: "Butterfly",
      name: "Butterfly Gandhimathi Appliances",
      image: "butterfly.png",
      title: "Smart Kitchen Essentials",
      contactName: "Hari Kumar",
      mobile: "9876543004",
      whatsapp: "9876543004",
      landline: "044-22223333",
      email: "care@butterflyindia.com",
      website: "www.butterflyindia.com",
      address: "Chennai, Tamil Nadu, India",
      dealing: "Mixers, grinders, gas stoves, cookware"
    },
    {
      id: 5,
      brandname: "Cello",
      name: "Cello Appliances",
      image: "cello.png",
      title: "Modern Living with Smart Products",
      contactName: "Ritika Shah",
      mobile: "9876543005",
      whatsapp: "9876543005",
      landline: "022-24567890",
      email: "info@celloworld.com",
      website: "www.celloworld.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "Appliances, homeware, kitchen essentials"
    },
    {
      id: 6,
      brandname: "Crompton",
      name: "Crompton Greaves Consumer",
      image: "crompton.png",
      title: "Innovating for Modern Homes",
      contactName: "Sandeep Jain",
      mobile: "9876543006",
      whatsapp: "9876543006",
      landline: "022-12347890",
      email: "info@cromptongreaves.com",
      website: "www.crompton.co.in",
      address: "Mumbai, India",
      dealing: "Appliances, fans, water heaters, lights"
    },
    {
      id: 7,
      brandname: "Eveready",
      name: "Eveready Industries",
      image: "eveready.png",
      title: "Power & Kitchen Appliances",
      contactName: "Manish Gupta",
      mobile: "9876543007",
      whatsapp: "9876543007",
      landline: "033-40000000",
      email: "care@eveready.com",
      website: "www.evereadyindia.com",
      address: "Kolkata, West Bengal, India",
      dealing: "Kitchen appliances, lights, batteries"
    },
    {
      id: 8,
      brandname: "Glen",
      name: "Glen Appliances",
      image: "glen.png",
      title: "Built for Modern Indian Kitchens",
      contactName: "Neha Agarwal",
      mobile: "9876543008",
      whatsapp: "9876543008",
      landline: "011-40010010",
      email: "support@glenindia.com",
      website: "www.glenindia.com",
      address: "Gurgaon, Haryana, India",
      dealing: "Chimneys, cooktops, ovens, mixers"
    },
    {
      id: 9,
      brandname: "Greenchef",
      name: "Greenchef Appliances",
      image: "greenchef.png",
      title: "Affordable Smart Kitchen Solutions",
      contactName: "Suresh Babu",
      mobile: "9876543009",
      whatsapp: "9876543009",
      landline: "080-40001122",
      email: "info@greenchef.in",
      website: "www.greenchef.in",
      address: "Bangalore, Karnataka, India",
      dealing: "Cooktops, pressure cookers, mixers"
    },
    {
      id: 10,
      brandname: "Havells",
      name: "Havells India Ltd.",
      image: "havells.png",
      title: "Leading Brand in Home Appliances",
      contactName: "Arun Singh",
      mobile: "9876543010",
      whatsapp: "9876543010",
      landline: "0120-4771000",
      email: "customercare@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Kitchen appliances, fans, lights"
    },
    {
      id: 11,
      brandname: "Inalsa",
      name: "Inalsa Appliances",
      image: "inalsa.png",
      title: "Efficient & Stylish Kitchen Products",
      contactName: "Pooja Yadav",
      mobile: "9876543011",
      whatsapp: "9876543011",
      landline: "0120-4751000",
      email: "info@inalsa.co.in",
      website: "www.inalsaappliances.com",
      address: "Gurgaon, Haryana, India",
      dealing: "Mixers, blenders, ovens, induction cooktops"
    },
    {
      id: 12,
      brandname: "Kenstar",
      name: "Kenstar Appliances",
      image: "kenstar.png",
      title: "Trusted Name in Kitchen & Home",
      contactName: "Ravi Joshi",
      mobile: "9876543012",
      whatsapp: "9876543012",
      landline: "022-40002211",
      email: "care@kenstar.in",
      website: "www.kenstar.in",
      address: "Mumbai, India",
      dealing: "Microwaves, mixers, coolers"
    },
    {
      id: 13,
      brandname: "Kent",
      name: "Kent Appliances",
      image: "kent.png",
      title: "Healthy Living Appliances",
      contactName: "Megha Kapoor",
      mobile: "9876543013",
      whatsapp: "9876543013",
      landline: "0120-4777888",
      email: "info@kent.co.in",
      website: "www.kent.co.in",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Water purifiers, kitchen appliances"
    },
    {
      id: 14,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "India’s Kitchen Partner",
      contactName: "Ajay Thakur",
      mobile: "9876543014",
      whatsapp: "9876543014",
      landline: "011-41002233",
      email: "care@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, India",
      dealing: "Mixers, grinders, cooktops"
    },
    {
      id: 15,
      brandname: "Milton",
      name: "Milton Appliances",
      image: "milton.png",
      title: "Household & Kitchen Essentials",
      contactName: "Kiran Patel",
      mobile: "9876543015",
      whatsapp: "9876543015",
      landline: "022-45678900",
      email: "support@milton.in",
      website: "www.milton.in",
      address: "Mumbai, Maharashtra, India",
      dealing: "Kitchen appliances, flasks, bottles"
    },
    {
      id: 16,
      brandname: "Morphy Richards",
      name: "Morphy Richards India",
      image: "morphyrichards.png",
      title: "Stylish European Appliances",
      contactName: "Alok Singh",
      mobile: "9876543016",
      whatsapp: "9876543016",
      landline: "022-67890000",
      email: "care@morphyrichardsindia.com",
      website: "www.morphyrichardsindia.com",
      address: "Mumbai, Maharashtra, India",
      dealing: "Coffee makers, ovens, toasters"
    },
    {
      id: 17,
      brandname: "Oreva",
      name: "Oreva Group",
      image: "oreva.png",
      title: "Affordable Appliances & Electronics",
      contactName: "Deepak Mehta",
      mobile: "9876543017",
      whatsapp: "9876543017",
      landline: "02764-233333",
      email: "info@oreva.com",
      website: "www.oreva.com",
      address: "Ahmedabad, Gujarat, India",
      dealing: "Kitchen appliances, clocks, lighting"
    },
    {
      id: 18,
      brandname: "Orpat",
      name: "Orpat Group",
      image: "orpat.png",
      title: "Trusted Indian Appliances",
      contactName: "Vishal Shah",
      mobile: "9876543018",
      whatsapp: "9876543018",
      landline: "02764-233000",
      email: "care@orpatgroup.com",
      website: "www.orpatgroup.com",
      address: "Gujarat, India",
      dealing: "Mixers, fans, household appliances"
    },
    {
      id: 19,
      brandname: "Philips",
      name: "Philips India",
      image: "philips.png",
      title: "Innovation & You",
      contactName: "Ankur Bhatia",
      mobile: "9876543019",
      whatsapp: "9876543019",
      landline: "022-12349900",
      email: "support@philips.com",
      website: "www.philips.co.in",
      address: "Mumbai, Maharashtra, India",
      dealing: "Kitchen appliances, electronics, lighting"
    },
    {
      id: 20,
      brandname: "Pigeon",
      name: "Pigeon by Stovekraft",
      image: "pigeon.png",
      title: "Smart Cooking Solutions",
      contactName: "Meera Reddy",
      mobile: "9876543020",
      whatsapp: "9876543020",
      landline: "080-40003322",
      email: "care@stovekraft.com",
      website: "www.pigeonindia.in",
      address: "Bangalore, Karnataka, India",
      dealing: "Cooktops, pressure cookers, pans"
    },
    {
      id: 21,
      brandname: "Prestige",
      name: "TTK Prestige",
      image: "prestige.png",
      title: "Innovating Kitchenware",
      contactName: "Vinod Rao",
      mobile: "9876543021",
      whatsapp: "9876543021",
      landline: "080-22277788",
      email: "customercare@ttkprestige.com",
      website: "www.ttkprestige.com",
      address: "Bangalore, Karnataka, India",
      dealing: "Cookers, cooktops, appliances"
    },
    {
      id: 22,
      brandname: "Singer",
      name: "Singer India",
      image: "singer.png",
      title: "Appliances & Sewing Machines",
      contactName: "Rahul Kapoor",
      mobile: "9876543022",
      whatsapp: "9876543022",
      landline: "011-12340000",
      email: "info@singerindia.net",
      website: "www.singerindia.net",
      address: "New Delhi, India",
      dealing: "Kitchen appliances, sewing machines"
    },
    {
      id: 23,
      brandname: "Skyline",
      name: "Skyline Appliances",
      image: "skyline.png",
      title: "Affordable Kitchen Essentials",
      contactName: "Amit Malhotra",
      mobile: "9876543023",
      whatsapp: "9876543023",
      landline: "011-44445555",
      email: "support@skylineappliances.com",
      website: "www.skylineappliances.com",
      address: "New Delhi, India",
      dealing: "Mixers, ovens, coffee makers"
    },
    {
      id: 24,
      brandname: "Sunflame",
      name: "Sunflame Enterprises",
      image: "sunflame.png",
      title: "Cooking Made Easy",
      contactName: "Geeta Sharma",
      mobile: "9876543024",
      whatsapp: "9876543024",
      landline: "011-22223344",
      email: "care@sunflame.com",
      website: "www.sunflame.com",
      address: "Faridabad, Haryana, India",
      dealing: "Chimneys, cooktops, ovens"
    },
    {
      id: 25,
      brandname: "Usha",
      name: "Usha International",
      image: "usha.png",
      title: "Appliances that Care",
      contactName: "Sunil Arora",
      mobile: "9876543025",
      whatsapp: "9876543025",
      landline: "011-40001122",
      email: "care@usha.com",
      website: "www.usha.com",
      address: "Gurgaon, Haryana, India",
      dealing: "Fans, kitchen appliances, sewing machines"
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
