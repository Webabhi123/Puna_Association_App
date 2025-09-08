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
  selector: 'app-modular-switches',
  imports: [CommonModule,FormsModule],
  templateUrl: './modular-switches.html',
  styleUrl: './modular-switches.css'
})
export class ModularSwitches {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ABB',
      name: 'ABB',
      image: 'assets/brands-logo/abb-logo.png',
      title: 'ABB India',
      contactName: 'Amit Kumar',
      mobile: '9876543100',
      whatsapp: '9876543100',
      landline: '020-1234500',
      email: 'info@abb.com',
      website: 'www.abb.com/in',
      address: 'Bangalore, Karnataka',
      dealing: 'Electrification and automation solutions'
    },
    {
      id: 2,
      brandname: 'Amron',
      name: 'Amron',
      image: 'assets/brands-logo/amron-logo.png',
      title: 'Amron Batteries',
      contactName: 'Ravi Patel',
      mobile: '9876543101',
      whatsapp: '9876543101',
      landline: '020-1234501',
      email: 'support@amron.com',
      website: 'www.amronbatteries.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automotive and inverter batteries'
    },
    {
      id: 3,
      brandname: 'Bosch',
      name: 'Bosch',
      image: 'assets/brands-logo/bosch-logo.png',
      title: 'Bosch India',
      contactName: 'Priya Sharma',
      mobile: '9876543102',
      whatsapp: '9876543102',
      landline: '020-1234502',
      email: 'contact@bosch.in',
      website: 'www.bosch.in',
      address: 'Bangalore, Karnataka',
      dealing: 'Power tools, appliances, and automotive components'
    },
    {
      id: 4,
      brandname: 'C&S',
      name: 'C&S',
      image: 'assets/brands-logo/cs-logo.png',
      title: 'C&S Electric',
      contactName: 'Suresh Kumar',
      mobile: '9876543103',
      whatsapp: '9876543103',
      landline: '020-1234503',
      email: 'info@cselectric.com',
      website: 'www.cselectric.co.in',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Switchgear and power management products'
    },
    {
      id: 5,
      brandname: 'Cona',
      name: 'Cona',
      image: 'assets/brands-logo/cona-logo.png',
      title: 'Cona Switches',
      contactName: 'Deepak Singh',
      mobile: '9876543104',
      whatsapp: '9876543104',
      landline: '020-1234504',
      email: 'sales@cona.com',
      website: 'www.conaswitches.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, sockets, and electrical accessories'
    },
    {
      id: 6,
      brandname: 'Corum',
      name: 'Corum',
      image: 'assets/brands-logo/corum-logo.png',
      title: 'Corum Electricals',
      contactName: 'Vikram Desai',
      mobile: '9876543105',
      whatsapp: '9876543105',
      landline: '020-1234505',
      email: 'info@corum.in',
      website: 'www.corum.in',
      address: 'Pune, Maharashtra',
      dealing: 'Wiring devices and electrical solutions'
    },
    {
      id: 7,
      brandname: 'Elleys',
      name: 'Elleys',
      image: 'assets/brands-logo/elleys-logo.png',
      title: 'Elleys Electricals',
      contactName: 'Neha Verma',
      mobile: '9876543106',
      whatsapp: '9876543106',
      landline: '020-1234506',
      email: 'support@elleys.com',
      website: 'www.elleys.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Switches, MCBs, and electrical solutions'
    },
    {
      id: 8,
      brandname: 'Finolex',
      name: 'Finolex',
      image: 'assets/brands-logo/finolex-logo.png',
      title: 'Finolex Cables',
      contactName: 'Rahul Nair',
      mobile: '9876543107',
      whatsapp: '9876543107',
      landline: '020-1234507',
      email: 'info@finolex.com',
      website: 'www.finolex.com',
      address: 'Pune, Maharashtra',
      dealing: 'Cables, wires, and electrical solutions'
    },
    {
      id: 9,
      brandname: 'Fybros',
      name: 'Fybros',
      image: 'assets/brands-logo/fybros-logo.png',
      title: 'Fybros Wires',
      contactName: 'Alok Pandey',
      mobile: '9876543108',
      whatsapp: '9876543108',
      landline: '020-1234508',
      email: 'sales@fybros.com',
      website: 'www.fybros.com',
      address: 'Delhi',
      dealing: 'Wires, cables, and lighting solutions'
    },
    {
      id: 10,
      brandname: 'GM',
      name: 'GM',
      image: 'assets/brands-logo/gm-logo.png',
      title: 'GM Modular',
      contactName: 'Sanjay Gupta',
      mobile: '9876543109',
      whatsapp: '9876543109',
      landline: '020-1234509',
      email: 'info@gmmodular.com',
      website: 'www.gmmodular.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Modular switches and home automation'
    },
    {
      id: 11,
      brandname: 'Gold Medal',
      name: 'Gold Medal',
      image: 'assets/brands-logo/goldmedal-logo.png',
      title: 'Gold Medal Electricals',
      contactName: 'Manish Mehta',
      mobile: '9876543110',
      whatsapp: '9876543110',
      landline: '020-1234510',
      email: 'support@goldmedalindia.com',
      website: 'www.goldmedalindia.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, LEDs, and home automation'
    },
    {
      id: 12,
      brandname: 'Hi Fi',
      name: 'Hi Fi',
      image: 'assets/brands-logo/hifi-logo.png',
      title: 'Hi Fi Electricals',
      contactName: 'Ajay Kulkarni',
      mobile: '9876543111',
      whatsapp: '9876543111',
      landline: '020-1234511',
      email: 'info@hifielectricals.com',
      website: 'www.hifielectricals.com',
      address: 'Pune, Maharashtra',
      dealing: 'Switchgear and wiring devices'
    },
    {
      id: 13,
      brandname: 'Indoasian',
      name: 'Indoasian',
      image: 'assets/brands-logo/indoasian-logo.png',
      title: 'Indoasian Electricals',
      contactName: 'Mohit Sinha',
      mobile: '9876543112',
      whatsapp: '9876543112',
      landline: '020-1234512',
      email: 'sales@indoasian.com',
      website: 'www.indoasian.com',
      address: 'Delhi',
      dealing: 'Switchgear and electrical distribution solutions'
    },
    {
      id: 14,
      brandname: 'Kolors',
      name: 'Kolors',
      image: 'assets/brands-logo/kolors-logo.png',
      title: 'Kolors Electricals',
      contactName: 'Pooja Joshi',
      mobile: '9876543113',
      whatsapp: '9876543113',
      landline: '020-1234513',
      email: 'contact@kolors.com',
      website: 'www.kolors.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches and wiring devices'
    },
    {
    id: 15,
    brandname: 'L&T',
    name: 'L&T',
    image: 'assets/brands-logo/lt-logo.png',
    title: 'L&T Electrical & Automation',
    contactName: 'Sanjay Kulkarni',
    mobile: '9876543225',
    whatsapp: '9876543225',
    landline: '022-1234576',
    email: 'support@larsentoubro.com',
    website: 'www.lntebg.com',
    address: 'Mumbai, Maharashtra',
    dealing: 'Switchgear and automation solutions'
  },
  {
    id: 16,
    brandname: 'Legrand',
    name: 'Legrand',
    image: 'assets/brands-logo/legrand-logo.png',
    title: 'Legrand India',
    contactName: 'Vikas Sharma',
    mobile: '9876543226',
    whatsapp: '9876543226',
    landline: '022-1234577',
    email: 'info@legrand.co.in',
    website: 'www.legrand.co.in',
    address: 'Pune, Maharashtra',
    dealing: 'Switches, wiring devices and automation'
  },
  {
    id: 17,
    brandname: 'Lisha',
    name: 'Lisha',
    image: 'assets/brands-logo/lisha-logo.png',
    title: 'Lisha Electricals',
    contactName: 'Manoj Patil',
    mobile: '9876543227',
    whatsapp: '9876543227',
    landline: '080-1234578',
    email: 'sales@lisha.in',
    website: 'www.lisha.in',
    address: 'Bengaluru, Karnataka',
    dealing: 'Switchgear and electrical accessories'
  },
  {
    id: 18,
    brandname: 'Luminous',
    name: 'Luminous',
    image: 'assets/brands-logo/luminous-logo.png',
    title: 'Luminous Power Technologies',
    contactName: 'Ravi Mehta',
    mobile: '9876543228',
    whatsapp: '9876543228',
    landline: '011-1234579',
    email: 'help@luminousindia.com',
    website: 'www.luminousindia.com',
    address: 'Gurgaon, Haryana',
    dealing: 'Inverters, batteries, and electrical solutions'
  },
  {
    id: 19,
    brandname: 'MK',
    name: 'MK',
    image: 'assets/brands-logo/mk-logo.png',
    title: 'MK Electric',
    contactName: 'Deepak Joshi',
    mobile: '9876543229',
    whatsapp: '9876543229',
    landline: '020-1234580',
    email: 'support@mk-electric.in',
    website: 'www.mkelectric.com',
    address: 'Pune, Maharashtra',
    dealing: 'Wiring devices and control systems'
  },
  {
    id: 20,
    brandname: 'Norisys',
    name: 'Norisys',
    image: 'assets/brands-logo/norisys-logo.png',
    title: 'Norisys Technology',
    contactName: 'Pooja Reddy',
    mobile: '9876543230',
    whatsapp: '9876543230',
    landline: '011-1234581',
    email: 'info@norisys.com',
    website: 'www.norisys.com',
    address: 'New Delhi',
    dealing: 'Switches and modular electrical systems'
  },
  {
    id: 21,
    brandname: 'Orpat',
    name: 'Orpat',
    image: 'assets/brands-logo/orpat-logo.png',
    title: 'Orpat Group',
    contactName: 'Rajesh Kumar',
    mobile: '9876543231',
    whatsapp: '9876543231',
    landline: '079-1234582',
    email: 'contact@orpatgroup.com',
    website: 'www.orpatgroup.com',
    address: 'Gujarat, India',
    dealing: 'Electrical appliances and switches'
  },
  {
    id: 22,
    brandname: 'Philips',
    name: 'Philips',
    image: 'assets/brands-logo/philips-logo.png',
    title: 'Philips India',
    contactName: 'Ashok Nair',
    mobile: '9876543232',
    whatsapp: '9876543232',
    landline: '022-1234583',
    email: 'support@philips.co.in',
    website: 'www.philips.co.in',
    address: 'Mumbai, Maharashtra',
    dealing: 'Lighting, electricals, and appliances'
  },
  {
    id: 23,
    brandname: 'Polycab',
    name: 'Polycab',
    image: 'assets/brands-logo/polycab-logo.png',
    title: 'Polycab India Ltd.',
    contactName: 'Suresh Pawar',
    mobile: '9876543233',
    whatsapp: '9876543233',
    landline: '022-1234584',
    email: 'care@polycab.com',
    website: 'www.polycab.com',
    address: 'Mumbai, Maharashtra',
    dealing: 'Wires, cables, and electrical solutions'
  },
  {
    id: 24,
    brandname: 'RR Kabel',
    name: 'RR Kabel',
    image: 'assets/brands-logo/rrkabel-logo.png',
    title: 'RR Kabel Ltd.',
    contactName: 'Nitin Desai',
    mobile: '9876543234',
    whatsapp: '9876543234',
    landline: '022-1234585',
    email: 'info@rrkabel.com',
    website: 'www.rrkabel.com',
    address: 'Mumbai, Maharashtra',
    dealing: 'Cables and wires manufacturing'
  },
  {
    id: 25,
    brandname: 'Vihan',
    name: 'Vihan',
    image: 'assets/brands-logo/vihan-logo.png',
    title: 'Vihan Electricals',
    contactName: 'Ajay Gupta',
    mobile: '9876543235',
    whatsapp: '9876543235',
    landline: '079-1234586',
    email: 'support@vihan.in',
    website: 'www.vihan.in',
    address: 'Ahmedabad, Gujarat',
    dealing: 'Switches and electrical fittings'
  },
  {
    id: 26,
    brandname: 'Vinay',
    name: 'Vinay',
    image: 'assets/brands-logo/vinay-logo.png',
    title: 'Vinay Electricals',
    contactName: 'Ketan Shah',
    mobile: '9876543236',
    whatsapp: '9876543236',
    landline: '022-1234587',
    email: 'info@vinayelectricals.com',
    website: 'www.vinayelectricals.com',
    address: 'Mumbai, Maharashtra',
    dealing: 'Wiring devices and switchgear'
  },
  {
    id: 27,
    brandname: 'Wipro',
    name: 'Wipro',
    image: 'assets/brands-logo/wipro-logo.png',
    title: 'Wipro Lighting',
    contactName: 'Sneha Deshmukh',
    mobile: '9876543237',
    whatsapp: '9876543237',
    landline: '020-1234588',
    email: 'lighting.support@wipro.com',
    website: 'www.wiprolighting.com',
    address: 'Pune, Maharashtra',
    dealing: 'Lighting and electrical solutions'
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
