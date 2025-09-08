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
  selector: 'app-base-material-wires',
  imports: [CommonModule,FormsModule],
  templateUrl: './base-material-wires.html',
  styleUrl: './base-material-wires.css'
})
export class BaseMaterialWires {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Copper Wires",
      name: "Copper Electrical Wire",
      image: "CopperWires.jpg",
      title: "High Conductivity Copper Wires",
      contactName: "Amit Sharma",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "020-123456",
      email: "copperwires@company.com",
      website: "www.copperwires.com",
      address: "Plot No. 12, Industrial Area, Pune",
      dealing: "Electrical wiring, power transmission, motor winding wires"
    },
    {
      id: 2,
      brandname: "Aluminum Wires",
      name: "Aluminum Electrical Wire",
      image: "AluminumWires.jpg",
      title: "Durable Aluminum Wires",
      contactName: "Rahul Mehta",
      mobile: "9876501234",
      whatsapp: "9876501234",
      landline: "020-234567",
      email: "aluwires@company.com",
      website: "www.aluminumwires.com",
      address: "Survey No. 45, Pimpri, Pune",
      dealing: "Overhead cables, transformers, industrial wiring"
    },
    {
      id: 3,
      brandname: "Brass Wire",
      name: "Industrial Brass Wire",
      image: "BrassWire.jpg",
      title: "Corrosion Resistant Brass Wire",
      contactName: "Suresh Patil",
      mobile: "9823456789",
      whatsapp: "9823456789",
      landline: "020-654321",
      email: "brasswire@company.com",
      website: "www.brasswire.com",
      address: "MIDC, Chakan, Pune",
      dealing: "Decorative work, electrical connectors, fasteners"
    },
    {
      id: 4,
      brandname: "Titanium Wire",
      name: "Titanium Industrial Wire",
      image: "TitaniumWire.jpg",
      title: "Lightweight Titanium Wire",
      contactName: "Anil Deshmukh",
      mobile: "9865321457",
      whatsapp: "9865321457",
      landline: "020-765432",
      email: "titaniumwire@company.com",
      website: "www.titaniumwire.com",
      address: "Unit No. 7, Industrial Hub, Pune",
      dealing: "Aerospace, chemical, and medical industry applications"
    },
    {
      id: 5,
      brandname: "Silver Wire",
      name: "Pure Silver Wire",
      image: "SilverWire.jpg",
      title: "High Purity Silver Wire",
      contactName: "Rohit Agarwal",
      mobile: "9812345670",
      whatsapp: "9812345670",
      landline: "020-876543",
      email: "silverwire@company.com",
      website: "www.silverwire.com",
      address: "Shivaji Nagar, Pune",
      dealing: "Jewelry, electronics, medical devices"
    },
    {
      id: 6,
      brandname: "Zinc Wire",
      name: "Zinc Metal Wire",
      image: "ZincWire.jpg",
      title: "Premium Zinc Wire",
      contactName: "Sunil Pawar",
      mobile: "9823004567",
      whatsapp: "9823004567",
      landline: "020-334455",
      email: "zincwire@company.com",
      website: "www.zincwire.com",
      address: "Industrial Zone, Bhosari, Pune",
      dealing: "Thermal spraying, galvanizing, corrosion protection"
    },
    {
      id: 7,
      brandname: "Zirconium Wire",
      name: "Zirconium Industrial Wire",
      image: "ZirconiumWire.jpg",
      title: "High Strength Zirconium Wire",
      contactName: "Manish Kulkarni",
      mobile: "9845671230",
      whatsapp: "9845671230",
      landline: "020-556677",
      email: "zirconiumwire@company.com",
      website: "www.zirconiumwire.com",
      address: "Unit 11, Talegaon, Pune",
      dealing: "Nuclear, chemical processing, and aerospace industries"
    },
    {
      id: 8,
      brandname: "Niobium Wire",
      name: "Niobium Alloy Wire",
      image: "NiobiumWire.jpg",
      title: "Durable Niobium Wire",
      contactName: "Arjun Rao",
      mobile: "9876123450",
      whatsapp: "9876123450",
      landline: "020-667788",
      email: "niobiumwire@company.com",
      website: "www.niobiumwire.com",
      address: "Wakad Industrial Park, Pune",
      dealing: "Superconductors, aerospace, medical implants"
    },
    {
      id: 9,
      brandname: "Chromium Wire",
      name: "Industrial Chromium Wire",
      image: "ChromiumWire.jpg",
      title: "Heat Resistant Chromium Wire",
      contactName: "Vikas Gupta",
      mobile: "9856341290",
      whatsapp: "9856341290",
      landline: "020-998877",
      email: "chromiumwire@company.com",
      website: "www.chromiumwire.com",
      address: "Sector 18, Hinjewadi, Pune",
      dealing: "Heating elements, electroplating, alloys"
    },
    {
        id: 10,
      brandname: "Pure Nickel Wire",
      name: "Nickel Metal Wire",
      image: "NickelWire.jpg",
      title: "High Purity Nickel Wire",
      contactName: "Deepak Singh",
      mobile: "9823450012",
      whatsapp: "9823450012",
      landline: "020-445566",
      email: "nickelwire@company.com",
      website: "www.nickelwire.com",
      address: "Industrial Estate, Hadapsar, Pune",
      dealing: "Battery connectors, aerospace, electrical resistance wires"
    },
    {
      id: 11,
      brandname: "Nickel Alloy Wire",
      name: "Nickel Alloy Industrial Wire",
      image: "NickelAlloyWire.jpg",
      title: "Durable Nickel Alloy Wire",
      contactName: "Sanjay Joshi",
      mobile: "9890123456",
      whatsapp: "9890123456",
      landline: "020-778899",
      email: "nickelalloywire@company.com",
      website: "www.nickelalloywire.com",
      address: "Pimpri Industrial Area, Pune",
      dealing: "High-temperature applications, chemical industry"
    },
    {
      id: 12,
      brandname: "Steel Wire",
      name: "Industrial Steel Wire",
      image: "SteelWire.jpg",
      title: "High Strength Steel Wire",
      contactName: "Nitin Verma",
      mobile: "9811122233",
      whatsapp: "9811122233",
      landline: "020-332211",
      email: "steelwire@company.com",
      website: "www.steelwire.com",
      address: "MIDC Industrial Zone, Pune",
      dealing: "Construction, automotive, and heavy machinery"
    },
    {
      id: 13,
      brandname: "Stainless Steel Wire",
      name: "SS Wire",
      image: "StainlessSteelWire.jpg",
      title: "Corrosion Resistant SS Wire",
      contactName: "Ashok Nair",
      mobile: "9877001122",
      whatsapp: "9877001122",
      landline: "020-110022",
      email: "sswire@company.com",
      website: "www.sswire.com",
      address: "Kharadi Industrial Area, Pune",
      dealing: "Kitchenware, medical instruments, wire mesh"
    },
    {
      id: 14,
      brandname: "Alloy Wire",
      name: "Special Alloy Wire",
      image: "AlloyWire.jpg",
      title: "High Performance Alloy Wire",
      contactName: "Rajeev Menon",
      mobile: "9876654321",
      whatsapp: "9876654321",
      landline: "020-221100",
      email: "alloywire@company.com",
      website: "www.alloywire.com",
      address: "Industrial Hub, PCMC, Pune",
      dealing: "Custom alloys for industrial and aerospace applications"
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
