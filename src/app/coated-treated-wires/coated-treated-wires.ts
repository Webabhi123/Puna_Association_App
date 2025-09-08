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
  selector: 'app-coated-treated-wires',
  imports: [CommonModule,FormsModule],
  templateUrl: './coated-treated-wires.html',
  styleUrl: './coated-treated-wires.css'
})
export class CoatedTreatedWires {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "PVC Coated GI Wire",
      name: "PVC Coated GI Wire",
      image: "pvcCoatedGiWire.jpg",
      title: "High Durability GI Wire",
      contactName: "Ravi Kumar",
      mobile: "+91 9876543210",
      whatsapp: "+91 9876543210",
      landline: "020-12345678",
      email: "info@pvcgiwire.com",
      website: "www.pvcgiwire.com",
      address: "Pune, Maharashtra, India",
      dealing: "Durable GI wire coated with PVC for enhanced weather resistance and insulation."
    },
    {
      id: 2,
      brandname: "Iron Wire",
      name: "Iron Wire",
      image: "ironWire.jpg",
      title: "Strong Iron Wire",
      contactName: "Anil Sharma",
      mobile: "+91 9988776655",
      whatsapp: "+91 9988776655",
      landline: "011-23456789",
      email: "sales@ironwire.in",
      website: "www.ironwire.in",
      address: "Delhi, India",
      dealing: "Strong and versatile iron wire commonly used for construction and binding applications."
    },
    {
      id: 3,
      brandname: "Poly Wire",
      name: "Poly Wire",
      image: "polyWire.jpg",
      title: "Lightweight Poly Wire",
      contactName: "Neha Verma",
      mobile: "+91 9123456789",
      whatsapp: "+91 9123456789",
      landline: "022-12340987",
      email: "support@polywire.com",
      website: "www.polywire.com",
      address: "Mumbai, India",
      dealing: "Lightweight, high-strength poly wire widely used in fencing and electrical applications."
    },
    {
      id: 4,
      brandname: "Braided Wires",
      name: "Braided Wires",
      image: "braidedWires.jpg",
      title: "Flexible Braided Wires",
      contactName: "Suresh Nair",
      mobile: "+91 9012345678",
      whatsapp: "+91 9012345678",
      landline: "080-23456712",
      email: "contact@braidedwires.in",
      website: "www.braidedwires.in",
      address: "Bengaluru, India",
      dealing: "Flexible braided wires designed for electrical shielding and grounding purposes."
    },
    {
      id: 5,
      brandname: "Flat Wire",
      name: "Flat Wire",
      image: "flatWire.jpg",
      title: "Specialized Flat Wire",
      contactName: "Pooja Mehta",
      mobile: "+91 9345678901",
      whatsapp: "+91 9345678901",
      landline: "033-23456700",
      email: "info@flatwire.co.in",
      website: "www.flatwire.co.in",
      address: "Kolkata, India",
      dealing: "Specialized flat-shaped wire used in transformers, motors, and winding applications."
    },
    {
      id: 6,
      brandname: "Galvanized Wire",
      name: "Galvanized Wire",
      image: "galvanizedWire.jpg",
      title: "Rust Resistant Galvanized Wire",
      contactName: "Manoj Patel",
      mobile: "+91 9765432100",
      whatsapp: "+91 9765432100",
      landline: "079-12345690",
      email: "sales@galvanizedwire.com",
      website: "www.galvanizedwire.com",
      address: "Ahmedabad, Gujarat, India",
      dealing: "Rust-resistant galvanized wire suitable for fencing, binding, and industrial use."
    },
    {
      id: 7,
      brandname: "Nylon Coated Metal Wire",
      name: "Nylon Coated Metal Wire",
      image: "nylonCoatedMetalWire.jpg",
      title: "Nylon Coated Wire",
      contactName: "Arun Gupta",
      mobile: "+91 9823456712",
      whatsapp: "+91 9823456712",
      landline: "044-12345670",
      email: "support@nylonwire.in",
      website: "www.nylonwire.in",
      address: "Chennai, Tamil Nadu, India",
      dealing: "Metal wire coated with nylon for flexibility, corrosion resistance, and durability."
    },
    {
      id: 8,
      brandname: "Coated Wires",
      name: "Coated Wires",
      image: "coatedWires.jpg",
      title: "Protective Coated Wires",
      contactName: "Kiran Rao",
      mobile: "+91 9933445566",
      whatsapp: "+91 9933445566",
      landline: "040-23450123",
      email: "contact@coatedwires.com",
      website: "www.coatedwires.com",
      address: "Hyderabad, India",
      dealing: "Protective coated wires available in various finishes for electrical and mechanical use."
    },
    {
      id: 9,
      brandname: "Plated Wire",
      name: "Plated Wire",
      image: "platedWire.jpg",
      title: "High Conductivity Plated Wire",
      contactName: "Rohit Malhotra",
      mobile: "+91 9556677880",
      whatsapp: "+91 9556677880",
      landline: "0172-2233445",
      email: "sales@platedwire.in",
      website: "www.platedwire.in",
      address: "Chandigarh, India",
      dealing: "High-conductivity wire plated with metals like silver, nickel, or copper."
    },
    {
      id: 10,
      brandname: "Litz Wire",
      name: "Litz Wire",
      image: "litzWire.jpg",
      title: "Specialized Litz Wire",
      contactName: "Deepak Singh",
      mobile: "+91 9988123456",
      whatsapp: "+91 9988123456",
      landline: "0755-2345671",
      email: "info@litzwire.com",
      website: "www.litzwire.com",
      address: "Bhopal, Madhya Pradesh, India",
      dealing: "Special type of wire consisting of many thin strands, used for reducing skin effect in high-frequency applications."
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
