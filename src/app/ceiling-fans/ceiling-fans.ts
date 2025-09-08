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
  selector: 'app-ceiling-fans',
  imports: [CommonModule, FormsModule],
  templateUrl: './ceiling-fans.html',
  styleUrl: './ceiling-fans.css'
})
export class CeilingFans {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'Anchor',
      name: 'Anchor Electricals Pvt Ltd',
      image: 'anchor.png',
      title: 'Electricals',
      contactName: 'Amit Sharma',
      mobile: '9811111001',
      whatsapp: '9811111001',
      landline: '01122334455',
      email: 'support@anchor.in',
      website: 'www.anchor.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, Wires, Lights'
    },
    {
      id: 2,
      brandname: 'Atomberg',
      name: 'Atomberg Technologies Pvt Ltd',
      image: 'atomberg.png',
      title: 'Home Appliances',
      contactName: 'Ravi Verma',
      mobile: '9811111002',
      whatsapp: '9811111002',
      landline: '02233445566',
      email: 'support@atomberg.com',
      website: 'www.atomberg.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Smart Appliances'
    },
    {
      id: 3,
      brandname: 'Bajaj',
      name: 'Bajaj Electricals Ltd',
      image: 'bajaj.png',
      title: 'Home Appliances',
      contactName: 'Pooja Singh',
      mobile: '9811111003',
      whatsapp: '9811111003',
      landline: '02244556677',
      email: 'support@bajajelectricals.com',
      website: 'www.bajajelectricals.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lights, Appliances'
    },
    {
      id: 4,
      brandname: 'Breezalit',
      name: 'Breezalit Appliances Pvt Ltd',
      image: 'breezalit.png',
      title: 'Cooling Appliances',
      contactName: 'Arun Gupta',
      mobile: '9811111004',
      whatsapp: '9811111004',
      landline: '01155667788',
      email: 'support@breezalit.com',
      website: 'www.breezalit.com',
      address: 'New Delhi',
      dealing: 'Fans, Coolers'
    },
    {
      id: 5,
      brandname: 'Candes',
      name: 'Candes Innovations Pvt Ltd',
      image: 'candes.png',
      title: 'Electricals',
      contactName: 'Ritika Mehta',
      mobile: '9811111005',
      whatsapp: '9811111005',
      landline: '01204567890',
      email: 'support@candesworld.com',
      website: 'www.candesworld.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Heaters, Appliances'
    },
    {
      id: 6,
      brandname: 'Crompton',
      name: 'Crompton Greaves Consumer Electricals Ltd',
      image: 'crompton.png',
      title: 'Electricals',
      contactName: 'Vikram Joshi',
      mobile: '9811111006',
      whatsapp: '9811111006',
      landline: '02266778899',
      email: 'support@cromptongreaves.com',
      website: 'www.cromptongreaves.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Lights, Appliances'
    },
    {
      id: 7,
      brandname: 'Eveready',
      name: 'Eveready Industries India Ltd',
      image: 'eveready.png',
      title: 'Electricals',
      contactName: 'Suman Chakraborty',
      mobile: '9811111007',
      whatsapp: '9811111007',
      landline: '03333445566',
      email: 'support@eveready.com',
      website: 'www.eveready.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Batteries, Lights, Appliances'
    },
    {
      id: 8,
      brandname: 'Finolex',
      name: 'Finolex Cables Ltd',
      image: 'finolex.png',
      title: 'Electricals',
      contactName: 'Rahul Deshmukh',
      mobile: '9811111008',
      whatsapp: '9811111008',
      landline: '02022334455',
      email: 'support@finolex.com',
      website: 'www.finolex.com',
      address: 'Pune, Maharashtra',
      dealing: 'Cables, Wires, Switches'
    },
    {
      id: 9,
      brandname: 'GM',
      name: 'GM Modular Pvt Ltd',
      image: 'gm.png',
      title: 'Electricals',
      contactName: 'Deepak Malhotra',
      mobile: '9811111009',
      whatsapp: '9811111009',
      landline: '02244556699',
      email: 'support@gmmodular.com',
      website: 'www.gmmodular.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, Lights, Fans'
    },
    {
      id: 10,
      brandname: 'Goldmedal',
      name: 'Goldmedal Electricals Pvt Ltd',
      image: 'goldmedal.png',
      title: 'Electricals',
      contactName: 'Ananya Jain',
      mobile: '9811111010',
      whatsapp: '9811111010',
      landline: '02255667700',
      email: 'support@goldmedalindia.com',
      website: 'www.goldmedalindia.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Switches, Wires, Fans'
    },
    {
      id: 11,
      brandname: 'Halonix',
      name: 'Halonix Technologies Pvt Ltd',
      image: 'halonix.png',
      title: 'Lighting',
      contactName: 'Manoj Kumar',
      mobile: '9811111011',
      whatsapp: '9811111011',
      landline: '01206677888',
      email: 'support@halonix.co.in',
      website: 'www.halonix.co.in',
      address: 'Noida, Uttar Pradesh',
      dealing: 'LED Lights, Bulbs, Fans'
    },
    {
      id: 12,
      brandname: 'Havells',
      name: 'Havells India Ltd',
      image: 'havells.png',
      title: 'Electricals',
      contactName: 'Rakesh Sharma',
      mobile: '9811111012',
      whatsapp: '9811111012',
      landline: '01204455677',
      email: 'support@havells.com',
      website: 'www.havells.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Fans, Switches, Lights, Appliances'
    },
    {
      id: 13,
      brandname: 'Indo',
      name: 'Indo Asian Pvt Ltd',
      image: 'indo.png',
      title: 'Electricals',
      contactName: 'Neha Kapoor',
      mobile: '9811111013',
      whatsapp: '9811111013',
      landline: '01122335544',
      email: 'support@indoasian.com',
      website: 'www.indoasian.com',
      address: 'New Delhi',
      dealing: 'Switchgear, Lights'
    },
    {
      id: 14,
      brandname: 'Jupiter',
      name: 'Jupiter Electricals Pvt Ltd',
      image: 'jupiter.png',
      title: 'Fans & Appliances',
      contactName: 'Vijay Patil',
      mobile: '9811111014',
      whatsapp: '9811111014',
      landline: '02033446677',
      email: 'support@jupiterfans.com',
      website: 'www.jupiterfans.com',
      address: 'Pune, Maharashtra',
      dealing: 'Fans, Appliances'
    },
    {
      id: 15,
      brandname: 'Khaitan',
      name: 'Khaitan Electricals Ltd',
      image: 'khaitan.png',
      title: 'Home Appliances',
      contactName: 'Sunil Khaitan',
      mobile: '9811111015',
      whatsapp: '9811111015',
      landline: '03333445577',
      email: 'support@khaitan.com',
      website: 'www.khaitan.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Appliances, Lights'
    },
    {
      id: 16,
      brandname: 'Kuhl',
      name: 'Kuhl Fans Pvt Ltd',
      image: 'kuhl.png',
      title: 'Fans',
      contactName: 'Ashok Nair',
      mobile: '9811111016',
      whatsapp: '9811111016',
      landline: '02255668899',
      email: 'support@kuhlfans.com',
      website: 'www.kuhlfans.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Premium Fans'
    },
    {
      id: 17,
      brandname: 'Luker',
      name: 'Luker Electric Technologies Pvt Ltd',
      image: 'luker.png',
      title: 'Lighting',
      contactName: 'Rohit Menon',
      mobile: '9811111017',
      whatsapp: '9811111017',
      landline: '04842233445',
      email: 'support@lukerindia.com',
      website: 'www.lukerindia.com',
      address: 'Kochi, Kerala',
      dealing: 'LED Lights, Smart Lights'
    },
    {
      id: 18,
      brandname: 'Luminous',
      name: 'Luminous Power Technologies Pvt Ltd',
      image: 'luminous.png',
      title: 'Electricals',
      contactName: 'Ankit Verma',
      mobile: '9811111018',
      whatsapp: '9811111018',
      landline: '01206677899',
      email: 'support@luminousindia.com',
      website: 'www.luminousindia.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Inverters, Batteries, Fans'
    },
    {
      id: 19,
      brandname: 'Orient',
      name: 'Orient Electric Ltd',
      image: 'orient.png',
      title: 'Home Appliances',
      contactName: 'Siddharth Gupta',
      mobile: '9811111019',
      whatsapp: '9811111019',
      landline: '01133445599',
      email: 'support@orientelectric.com',
      website: 'www.orientelectric.com',
      address: 'New Delhi',
      dealing: 'Fans, Lights, Switchgear'
    },
    {
      id: 20,
      brandname: 'Oreva',
      name: 'Oreva Group',
      image: 'oreva.png',
      title: 'Electricals',
      contactName: 'Bhavesh Patel',
      mobile: '9811111020',
      whatsapp: '9811111020',
      landline: '02772233445',
      email: 'support@oreva.com',
      website: 'www.oreva.com',
      address: 'Ahmedabad, Gujarat',
      dealing: 'Lights, Fans, Appliances'
    },
    {
      id: 21,
      brandname: 'Orpat',
      name: 'Orpat Group',
      image: 'orpat.png',
      title: 'Home Appliances',
      contactName: 'Jignesh Patel',
      mobile: '9811111021',
      whatsapp: '9811111021',
      landline: '02772233446',
      email: 'support@orpatgroup.com',
      website: 'www.orpatgroup.com',
      address: 'Gujarat, India',
      dealing: 'Fans, Appliances, Switches'
    },
    {
      id: 22,
      brandname: 'Ortem',
      name: 'Ortem Ltd',
      image: 'ortem.png',
      title: 'Fans',
      contactName: 'Mahesh Yadav',
      mobile: '9811111022',
      whatsapp: '9811111022',
      landline: '01122446688',
      email: 'support@ortemfans.com',
      website: 'www.ortemfans.com',
      address: 'New Delhi',
      dealing: 'Ceiling Fans, Table Fans'
    },
    {
      id: 23,
      brandname: 'Ottomate',
      name: 'Ottomate International Pvt Ltd',
      image: 'ottomate.png',
      title: 'Smart Fans',
      contactName: 'Ravi Kumar',
      mobile: '9811111023',
      whatsapp: '9811111023',
      landline: '02033445566',
      email: 'support@ottomatefans.com',
      website: 'www.ottomatefans.com',
      address: 'Pune, Maharashtra',
      dealing: 'Smart Fans, IoT Appliances'
    },
    {
      id: 24,
      brandname: 'Polar',
      name: 'Polar India',
      image: 'polar.png',
      title: 'Fans & Appliances',
      contactName: 'Rajesh Sinha',
      mobile: '9811111024',
      whatsapp: '9811111024',
      landline: '03322334455',
      email: 'support@polarindia.com',
      website: 'www.polarindia.com',
      address: 'Kolkata, West Bengal',
      dealing: 'Fans, Home Appliances'
    },
    {
      id: 25,
      brandname: 'Polycab',
      name: 'Polycab India Ltd',
      image: 'polycab.png',
      title: 'Wires & Cables',
      contactName: 'Ramesh Patel',
      mobile: '9811111025',
      whatsapp: '9811111025',
      landline: '02222335566',
      email: 'support@polycab.com',
      website: 'www.polycab.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Wires, Cables, Fans, Switches'
    },
    {
      id: 26,
      brandname: 'Remi',
      name: 'Remi Group',
      image: 'remi.png',
      title: 'Fans & Appliances',
      contactName: 'Vikas Jain',
      mobile: '9811111026',
      whatsapp: '9811111026',
      landline: '02233446677',
      email: 'support@remigroup.com',
      website: 'www.remigroup.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Fans, Appliances, Motors'
    },
    {
      id: 27,
      brandname: 'RR',
      name: 'RR Kabel',
      image: 'rr.png',
      title: 'Electricals',
      contactName: 'Pradeep Sharma',
      mobile: '9811111027',
      whatsapp: '9811111027',
      landline: '02244556677',
      email: 'support@rrkabel.com',
      website: 'www.rrkabel.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'Cables, Wires, Fans'
    },
    {
      id: 28,
      brandname: 'Standard',
      name: 'Standard Electricals',
      image: 'standard.png',
      title: 'Electricals',
      contactName: 'Nitin Mehra',
      mobile: '9811111028',
      whatsapp: '9811111028',
      landline: '01204455678',
      email: 'support@standardelectricals.com',
      website: 'www.standardelectricals.com',
      address: 'Noida, Uttar Pradesh',
      dealing: 'Switches, Fans, Lights'
    },
    {
      id: 29,
      brandname: 'Sujata',
      name: 'Sujata Appliances Pvt Ltd',
      image: 'sujata.png',
      title: 'Appliances',
      contactName: 'Amit Khanna',
      mobile: '9811111029',
      whatsapp: '9811111029',
      landline: '01122334466',
      email: 'support@sujataappliances.com',
      website: 'www.sujataappliances.com',
      address: 'New Delhi',
      dealing: 'Mixers, Appliances'
    },
    {
      id: 30,
      brandname: 'SuperFan',
      name: 'Superfan Pvt Ltd',
      image: 'superfan.png',
      title: 'Fans',
      contactName: 'Ganesh Subramanian',
      mobile: '9811111030',
      whatsapp: '9811111030',
      landline: '04422334455',
      email: 'support@superfan.in',
      website: 'www.superfan.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Energy Efficient Fans'
    },
    {
      id: 31,
      brandname: 'Surya',
      name: 'Surya Roshni Ltd',
      image: 'surya.png',
      title: 'Electricals',
      contactName: 'Deepak Arora',
      mobile: '9811111031',
      whatsapp: '9811111031',
      landline: '01133445566',
      email: 'support@suryaroshnilighting.com',
      website: 'www.surya.co.in',
      address: 'New Delhi',
      dealing: 'Lights, Fans, Appliances'
    },
    {
      id: 32,
      brandname: 'Syska',
      name: 'Syska LED Lights Pvt Ltd',
      image: 'syska.png',
      title: 'Lighting & Appliances',
      contactName: 'Ajay Mehta',
      mobile: '9811111032',
      whatsapp: '9811111032',
      landline: '02022334455',
      email: 'support@syska.co.in',
      website: 'www.syska.co.in',
      address: 'Pune, Maharashtra',
      dealing: 'LED, Fans, Appliances'
    },
    {
      id: 33,
      brandname: 'Usha',
      name: 'Usha International Ltd',
      image: 'usha.png',
      title: 'Home Appliances',
      contactName: 'Kiran Bedi',
      mobile: '9811111033',
      whatsapp: '9811111033',
      landline: '01122334477',
      email: 'support@usha.com',
      website: 'www.usha.com',
      address: 'Gurgaon, Haryana',
      dealing: 'Fans, Sewing Machines, Appliances'
    },
    {
      id: 34,
      brandname: 'V Guard',
      name: 'V-Guard Industries Ltd',
      image: 'vguard.png',
      title: 'Electricals',
      contactName: 'Suresh Menon',
      mobile: '9811111034',
      whatsapp: '9811111034',
      landline: '04842233446',
      email: 'support@vguard.in',
      website: 'www.vguard.in',
      address: 'Kochi, Kerala',
      dealing: 'Stabilizers, Fans, Inverters'
    },
    {
      id: 35,
      brandname: 'Venus',
      name: 'Venus Home Appliances Pvt Ltd',
      image: 'venus.png',
      title: 'Appliances',
      contactName: 'Anil Rao',
      mobile: '9811111035',
      whatsapp: '9811111035',
      landline: '04433445566',
      email: 'support@venushomeappliances.com',
      website: 'www.venushomeappliances.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Water Heaters, Appliances'
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
