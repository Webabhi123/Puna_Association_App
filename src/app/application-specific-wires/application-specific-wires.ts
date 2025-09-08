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
  selector: 'app-application-specific-wires',
  imports: [CommonModule,FormsModule],
  templateUrl: './application-specific-wires.html',
  styleUrl: './application-specific-wires.css'
})
export class ApplicationSpecificWires {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Binding Wire",
      name: "Binding Wire Solutions",
      image: "bindingWire.jpg",
      title: "Strong and Durable Binding Wires",
      contactName: "Mr. Rakesh Sharma",
      mobile: "+91-9876543101",
      whatsapp: "+91-9876543101",
      landline: "020-25567891",
      email: "bindingwire@company.com",
      website: "www.bindingwire.com",
      address: "Plot 45, Industrial Estate, Pune, Maharashtra",
      dealing: "Construction, Packaging, Industrial Applications"
    },
    {
      id: 2,
      brandname: "Winding Wire",
      name: "Winding Wire Industries",
      image: "windingWire.jpg",
      title: "High Performance Winding Wires",
      contactName: "Ms. Priya Verma",
      mobile: "+91-9876543102",
      whatsapp: "+91-9876543102",
      landline: "020-25567892",
      email: "windingwire@company.com",
      website: "www.windingwire.com",
      address: "Unit 18, MIDC Area, Nashik, Maharashtra",
      dealing: "Electrical Motors, Transformers, Coils"
    },
    {
      id: 3,
      brandname: "Earthing Wire",
      name: "Earthing Wire Supplies",
      image: "earthingWire.jpg",
      title: "Reliable Earthing Wires",
      contactName: "Mr. Sanjay Patil",
      mobile: "+91-9876543103",
      whatsapp: "+91-9876543103",
      landline: "020-25567893",
      email: "earthingwire@company.com",
      website: "www.earthingwire.com",
      address: "Block 23, Sector A, Bhosari, Pune",
      dealing: "Grounding, Electrical Safety, Industrial Earthing"
    },
    {
      id: 4,
      brandname: "Fuse Wire",
      name: "Fuse Wire Pvt Ltd",
      image: "fuseWire.jpg",
      title: "Quality Fuse Wires",
      contactName: "Ms. Neha Kulkarni",
      mobile: "+91-9876543104",
      whatsapp: "+91-9876543104",
      landline: "020-25567894",
      email: "fusewire@company.com",
      website: "www.fusewire.com",
      address: "Shop 12, Market Road, Satara",
      dealing: "Electric Fuses, Low Current Applications"
    },
    {
      id: 5,
      brandname: "Welding Wires",
      name: "Welding Wire Industries",
      image: "weldingWires.jpg",
      title: "Premium Welding Wires",
      contactName: "Mr. Rajiv Deshmukh",
      mobile: "+91-9876543105",
      whatsapp: "+91-9876543105",
      landline: "020-25567895",
      email: "weldingwire@company.com",
      website: "www.weldingwire.com",
      address: "Plot 102, Chakan Industrial Area, Pune",
      dealing: "Welding, Fabrication, Industrial Applications"
    },
    {
      id: 6,
      brandname: "Brazing Wire",
      name: "Brazing Wire Solutions",
      image: "brazingWire.jpg",
      title: "Efficient Brazing Wires",
      contactName: "Mr. Ajay Nair",
      mobile: "+91-9876543106",
      whatsapp: "+91-9876543106",
      landline: "020-25567896",
      email: "brazingwire@company.com",
      website: "www.brazingwire.com",
      address: "Unit 7, Industrial Zone, Aurangabad",
      dealing: "Brazing, Soldering, Heat Applications"
    },
    {
      id: 7,
      brandname: "Bailing Wire",
      name: "Bailing Wire Company",
      image: "bailingWire.jpg",
      title: "Durable Bailing Wires",
      contactName: "Ms. Ritu Gupta",
      mobile: "+91-9876543107",
      whatsapp: "+91-9876543107",
      landline: "020-25567897",
      email: "bailingwire@company.com",
      website: "www.bailingwire.com",
      address: "Plot 88, Warehouse Zone, Mumbai",
      dealing: "Packaging, Recycling, Industrial Use"
    },
    {
      id: 8,
      brandname: "Guy Wire",
      name: "Guy Wire Industries",
      image: "guyWire.jpg",
      title: "Tensile Strength Guy Wires",
      contactName: "Mr. Deepak Mehta",
      mobile: "+91-9876543108",
      whatsapp: "+91-9876543108",
      landline: "020-25567898",
      email: "guywire@company.com",
      website: "www.guywire.com",
      address: "Sector 15, Noida, Uttar Pradesh",
      dealing: "Electrical Poles, Towers, Stabilization"
    },
    {
      id: 9,
      brandname: "EDM Wires",
      name: "EDM Wire Pvt Ltd",
      image: "edmWires.jpg",
      title: "Precision EDM Wires",
      contactName: "Mr. Kunal Joshi",
      mobile: "+91-9876543109",
      whatsapp: "+91-9876543109",
      landline: "020-25567899",
      email: "edmwires@company.com",
      website: "www.edmwires.com",
      address: "Technology Park, Hinjewadi, Pune",
      dealing: "Electrical Discharge Machining, Tooling, Precision Cutting"
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
