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
  selector: 'app-air-conditioners',
  imports: [CommonModule, FormsModule],
  templateUrl: './air-conditioners.html',
  styleUrl: './air-conditioners.css'
})
export class AirConditioners {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'Blue Star',
        name: 'Blue Star Ltd',
        image: 'bluestar.png',
        title: 'Air Conditioners & Cooling Solutions',
        contactName: 'Rohit Malhotra',
        mobile: '9811001100',
        whatsapp: '9811001100',
        landline: '01140001100',
        email: 'support@bluestarindia.com',
        website: 'www.bluestarindia.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Air Conditioners, Commercial Cooling'
      },
      {
        id: 2,
        brandname: 'BPL',
        name: 'BPL Limited',
        image: 'bpl.png',
        title: 'Electronics & Appliances',
        contactName: 'Anjali Verma',
        mobile: '9811012200',
        whatsapp: '9811012200',
        landline: '0801234567',
        email: 'support@bpl.in',
        website: 'www.bpl.in',
        address: 'Bangalore, Karnataka',
        dealing: 'TV, Refrigerator, Washing Machine'
      },
      {
        id: 3,
        brandname: 'Carrier',
        name: 'Carrier India',
        image: 'carrier.png',
        title: 'Air Conditioners',
        contactName: 'Vikas Kumar',
        mobile: '9811023300',
        whatsapp: '9811023300',
        landline: '01122334455',
        email: 'support@carrierindia.com',
        website: 'www.carrierindia.com',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners, Cooling Systems'
      },
      {
        id: 4,
        brandname: 'Cruise',
        name: 'Cruise Appliances',
        image: 'cruise.png',
        title: 'Cooling Appliances',
        contactName: 'Simran Kaur',
        mobile: '9811034400',
        whatsapp: '9811034400',
        landline: '02244556677',
        email: 'support@cruiseac.com',
        website: 'www.cruiseac.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Air Conditioners'
      },
      {
        id: 5,
        brandname: 'Daikin',
        name: 'Daikin Airconditioning India Pvt Ltd',
        image: 'daikin.png',
        title: 'Air Conditioning Solutions',
        contactName: 'Karan Mehta',
        mobile: '9811045500',
        whatsapp: '9811045500',
        landline: '01246789012',
        email: 'support@daikinindia.com',
        website: 'www.daikinindia.com',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners, Cooling Systems'
      },
      {
        id: 6,
        brandname: 'Electrolux',
        name: 'Electrolux India',
        image: 'electrolux.png',
        title: 'Home Appliances',
        contactName: 'Priya Nair',
        mobile: '9811056600',
        whatsapp: '9811056600',
        landline: '02212349876',
        email: 'support@electrolux.in',
        website: 'www.electrolux.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Refrigerators, Ovens, Washing Machines'
      },
      {
        id: 7,
        brandname: 'GE',
        name: 'GE Appliances India',
        image: 'ge.png',
        title: 'Home Appliances',
        contactName: 'Rajeev Sinha',
        mobile: '9811067700',
        whatsapp: '9811067700',
        landline: '01198765432',
        email: 'support@geappliances.in',
        website: 'www.geappliances.com',
        address: 'Delhi, India',
        dealing: 'Refrigerators, Washing Machines'
      },
      {
        id: 8,
        brandname: 'Godrej',
        name: 'Godrej Appliances',
        image: 'godrej.png',
        title: 'Home & Kitchen Appliances',
        contactName: 'Neha Gupta',
        mobile: '9811078800',
        whatsapp: '9811078800',
        landline: '02225188000',
        email: 'support@godrej.com',
        website: 'www.godrejappliances.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Refrigerators, Washing Machines, ACs'
      },
      {
        id: 9,
        brandname: 'GREE',
        name: 'GREE India',
        image: 'gree.png',
        title: 'Air Conditioning Solutions',
        contactName: 'Amit Sharma',
        mobile: '9811089900',
        whatsapp: '9811089900',
        landline: '01241112233',
        email: 'support@greeindia.com',
        website: 'www.greeindia.com',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners'
      },
      {
        id: 10,
        brandname: 'Haier',
        name: 'Haier Appliances India',
        image: 'haier.png',
        title: 'Home Appliances',
        contactName: 'Shalini Kapoor',
        mobile: '9811099900',
        whatsapp: '9811099900',
        landline: '01122335566',
        email: 'support@haierindia.com',
        website: 'www.haier.com/in',
        address: 'New Delhi, India',
        dealing: 'Refrigerators, Washing Machines, ACs'
      },
      {
        id: 11,
        brandname: 'Hitachi',
        name: 'Hitachi Cooling & Heating India',
        image: 'hitachi.png',
        title: 'Cooling & Heating Solutions',
        contactName: 'Ramesh Yadav',
        mobile: '9811101100',
        whatsapp: '9811101100',
        landline: '01242345678',
        email: 'support@hitachi-hli.com',
        website: 'www.hitachi-hli.com',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners, Refrigerators'
      },
      {
        id: 12,
        brandname: 'IFB',
        name: 'IFB Industries Ltd',
        image: 'ifb.png',
        title: 'Home & Kitchen Appliances',
        contactName: 'Aarti Deshmukh',
        mobile: '9811112200',
        whatsapp: '9811112200',
        landline: '03340005000',
        email: 'support@ifbappliances.com',
        website: 'www.ifbappliances.com',
        address: 'Kolkata, West Bengal',
        dealing: 'Washing Machines, Microwave, Dishwasher'
      },
      {
        id: 13,
        brandname: 'Intex',
        name: 'Intex Technologies',
        image: 'intex.png',
        title: 'Consumer Electronics & Appliances',
        contactName: 'Deepak Arora',
        mobile: '9811123300',
        whatsapp: '9811123300',
        landline: '01123456789',
        email: 'support@intex.in',
        website: 'www.intex.in',
        address: 'New Delhi, India',
        dealing: 'TV, Refrigerators, Home Appliances'
      },
      {
        id: 14,
        brandname: 'Kelvinator',
        name: 'Kelvinator India',
        image: 'kelvinator.png',
        title: 'Home Appliances',
        contactName: 'Manish Gupta',
        mobile: '9811134400',
        whatsapp: '9811134400',
        landline: '02233445566',
        email: 'support@kelvinator.in',
        website: 'www.kelvinator.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Refrigerators, Washing Machines, ACs'
      },
      {
        id: 15,
        brandname: 'Kenstar',
        name: 'Kenstar Appliances',
        image: 'kenstar.png',
        title: 'Kitchen & Home Appliances',
        contactName: 'Sonali Mishra',
        mobile: '9811145500',
        whatsapp: '9811145500',
        landline: '02222334455',
        email: 'support@kenstar.in',
        website: 'www.kenstar.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Mixer, Microwave, Washing Machines'
      },
      {
        id: 16,
        brandname: 'LG',
        name: 'LG Electronics India',
        image: 'lg.png',
        title: 'Home & Consumer Electronics',
        contactName: 'Ajay Sharma',
        mobile: '9811156600',
        whatsapp: '9811156600',
        landline: '08012345566',
        email: 'support@lgindia.com',
        website: 'www.lg.com/in',
        address: 'Greater Noida, Uttar Pradesh',
        dealing: 'TV, Refrigerator, AC, Washing Machine'
      },
      {
        id: 17,
        brandname: 'Lloyd',
        name: 'Lloyd Electric & Engineering',
        image: 'lloyd.png',
        title: 'Air Conditioners & Appliances',
        contactName: 'Rohini Patel',
        mobile: '9811167700',
        whatsapp: '9811167700',
        landline: '01122334477',
        email: 'support@lloyd.com',
        website: 'www.mylloyd.com',
        address: 'Delhi, India',
        dealing: 'Air Conditioners, LED TV, Washing Machines'
      },
      {
        id: 18,
        brandname: 'Midea',
        name: 'Midea India',
        image: 'midea.png',
        title: 'Cooling & Appliances',
        contactName: 'Vikram Joshi',
        mobile: '9811178800',
        whatsapp: '9811178800',
        landline: '01242345679',
        email: 'support@midea.in',
        website: 'www.midea.com/in',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners, Home Appliances'
      },
      {
        id: 19,
        brandname: 'Micromax',
        name: 'Micromax Informatics',
        image: 'micromax.png',
        title: 'Electronics & Appliances',
        contactName: 'Ritu Malhotra',
        mobile: '9811189900',
        whatsapp: '9811189900',
        landline: '01140001234',
        email: 'support@micromaxinfo.com',
        website: 'www.micromaxinfo.com',
        address: 'Gurgaon, Haryana',
        dealing: 'TV, Washing Machine, Refrigerator'
      },
      {
        id: 20,
        brandname: 'Mitashi',
        name: 'Mitashi Edutainment Ltd',
        image: 'mitashi.png',
        title: 'Consumer Electronics',
        contactName: 'Harsh Vora',
        mobile: '9811191100',
        whatsapp: '9811191100',
        landline: '02222003344',
        email: 'support@mitashi.com',
        website: 'www.mitashi.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'TV, Refrigerators, Electronics'
      },
      {
        id: 21,
        brandname: 'Mitsubishi',
        name: 'Mitsubishi Electric India',
        image: 'mitsubishi.png',
        title: 'Cooling & Electrical Solutions',
        contactName: 'Nidhi Bansal',
        mobile: '9811202200',
        whatsapp: '9811202200',
        landline: '01246789013',
        email: 'support@mitsubishielectric.in',
        website: 'www.mitsubishielectric.in',
        address: 'Gurgaon, Haryana',
        dealing: 'Air Conditioners, Refrigeration, Elevators'
      },
      {
        id: 22,
        brandname: 'O General',
        name: 'Fujitsu General (India)',
        image: 'ogeneral.png',
        title: 'Air Conditioning Solutions',
        contactName: 'Suresh Nair',
        mobile: '9811213300',
        whatsapp: '9811213300',
        landline: '02240001122',
        email: 'support@ogeneral.com',
        website: 'www.ogeneral.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Air Conditioners'
      },
      {
        id: 23,
        brandname: 'Onida',
        name: 'Onida Electronics',
        image: 'onida.png',
        title: 'Electronics & Appliances',
        contactName: 'Tanvi Singh',
        mobile: '9811224400',
        whatsapp: '9811224400',
        landline: '02233445577',
        email: 'support@onida.com',
        website: 'www.onida.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'TV, Refrigerators, ACs'
      },
      {
        id: 24,
        brandname: 'Panasonic',
        name: 'Panasonic India Pvt Ltd',
        image: 'panasonic.png',
        title: 'Home Appliances & Electronics',
        contactName: 'Abhay Kulkarni',
        mobile: '9811235500',
        whatsapp: '9811235500',
        landline: '01241119988',
        email: 'support@in.panasonic.com',
        website: 'www.panasonic.com/in',
        address: 'Gurgaon, Haryana',
        dealing: 'TV, Refrigerator, Washing Machine, AC'
      },
      {
        id: 25,
        brandname: 'Samsung',
        name: 'Samsung India Electronics',
        image: 'samsung.png',
        title: 'Consumer Electronics & Appliances',
        contactName: 'Ankur Bhatia',
        mobile: '9811246600',
        whatsapp: '9811246600',
        landline: '08030003000',
        email: 'support@samsung.com',
        website: 'www.samsung.com/in',
        address: 'Noida, Uttar Pradesh',
        dealing: 'TV, Refrigerator, Mobile, AC, Washing Machine'
      },
      {
        id: 26,
        brandname: 'Sansui',
        name: 'Sansui India',
        image: 'sansui.png',
        title: 'Electronics & Appliances',
        contactName: 'Prerna Jain',
        mobile: '9811257700',
        whatsapp: '9811257700',
        landline: '02212340987',
        email: 'support@sansui.in',
        website: 'www.sansui.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'TV, Washing Machines, Refrigerators'
      },
      {
        id: 27,
        brandname: 'Sanyo',
        name: 'Sanyo India',
        image: 'sanyo.png',
        title: 'Consumer Electronics',
        contactName: 'Akhil Rathi',
        mobile: '9811268800',
        whatsapp: '9811268800',
        landline: '01123456777',
        email: 'support@sanyo.in',
        website: 'www.sanyo.in',
        address: 'New Delhi, India',
        dealing: 'Television, Home Appliances'
      },
      {
        id: 28,
        brandname: 'Toshiba',
        name: 'Toshiba Home Appliances',
        image: 'toshiba.png',
        title: 'Electronics & Appliances',
        contactName: 'Pooja Bhatt',
        mobile: '9811279900',
        whatsapp: '9811279900',
        landline: '01242349876',
        email: 'support@toshiba.in',
        website: 'www.toshiba-lifestyle.com/in',
        address: 'Gurgaon, Haryana',
        dealing: 'Refrigerator, Washing Machine, TV'
      },
      {
        id: 29,
        brandname: 'Vestar',
        name: 'Vestar Appliances',
        image: 'vestar.png',
        title: 'Air Conditioners & Cooling',
        contactName: 'Rahul Menon',
        mobile: '9811281100',
        whatsapp: '9811281100',
        landline: '02222334488',
        email: 'support@vestar.in',
        website: 'www.vestar.in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Air Conditioners'
      },
      {
        id: 30,
        brandname: 'Videocon',
        name: 'Videocon Industries Ltd',
        image: 'videocon.png',
        title: 'Consumer Electronics & Appliances',
        contactName: 'Sneha Kapoor',
        mobile: '9811292200',
        whatsapp: '9811292200',
        landline: '02240001234',
        email: 'support@videocon.com',
        website: 'www.videocon.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'TV, Refrigerator, Washing Machine'
      },
      {
        id: 31,
        brandname: 'Voltas',
        name: 'Voltas Ltd',
        image: 'voltas.png',
        title: 'Cooling & Home Appliances',
        contactName: 'Anil Chatterjee',
        mobile: '9811303300',
        whatsapp: '9811303300',
        landline: '02266656666',
        email: 'support@voltas.com',
        website: 'www.voltas.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Air Conditioners, Refrigerators, Washing Machines'
      },
      {
        id: 32,
        brandname: 'Whirlpool',
        name: 'Whirlpool of India Ltd',
        image: 'whirlpool.png',
        title: 'Home & Kitchen Appliances',
        contactName: 'Kavita Joshi',
        mobile: '9811314400',
        whatsapp: '9811314400',
        landline: '18002081800',
        email: 'support@whirlpool.com',
        website: 'www.whirlpoolindia.com',
        address: 'Pune, Maharashtra',
        dealing: 'Refrigerator, Washing Machine, Microwave, AC'
      }            
      // Add more brands as needed
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
